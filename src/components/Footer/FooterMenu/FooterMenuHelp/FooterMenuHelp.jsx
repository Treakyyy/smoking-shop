import React from 'react'
import styles from './FooterMenuHelp.module.css'

const FooterMenuHelp = () => {
  return (
    <div className={styles.help}>
      <h3 className={styles.title}>Помощь</h3>
      <div className={styles.conteiner_button}>
        <button className={styles.button}>Поддержка</button>
        <button className={styles.button}>Как купить</button>
        <button className={styles.button}>Оплата и доставка</button>
        <button className={styles.button}>Как вернуть</button>
        <button className={styles.button}>Контакты</button>
      </div>
    </div>
  )
}

export default FooterMenuHelp
