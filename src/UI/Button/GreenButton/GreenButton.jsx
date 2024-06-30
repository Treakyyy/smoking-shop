import React from 'react'
import styles from './GreenButton.module.css'

const GreenButton = ({ text, img }) => {
  return (
    <button className={styles.button}>
      {img && <img src={img} alt="" />}
      {text}
    </button>
  )
}

export default GreenButton
