import React, { useState } from 'react'
import styles from './BasketComponent.module.css'
import GreenButton from '../../../UI/Button/GreenButton/GreenButton'

const BasketComponent = () => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1)
    }
  }

  return (
    <div className={styles.hover_item}>
      <GreenButton text={'В корзину'} />
      <div className={styles.count}>
        <button onClick={handleDecrement} className={styles.btn}>
          -
        </button>
        <div>{count}</div>
        <button onClick={handleIncrement} className={styles.btn}>
          +
        </button>
      </div>
    </div>
  )
}

export default BasketComponent
