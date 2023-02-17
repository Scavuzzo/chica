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
                        {' '}
                        Desde Chica Eventos ofrecemos un servicio de cocteleria premium
                        adaptado a la necesidad de cada cliente.{' '}
                    </Typography>
                    <Typography variant='body1' fontWeight='400'>
                        {' '}
                        Nuestra calidad nos respalda, la hospitalidad nos destaca y estamos
                        en constante busqueda de innovacion para seguir ofreciendo un
                        distinguido servicio.
                    </Typography>
                    <Typography variant='body1' fontWeight='400'>
                        {' '}
                        Con mas de 4 anos de experiencia, te dejamos con la tranquilidad de
                        delegar y confiar en nosotros para resolver tu evento.
                    </Typography>                </div>
                <div className={styles.aboutImgDown}>
                    {/* NOT TABLET */}
                    {notTablet && <Image src={'/home-about1.jpg'} alt='Chica Local 2' width={880} height={350} />}
                </div>
            </div>
            {notMobile &&
                <div className={styles.aboutLogoImgContainer}>
                    {/* NOT MOBILE */}
                    <Stack justifyContent='flex-start' >
                        <div className={styles.aboutLogo}>
                            <KitchenLogo />
                        </div>
                        <div className={styles.aboutImg}>
                            <Image src={'/home-about2.jpg'} alt='Chica Local 3' width={880} height={586.666666} />
                        </div>
                    </Stack>
                </div>
            }
        </div>

    )
}

export default About