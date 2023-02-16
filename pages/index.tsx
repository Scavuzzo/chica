import Head from 'next/head'
import styles from 'styles/Home.module.scss'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Stack, useMediaQuery, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import { domAnimation, LazyMotion } from 'framer-motion';
import { KitchenLogo } from 'components/Logos/Logos';
import Block, { BlockProps } from 'components/Block.component';
import GoogleMaps from 'components/GoogleMaps/GoogleMaps.component';
import { fetchAPI } from 'lib/api';
import Hero, { HeroProps } from 'components/Hero.component';
import About, { AboutProps } from 'components/About.component';
import Contact from 'components/Contact.component';
import { ContactProps } from '../src/components/Contact.component';
interface HomeProps {
    id: number;
    attributes: {
      blocks: BlockProps[];
      hero: HeroProps;
      about: AboutProps;
      contact: ContactProps;
    }
}



export default function Home({  home }: { home: HomeProps }) {
  const { t } = useTranslation()
  const theme = useTheme()
  const hero: HeroProps = home.attributes.hero
  const about = home.attributes.about
  const contact = home.attributes.contact

  return (
    <div className={styles.container}>
      <Head>
        <title>Chica</title>
        {/* PWA primary color */}
        <meta name="theme-color" content={theme.palette.primary.main} />
        <meta name="description" content="Chica, café de especialidad, cocina vegana y vegetariana, cócteles de autor. Petfriendly. Rosario, Santa Fe, Argentina." />
      </Head>
      <LazyMotion features={domAnimation}>
        <Hero {...hero} />
        <About {...about} />
        {
          home.attributes.blocks.map((block: BlockProps) => <Block key={block.id} {...block} />)
        }
        {/* CONTACT */}
        <Contact {...contact} />
      </LazyMotion>
    </div>

  )
}

export async function getStaticProps({ locale }: { locale: string}) {
  const [ home ] = await Promise.all([
    fetchAPI('/home', {
      populate: {
        hero: {
          populate: "*",
        },
        blocks: {
          populate: "*",
        },
        about: {
          populate: "*"
        },
        contact: {
          populate: "*"
        }
      }
    })
  ])
  

  return {
    props: {
      home: home.data,
      ...(await serverSideTranslations(locale, ["home", 'block'])),
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
