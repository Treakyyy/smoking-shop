import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.Header}>
      <img className="img" src="/assets/img/vk.svg" alt="vk" />
      <img className="img" src="/assets/img/youtube.svg" alt="youtube" />
      <img className="img" src="/assets/img/telegram.svg" alt="telegram" />
    </div>
  )
}

export default Header
