import { Button as MuiButton } from '@mui/material'
import React from 'react'
import styles from 'styles/Button.module.scss'

interface ButtonProps{
    children: string,
    onClick?: () => void
}

const Button = ({children, onClick }: ButtonProps) => {
  return (
    <MuiButton className={styles.btn} onClick={onClick}>
      {children}
    </MuiButton>
  )
}

export default Button;