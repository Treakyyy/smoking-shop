import React from 'react'
import styles from './Menu.module.css'
import MenuMain from './MenuMain/MenuMain'
import MenuOthers from './MenuOthers/MenuOthers'

const Menu = () => {
  return (
    <div className={styles.Menu}>
      <MenuMain />
      <MenuOthers />
    </div>
  )
}

export default Menu
