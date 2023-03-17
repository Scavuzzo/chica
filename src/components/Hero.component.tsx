import { useTheme } from '@mui/material/';
import { useMediaQuery } from '@mui/material/';
import { m, Variants } from 'framer-motion';
import styles from 'styles/Hero.module.scss'
import Image from 'next/image';


const transition = { type: 'tween', duration: .6 };
const imgUp: Variants = {
  initial: { x: '40vw', opacity: 0 },
  animate: { x: 0, opacity: 1 }
}
const imgDown: Variants = {
  initial: { x: '-40vw', opacity: 0 },
  animate: { x: 0, opacity: 1 }
}
export const text: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { type: 'tween', duration: .9 } }
}


const Hero = () => {
    const theme = useTheme()
    const notTablet = useMediaQuery(theme.breakpoints.up('lg'))

    return (
        <div className={styles.hero}>
          <div className={styles.heroImgUp}>
            <m.div className={styles.heroImg}
                variants={imgUp}
                initial='initial'
                animate='animate'
                transition={transition}
            >
            <Image src={'/home-hero1.jpg'} alt='Chica Producto 1' fill priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </m.div>
          </div>
          <m.div
            className={styles.heroTitle}
            variants={text}
            initial='initial'
            animate='animate'
          >
            <h1>CAFÉ, COCINA Y CÓCTELES</h1>
          </m.div>
          <div className={styles.heroContainerDown}>
          <div className={styles.heroImgDown}>
            <m.div
              className={styles.heroImg}
              variants={imgDown}
              initial='initial'
              animate='animate'
              transition={transition}
            >
              <Image src={'/home-hero2.jpg'} alt='Chica Local 1' fill priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
            </m.div>
          </div>
            {
              notTablet && 
                <m.img
                    className={styles.heroLogoDown}
                    src='/circle-logo.webp'
                    variants={text}
                    initial='initial'
                    animate='animate'
                    height={200}
                    width={200}
                    alt='Chica Logo'
                />
            }
          </div>
        </div>
    )
}

export default Hero;