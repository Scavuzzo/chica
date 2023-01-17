import { SwitchPaletteMode } from 'components/SwitchMode/SwitchMode.component'
import { SwitchLocale } from './SwitchLocale/SwitchLocale.component';
import type { } from '@mui/material/themeCssVarsAugmentation';
import Link from 'next/link';
import styles from 'styles/Header.module.scss'
import { easeIn, motion, useScroll, useTransform } from 'framer-motion';
import { useTheme, useMediaQuery } from '@mui/material';
import { ChicaLogo } from './Logos/Logos';
import { BtnHamb } from './BtnHamb/BtnHamb.component';
import MenuNav from './MenuNav.component';

const Header = () => {
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('lg'));
  const { scrollY, scrollYProgress} = useScroll()
  const zero = 0
  const max = 300
  const min = 50
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
    <motion.header className={styles.header} style={{ height, boxShadow }}>
      <Link href='/' className={styles.logo}>
        <ChicaLogo />
      </Link>
      <motion.div className={styles.NavIcons}>
        {/* <SwitchPaletteMode /> */}
        {
          mobile && <BtnHamb/>
        }
        {
          !mobile && <MenuNav/>
        }
      </motion.div>
      <motion.span style={{ scaleY: scrollYProgress }} className={styles.scrollbar} />      
    </motion.header>
  )
}

export default Header