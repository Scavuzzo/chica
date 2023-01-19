import React from 'react'
import { KitchenLogo } from './Logos/Logos'
import { css } from '@mui/material';

const Loader = () => {
  return (
    <div
        css={css`
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            height: 100vh;
            width: 100vw;
            display: flex;
            background-color: var(--mui-palette-primary-main);
        `}
    >
        <div
            css={css`
                fill: var(--mui-palette-text-primary)
            `}
        >
            <KitchenLogo/>
        </div>
    </div>
  )
}

export default Loader