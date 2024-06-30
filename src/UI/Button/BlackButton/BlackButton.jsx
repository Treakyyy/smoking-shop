import React from 'react'
import styles from './BlackButton.module.css'

const BlackButton = ({ text }) => {
  return <button className={styles.button}>{text}</button>
}

export default BlackButton
