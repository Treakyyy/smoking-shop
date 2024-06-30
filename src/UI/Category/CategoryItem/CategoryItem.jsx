import React from 'react'
import styles from './CategoryItem.module.css'

const CategoryItem = ({ text, number }) => {
  return (
    <div className={styles.category_item}>
      <div className={styles.categoty__item_expand}>
        <img src="/assets/img/expand.svg" alt="" />
        <span className={styles.text}>{text}</span>
      </div>
      <span className={styles.number}>({number})</span>
    </div>
  )
}

export default CategoryItem
