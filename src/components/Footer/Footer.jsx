import React from 'react'
import styles from './Footer.module.css'
import FooterContact from './FooterContact/FooterContact'
import FooterMenu from './FooterMenu/FooterMenu'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <FooterContact />
      <FooterMenu />
    </div>
  )
}

export default Footer
