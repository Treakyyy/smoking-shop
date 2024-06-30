import React from 'react'
import styles from './Advertising.module.css'

const Advertising = () => {
  return (
    <div className={styles.Advertising}>
      <img
        className={styles.header_img}
        src="/assets/img/advertisingHeader.png"
        alt=""
      />
      <h1 className={styles.title}>SALE</h1>
      <p className={styles.text}>
        Скидки на все табаки <br /> до конца мая
      </p>
      <img
        className={styles.tabak_img}
        src="/assets/img/advertisingTabak.png"
        alt=""
      />
      <p className={styles.number}>-15%</p>
      <p className={styles.footer_text}>“ВСЕ ЛЕТИМ НА ШАШЛЫНДОС”</p>
    </div>
  )
}

export default Advertising
