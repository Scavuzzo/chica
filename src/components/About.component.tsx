import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'
import { KitchenLogo } from 'components/Logos/Logos';
import { useTheme, useMediaQuery } from '@mui/material';
import styles from 'styles/About.module.scss';
import Image from 'next/image';
import { getStrapiMedia } from '../lib/media';

export interface AboutProps {
    id: number;
    description: string;
    imageLeft: any;
    imageRight: any;
}

const About = ({ description, imageLeft, imageRight }: AboutProps) => {
    const theme = useTheme()
    const notMobile = useMediaQuery(theme.breakpoints.up('sm'))
    const notTablet = useMediaQuery(theme.breakpoints.up('lg'))
    return (
        <div className={styles.about} >
            <div className={styles.aboutTextContainer}>
                <div className={styles.aboutText}>
                    {
                        description.split(/\r\n|\r|\n/,-1).map((p, i) => {
                            return <Typography key={i} variant='body1' fontWeight='400'>{p}</Typography>
                            })
                    }
                </div>
                <div className={styles.aboutImgDown}>
                    {/* NOT TABLET */}
                    {notTablet && <Image src={getStrapiMedia(imageLeft)} alt='Chica Local 2' width={880} height={350} />}
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
                            <Image src={getStrapiMedia(imageRight)} alt='Chica Local 3' width={880} height={586.666666} />
                        </div>
                    </Stack>
                </div>
            }
        </div>

    )
}

export default About