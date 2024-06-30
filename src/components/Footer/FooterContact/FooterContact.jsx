import React from 'react'
import styles from './FooterContact.module.css'

const FooterContact = () => {
  return (
    <div className={styles.container_footerContact}>
      <img src="/assets/img/SmokingShop.png" alt="" />
      <div className={styles.footerContact_item}>
        <img src="/assets/img/phone.svg" alt="" />
        <p className={styles.text}>+7 900 000 99 99 </p>
      </div>
      <div className={styles.footerContact_item}>
        <img src="/assets/img/message.svg" alt="" />
        <p className={styles.text}>contact@greenshop.com</p>
      </div>
      <div className={styles.footerContact_item}>
        <img src="/assets/img/location.svg" alt="" />
        <p className={styles.text}>
          610001, Кировская обл, г Киров, Комсомольская ул, д. 46/6, оф. 401
        </p>
      </div>
    </div>
  )
}

export default FooterContact
