import React from 'react'
import styles from './ProductMenu.module.css'
import ProductMenuButton from './ProductMenuButton'

const ProductMenu = ({ setIsColumn }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container_button}>
        <button className={styles.button}>Наши товары</button>
        <button className={styles.button}>Все товары</button>
        <button className={styles.button}>Новинки</button>
        <button className={styles.button}>Скидки</button>
      </div>
      <div>
        <ProductMenuButton setIsColumn={setIsColumn} />
      </div>
    </div>
  )
}

export default ProductMenu
