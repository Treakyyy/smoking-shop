import React from 'react'
import styles from './MenuOthers.module.css'
import GreenButton from '../../../UI/Button/GreenButton/GreenButton'

const MenuOthers = () => {
  return (
    <div className={styles.MenuOthers}>
      <img className={styles.img} src="/assets/img/search.svg" alt="" />
      <img src="/assets/img/basket.svg" alt="" />
      <GreenButton text={'Войти'} img="/assets/img/logout.svg" />
    </div>
  )
}

export default MenuOthers
