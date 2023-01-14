import React from 'react'
import styles from 'styles/Footer.module.scss'
import { ChicaLogo } from 'components/Logos/Logos';
import { Stack } from '@mui/material';
import WhatsApp from '@mui/icons-material/WhatsApp';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Instagram from '@mui/icons-material/Instagram';
import Link from 'next/link';

export const Footer = () => {

  return (
      <footer
        className={styles.root} >
        <div className={styles.logo}>
        <Link href='/'>
          <ChicaLogo />
        </Link>
        </div>
        <Stack direction='row' className={styles.social}>
          <Link href='https://wa.me/5493416696995' target='_blank' rel="noreferrer" >
            <WhatsApp />
          </Link>
          <Link href='https://www.linkedin.com/company/chica-kitchen/?originalSubdomain=ar' target='_blank' rel="noreferrer">
            <LinkedIn />
          </Link>
          <Link href='https://www.instagram.com/chicakittchen/' target='_blank' rel="noreferrer" >
            <Instagram />
          </Link>
        </Stack>
      </footer>
  )
}
