import { SwitchPaletteMode } from 'components/SwitchMode/SwitchMode.component'
import { SwitchLocale } from './SwitchLocale/SwitchLocale.component';
import type { } from '@mui/material/themeCssVarsAugmentation';
import Link from 'next/link';
import styles from 'styles/Header.module.scss'
import { easeIn, motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '@mui/material';
import { ChicaLogo } from './Logos/Logos';
import { BtnHamb } from './BtnHamb.component';

const Header = () => {
  const theme = useTheme()
  const { scrollY } = useScroll()
  const zero = 0
  const max = 300
  const min = 150
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
        <BtnHamb/>
      </motion.div>
    </motion.header>
  )
}

export default Header