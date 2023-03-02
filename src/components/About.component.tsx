import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'
import { KitchenLogo } from 'components/Logos/Logos';
import { useTheme, useMediaQuery } from '@mui/material';
import styles from 'styles/About.module.scss';
import Image from 'next/image';

export interface AboutProps {
    id?: number;
    description?: string;
    imageLeft?: any;
    imageRight?: any;
}

const About = ({ description, imageLeft, imageRight }: AboutProps) => {
    const theme = useTheme()
    const notMobile = useMediaQuery(theme.breakpoints.up('sm'))
    const notTablet = useMediaQuery(theme.breakpoints.up('lg'))
    return (
        <div className={styles.about} >
            <div className={styles.aboutTextContainer}>
                <div className={styles.aboutText}>
                    <Typography variant='body1' fontWeight='400'>
                        {' '} Cantina moderna que ofrece comida, cafetería y coctelería vegetariana, vegana y sin TACC.{' '}
                    </Typography>
                    <Typography variant='body1' fontWeight='400'>
                        {' '}
                        Un espacio dinámico, lleno de vida donde recibimos a todas las personas que quieran visitarnos (y a sus mascotas también).
                    </Typography>
                    <Typography variant='body1' fontWeight='400'>
                        {' '}
                        Un oasis en el centro de Rosario, donde predomina la frescura, los colores, y la luz natural.
                    </Typography>
                    <Typography variant='body1' fontWeight='400'>
                        {' '}
                        Nuestro equipo está cerca, para atenderte y ayudarte en lo que necesites, visitanos!
                    </Typography>
                </div>
                <div className={styles.aboutImgDown}>
                    {/* NOT TABLET */}
                    {notTablet && <Image src={'/home-about1.jpg'} alt='Chica Local 2' width={880} height={350} loading='lazy' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />}
                </div>
            </div>
            {notMobile &&
                <div className={styles.aboutLogoImgContainer}>
                    {/* NOT MOBILE */}
                    <Stack justifyContent='flex-start' className={styles.LogoImg} >
                        <div className={styles.aboutLogo}>
                            <KitchenLogo />
                        </div>
                        <div className={styles.aboutImg}>
                            <Image src={'/home-about2.jpg'} alt='Chica Local 3' fill loading='lazy' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </div>
                    </Stack>
                </div>
            }
        </div>

    )
}

export default About