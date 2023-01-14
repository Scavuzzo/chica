import React from 'react'
// import { useLayoutStyles } from 'styles/layout.styles'
import { ReactNode } from 'react';
import Header from 'components/Header.component';
import { Footer } from 'components/Footer.component';
import styles from 'styles/Layout.module.scss'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  
  return (
    <div id='layout'>
      <Header/>
        <main className={styles.container}>{children}</main>
      <Footer/>
    </div>
  )
}
