import Head from 'next/head'
import styles from 'styles/Home.module.scss'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTheme } from '@mui/material';
import { domAnimation, LazyMotion, Variants } from 'framer-motion';
import Block from 'components/Block.component';
import Hero from 'components/Hero.component';
import Contact from 'components/Contact.component';
import About from 'components/About.component';
import { organizationData } from 'constants/structuredData';

export async function getStaticProps({ locale }: any) {
  
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
        <meta name="description" content="Cantina moderna que ofrece cafetería y coctelería de autor, comida vegetariana, vegana y sin TACC. Petfrinedly Rosario, Santa Fe, Argentina." />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">
          {JSON.stringify(organizationData)}
        </script>
        <meta name="keywords" content="Chica, Kitchen, Cocina, Vegana, Vegetariana, Cafe, Cocteles, Petfriendly, Rosario, Comida, Sin TACC "/>
        <meta name='author' content='Chica Kitchen'/>
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

