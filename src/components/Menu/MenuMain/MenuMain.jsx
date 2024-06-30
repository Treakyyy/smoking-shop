import React from 'react'
import { useDispatch } from 'react-redux'
import {
  scrollToAboutUs,
  scrollToBlog,
  scrollToProduct,
} from '../../../store/store'
import styles from './MenuMain.module.css'

const MenuMain = () => {
  const dispatch = useDispatch()

  const handleScrollToBlog = () => {
    dispatch(scrollToBlog())
  }

  const handleScrollToProduct = () => {
    dispatch(scrollToProduct())
  }

  const handleScrollToAboutUs = () => {
    dispatch(scrollToAboutUs())
  }

  return (
    <div className={styles.MenuMain}>
      <button className={styles.button}>Главная</button>
      <button className={styles.button} onClick={handleScrollToProduct}>
        Каталог
      </button>
      <button className={styles.button} onClick={handleScrollToBlog}>
        Блог
      </button>
      <button className={styles.button} onClick={handleScrollToAboutUs}>
        О нас
      </button>
    </div>
  )
}

export default MenuMain
