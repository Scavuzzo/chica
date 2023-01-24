import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image';
import styles from 'styles/SwitchLocale.module.scss'
import { css } from '@mui/material';
import { motion, useCycle } from 'framer-motion';
import { variants, itemVariants, transition } from './SwitchLocale.animations';
import TranslateIcon from '@mui/icons-material/Translate';

export const SwitchLocale = () => {
  const { route } = useRouter();
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <div className={styles.switchLocale} onClick={() => toggleOpen()} >
      <motion.div 
        className={styles.selectedLocale} 
        transition={transition}
        whileTap={{scale: .8}} 
        >
        <TranslateIcon css={css`var(--mui-palette-primary-contrastText`} fontSize={'inherit'} className={styles.icon}/>
      </motion.div>
      <motion.div 
        variants={variants}
        transition={transition} 
        className={styles.dropdown}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        >
        <motion.div whileTap={{scale: .9}} variants={itemVariants}>
          <Link href={route} locale={'es'} ><Image src='/flags/flag-arg.png' alt='arg' width={18} height={18} /></Link>
        </motion.div>
        <motion.div whileTap={{scale: .9}} variants={itemVariants}>
          <Link href={route} locale={'en'} ><Image src='/flags/flag-usa.png' alt='arg' width={18} height={18} /></Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
