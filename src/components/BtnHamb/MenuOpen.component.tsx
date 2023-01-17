import { Stack, Typography } from '@mui/material';
import  Link  from 'next/link';
import styles from 'styles/MenuOpen.module.scss'
import Instagram from '@mui/icons-material/Instagram';
import WhatsApp from '@mui/icons-material/WhatsApp';
import LinkedIn from '@mui/icons-material/LinkedIn';
import { ViewContext } from 'contexts/view.context';
import { useContext } from 'react';
import { motion, Variants } from 'framer-motion';
import { KitchenLogo } from 'components/Logos/Logos';

interface NavProps {
  extended?: boolean;
  color?: 'primary' | 'secondary';
  className?: string;
  hide?: boolean;
}

export const MenuOpen = (props: NavProps): JSX.Element => {
  const { menuOpen, setMenuOpen } = useContext(ViewContext);

  const menu: Variants = {
    closed: {
      opacity: 0.8,
    },
    open: {
      x: '-100vw',
      opacity: 1,
    },
  };
  const menuItems = [
    // {
    //   title: 'CAFÉ',
    //   path: '/'
    // },
    // {
    //   title: 'COCINA',
    //   path: '/'
    // },
    // {
    //   title: 'CÓCTELES',
    //   path: '/'
    // },
    {
      title: 'Visitanos',
      path: '/#visitanos',
    },
    {
      title: 'Reservá',
      path: 'https://wa.me/5493416696995',
    },
    // {
    //   title: 'Eventos',
    //   path: '/events',
    // },
  ];

  return (
    <motion.div
      className={styles.root}
      initial='closed'
      animate={menuOpen ? 'open' : 'closed'}
      variants={menu}
      transition={{ type: 'tween', duration: 0.4 }}
    >
      <Stack className={styles.container}>
        <Link onClick={(): void => setMenuOpen(false)} href='/'>
            <KitchenLogo className={styles.logo} />
        </Link>
        <Stack className={styles.nav}>
          {menuItems.map((item, i) => (
            <Link
              onClick={(): void => setMenuOpen(false)}
              key={`menu_${i}`}
              href={item.path}
              scroll={false}
              className={styles.link}
            >
              <Typography variant='h4'>{item.title}</Typography>
            </Link>
          ))}
        </Stack>
        <a href='tel:+5493416696995'>
          <Typography className={styles.phone} variant='body1' align='center'>
            +54 9 341 669 6995
          </Typography>
        </a>
        <div className={styles.social}>
          <div>
            <a href='https://wa.me/5493416696995' target='_blank' rel="noreferrer" >
              <WhatsApp />
            </a>
          </div>
          <div>
            <a href='https://www.linkedin.com/company/chica-kitchen/?originalSubdomain=ar' target='_blank' rel="noreferrer" >
              <LinkedIn />
            </a>
          </div>
          <div>
            <a href='https://www.instagram.com/chicakittchen/' target='_blank' rel="noreferrer" >
              <Instagram />
            </a>
          </div>
        </div>
      </Stack>
    </motion.div>
  );
};
