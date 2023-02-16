import type { } from '@mui/material/themeCssVarsAugmentation';
import Link from 'next/link';
import styles from 'styles/Header.module.scss'
import { domAnimation, LazyMotion, useScroll, useTransform, m } from 'framer-motion';
import { useTheme, useMediaQuery } from '@mui/material';
import { ChicaLogo } from './Logos/Logos';
import { BtnHamb } from './BtnHamb/BtnHamb.component';
import MenuNav from './MenuNav.component';
import { text } from 'components/Hero.component';

const Header = () => {
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('lg'));
  const { scrollY, scrollYProgress} = useScroll()
  const max = 400
  const min = 200
  const height = useTransform(
    scrollY,
    [min, max],
    [60, 60],
  )
  const boxShadow = useTransform(
    scrollY,
    [min, max],
    ['0 0px 0px 0px var(--mui-palette-text-primary)', '0 -9px 9px 2px var(--mui-palette-text-primary)']
  )

  return (
    <LazyMotion features={domAnimation}>
      <m.header className={styles.header} style={{ height, boxShadow }}>
        <Link href='/' className={styles.logo}>
          <m.div 
            style={{all: 'inherit'}}
            initial='initial'
            animate='animate'
            variants={text}
          >
            <ChicaLogo />
          </m.div>
        </Link>
        <m.div className={styles.NavIcons}>
          {/* <SwitchPaletteMode /> */}
          {
            mobile && <BtnHamb/>
          }
          {
            !mobile && <MenuNav/>
          }
        </m.div>
        <m.span style={{ scaleY: scrollYProgress }} className={styles.scrollbar} />      
      </m.header>
    </LazyMotion>
  )
}

export default Header