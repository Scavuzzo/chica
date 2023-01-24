import Head from 'next/head'
import styles from 'styles/Home.module.scss'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Stack, useMediaQuery, useTheme, responsiveFontSizes } from '@mui/material';
import Typography from '@mui/material/Typography';
import { domAnimation, LazyMotion, m, Variants } from 'framer-motion';
import { KitchenLogo } from 'components/Logos/Logos';
import Block from 'components/Block.component';

export async function getStaticProps({ locale }:any) {
  
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", 'block']))
    }
  }
}


export async function getInitialProps() {
  return {
    headers: {
      'Cache-Control': 'max-age=604800, public'
    }
  }
}
const transition = { type: 'tween', duration: .6 };
const imgUp: Variants = {
  initial: { right: '-40vw', opacity: 0 },
  animate: { right: 0,opacity: 1 }
}
const imgDown: Variants = {
  initial: { left: '-40vw', opacity: 0 },
  animate: { left: 0,opacity: 1 }
}
export const text: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { type: 'tween', duration: .3 } }
}

export default function Home() {
  const { t } = useTranslation()
  const theme = useTheme()
  const notTablet = useMediaQuery(theme.breakpoints.up('lg'))
  const notMobile = useMediaQuery(theme.breakpoints.up('sm'))
  const cafeImages = ['/block-cafe1.jpg', '/block-cafe2.jpg', '/block-cafe3.jpg']
  const cocinaImages = ['/block-cocina1.jpg', '/block-cocina2.jpg', '/block-cocina3.jpg']
  const cocktailImages = ['/block-cocktail1.jpg', '/block-cocktail2.jpg', '/block-cocktail3.jpg']


  return (
    <div className={styles.container}>
      <Head>
        <title>Chica</title>
        {/* PWA primary color */}
        <meta name="theme-color" content={theme.palette.primary.main} />
        <meta name="description" content="Chica, café de especialidad, cocina vegana y vegetariana, cócteles de autor. Petfriendly. Rosario, Santa Fe, Argentina." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* HERO */}
      <LazyMotion features={domAnimation}>
        <div className={styles.hero}>
          <div className={styles.heroImgUp}>
            <m.img
              className={styles.heroImg}
              src='/home-hero1.jpg'
              variants={imgUp}
              initial='initial'
              animate='animate'
              transition={transition}
            />
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
              <m.img
                className={styles.heroImg}
                src='/home-hero2.jpg'
                variants={imgDown}
                initial='initial'
                animate='animate'
                transition={transition}
                alt='Chica Producto 1'
              />
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
        {/* ABOUT */}
        <div
          className={styles.about}
        >
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
              </Typography>
            </div>
            <div className={styles.aboutImgDown}>
              {notTablet && <img src='/home-about1.jpg' alt='Chica Local 2' />}
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
                  <img src='/home-about2.jpg' alt='Chica Local 3' />
                </div>
              </Stack>
            </div>
          }
        </div>
        {/* BLOCKS */}
        <Block title={t('block:cafeTitle')} text={t('block:cafeText')} images={cafeImages} alt='Café de especialidad' />
        <Block title={t('block:cocinaTitle')} text={t('block:cocinaText')} images={cocinaImages} alt='Cocina vegana, vegetariana' />
        <Block title={t('block:cocktailTitle')} text={t('block:cocktailText')} images={cocktailImages} alt='Cócteles de autor' />
        {/* CONTACT */}
        <div className={styles.contact} id='visitanos'>
          <div className={styles.contactGridItem} >
            <div className={styles.contactImg}>
              <img src='/home-contact1.jpg' alt='Chica Local 4' />
            </div>
          </div>
          <div className={styles.contactGridItem} >
            <div className={styles.contactTextContainer}>
              <div className={styles.contactIframeContainer}>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8194.657903171781!2d-60.66756197388185!3d-32.945888563765145!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd98f7dc4b932bceb!2sChica%20Kitchen!5e0!3m2!1ses!2sar!4v1668093278580!5m2!1ses!2sar'
                  width='100%'
                  height='100%'
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading='lazy'
                  title='GoogleMaps'
                ></iframe>
              </div>
              <Typography variant='body2'>
                San Martín 834, Rosario, Santa Fe.
              </Typography>
              <Typography variant='body2'>Galería Pasaje de la Nación - Local 16</Typography>
              <a href='tel:+5493416696995'>
                <Typography variant='body2'> +54 9 341 669 6995 </Typography>
              </a>
              <a href='mailto:hola@chicakitchen.com' target='_blank' rel='noreferrer'>
                <Typography variant='body2'>hola@chicakitchen.com</Typography>
              </a>
            </div>
          </div>
        </div>
      </LazyMotion>
    </div>

  )
}

