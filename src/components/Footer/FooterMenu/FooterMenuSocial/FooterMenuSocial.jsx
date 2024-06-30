import React from 'react'
import styles from './FooterMenuSocial.module.css'

const FooterMenuSocial = () => {
  return (
    <div className={styles.FooterMenuSocial}>
      <div className={styles.FooterMenuSocial_head}>
        <div>
          <h3 className={styles.title}>Соц сети</h3>
          <div className={styles.container_socialItem}>
            <img className={styles.icon} src="/assets/img/vkBlack.svg" alt="" />
            <img
              className={styles.icon}
              src="/assets/img/youtubeBlack.svg"
              alt=""
            />
            <img
              className={styles.icon}
              src="/assets/img/telegramBlack.svg"
              alt=""
            />
          </div>
        </div>
        <div className={styles.circle}>18+</div>
      </div>
      <p className={styles.green_text}>
        © 2023 Smoking Shop.Все права защищены.
      </p>
      <p className={styles.text}>
        ИНН 4345427922 КПП 434501001 ОГРН 1154350010473
      </p>
    </div>
  )
}

export default FooterMenuSocial
