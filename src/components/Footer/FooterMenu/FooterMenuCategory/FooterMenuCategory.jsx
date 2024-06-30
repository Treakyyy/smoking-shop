import React from 'react'
import styles from './FooterMenuCategory.module.css'

const FooterMenuCategory = () => {
  return (
    <div className={styles.category}>
      <h3 className={styles.title}>Категории</h3>
      <div className={styles.conteiner_button}>
        <button className={styles.button}>IQOS</button>
        <button className={styles.button}>Аксессуары</button>
        <button className={styles.button}>Кальянные смеси</button>
        <button className={styles.button}>Кальяны</button>
        <button className={styles.button}>Комплектующие</button>
        <button className={styles.button}>Мерч</button>
        <button className={styles.button}>Уголь</button>
        <button className={styles.button}>Электронные сигареты</button>
      </div>
    </div>
  )
}

export default FooterMenuCategory
