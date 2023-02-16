import React from 'react'
import GoogleMaps from 'components/GoogleMaps/GoogleMaps.component';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import contact1 from 'images/home-contact1.jpg';
import styles from 'styles/Contact.module.scss'
import Link from 'next/link';
import { getStrapiMedia } from '../lib/media';

export interface ContactProps {
    id: number;
    address: string;
    subaddress: string;
    phone: string;
    email: string;
    image: any;
}

const Contact = ({image, address, subaddress, phone, email}: ContactProps) => {
  return (
      <div className={styles.contact} id='visitanos'>
          <div className={styles.contactGridItem} >
              <div className={styles.contactImg}>
                  <Image src={getStrapiMedia(image)} alt='Chica Local 4' fill />
              </div>
          </div>
          <div className={styles.contactGridItem} >
              <div className={styles.contactTextContainer}>
                  <div className={styles.contactIframeContainer} >
                      <GoogleMaps src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8194.657903171781!2d-60.66756197388185!3d-32.945888563765145!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd98f7dc4b932bceb!2sChica%20Kitchen!5e0!3m2!1ses!2sar!4v1668093278580!5m2!1ses!2sar' />
                  </div>
                  <Typography variant='body2'> {address} </Typography>
                  <Typography variant='body2'>{subaddress}</Typography>
                  <Link href={`tel:${phone.replaceAll(" ", "").trim()}`}><Typography variant='body2'> {phone} </Typography></Link>
                  <Link href={`mailto:${email}`} target='_blank' rel='noreferrer'><Typography variant='body2'>{email}</Typography></Link>
              </div>
          </div>
      </div>

  )
}

export default Contact