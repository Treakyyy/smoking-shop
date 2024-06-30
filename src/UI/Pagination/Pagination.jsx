import React from 'react'
import styles from './Pagination.module.css'

const Pagination = () => {
  return (
    <div className={styles.Pagination}>
      <button className={styles.number}>1</button>
      <button className={styles.number}>2</button>
      <button className={styles.number}>3</button>
      <button className={styles.number}>4</button>
      <button className={styles.number}>
        <img src="/assets/img/pagination.svg" alt="contunie" />
      </button>
    </div>
  )
}

export default Pagination
