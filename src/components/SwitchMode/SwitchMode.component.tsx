import React, { useEffect, useState } from 'react'
import { useColorScheme, css } from '@mui/material';
import { ReactNode } from 'react';
import { MoonIcon } from './MoonIcon.component';
import { SunIcon } from './SunIcon.component';
import { motion, MotionValue } from 'framer-motion';

export const SwitchPaletteMode = () => {
    const [icon, setIcon] = useState<ReactNode>(<SunIcon />)
    const { mode, setMode } = useColorScheme()
    useEffect(() => {
        mode === 'light' ?
            setIcon(<MoonIcon />)
            :
            setIcon(<SunIcon />)
    }, [mode])

    return (
        <div
            css={css`
                cursor: pointer;
                height: fit-content;
                display: flex;
                margin: auto;
                font-size: 18px;
                fill: inherit;
            `}
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')} >
            {icon}
        </div>
    )
}
