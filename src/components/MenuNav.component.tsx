import Link from 'next/link';
import React from 'react'
import Button from 'components/Button.component';
import { domAnimation, LazyMotion, m, useTransform, useScroll } from 'framer-motion';
import { css } from '@mui/material';
import { BARLOW } from 'theme'


const MenuNav = () => {
    const { scrollY } = useScroll()
    const max = 280
    const min = 150
    const opacity = useTransform(
        scrollY,
        [min, max],
        [0, 1],
    )
  return (
    <LazyMotion features={domAnimation}>
        <m.nav 
            style={{opacity: opacity}} 
            css={css`
                display: flex;
                gap: 1.5em;
                font-size: 16px;
                & a {
                    font-weight: 200;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    font-family: ${BARLOW}
                }
            `}
        >
            <Link href='/#visitanos'>
                Visitanos
            </Link>
            <Link href='https://wa.me/5493416696995' target='_blank' rel="noreferrer">
                <Button>
                    Reserva
                </Button>
            </Link>
        </m.nav>
    </LazyMotion>

  )
}

export default MenuNav;