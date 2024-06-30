import React from 'react'
import styles from './FooterMenu.module.css'
import FooterMenuHelp from './FooterMenuHelp/FooterMenuHelp'
import FooterMenuAccount from './FooterMenuAccount/FooterMenuAccount'
import FooterMenuCategory from './FooterMenuCategory/FooterMenuCategory'
import FooterMenuSocial from './FooterMenuSocial/FooterMenuSocial'

const FooterMenu = () => {
  return (
    <div className={styles.footerMenu}>
      <FooterMenuHelp />
      <FooterMenuAccount />
      <FooterMenuCategory />
      <FooterMenuSocial />
    </div>
  )
}

export default FooterMenu
