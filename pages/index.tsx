import Head from 'next/head'
import styles from 'styles/Home.module.scss'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Stack, useMediaQuery, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import { domAnimation, LazyMotion, m, Variants } from 'framer-motion';
import { KitchenLogo } from 'components/Logos/Logos';
import Block from 'components/Block.component';
import GoogleMaps from 'components/GoogleMaps/GoogleMaps.component';
import Image from 'next/image';
import Hero from 'components/Hero.component';
import Contact from 'components/Contact.component';
import About from 'components/About.component';

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
      <LazyMotion features={domAnimation}>
        {/* HERO */}
        <Hero />
        {/* ABOUT */}
          <About />
        {/* BLOCKS */}
          <Block title={t('block:cafeTitle')} subtitle={t('block:cafeSubtitle')} text={t('block:cafeText')} images={cafeImages} alt='Café de especialidad' />
          <Block title={t('block:cocinaTitle')} subtitle={t('block:cocinaSubtitle')} text={t('block:cocinaText')} images={cocinaImages} alt='Cocina vegana, vegetariana' />
          <Block title={t('block:cocktailTitle')} subtitle={t('block:cocktailSubtitle')} text={t('block:cocktailText')} images={cocktailImages} alt='Cócteles de autor' />
        {/* CONTACT */}
          <Contact />
      </LazyMotion>
    </div>

  )
}

