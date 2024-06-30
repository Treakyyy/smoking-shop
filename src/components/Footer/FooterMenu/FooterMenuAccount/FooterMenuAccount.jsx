import React from 'react'
import styles from './FooterMenuAccount.module.css'

const FooterMenuAccount = () => {
  return (
    <div className={styles.account}>
      <h3 className={styles.title}>Мой аккаунт</h3>
      <div className={styles.conteiner_button}>
        <button className={styles.button}>Мой аккаунт</button>
        <button className={styles.button}>История заказов</button>
        <button className={styles.button}>Наши контакты</button>
        <button className={styles.button}>Политика</button>
        <button className={styles.button}>Блог</button>
      </div>
    </div>
  )
}

export default FooterMenuAccount
