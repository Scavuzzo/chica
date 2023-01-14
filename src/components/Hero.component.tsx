import Image from "next/image"
import { css, Typography } from '@mui/material';
import { motion } from "framer-motion";
import { useTranslation } from 'next-i18next';


const Hero = () => {
  const { t } = useTranslation()
  return (
    <section
      css={css`
        position: relative;
        height: 600px;
        object-fit: contain;
        display: flex;
      `}
    >
        <Image
            src='/hero.jpg'
            alt='Hero Home'
            fill
        />
        <motion.div
          css={css`
            margin: auto;
            z-index: 10;
          `}
        >
          <Typography variant="h1" fontWeight={'bolder'}>
            {t('welcome:title')}
          </Typography>
        </motion.div>
    </section>
  )
}

export default Hero