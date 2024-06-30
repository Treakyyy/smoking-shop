import React from 'react'
import styles from './Warning.module.css'

const Warning = () => {
  return (
    <div className={styles.Warning}>
      <h3 className={styles.title}>
        МИНЗДРАВ ПРЕДУПРЕЖДАЕТ: КУРЕНИЕ ВРЕДИТ ВАШЕМУ ЗДОРОВЬЮ!
      </h3>
      <p className={styles.text}>
        Мы не рекламируем табак и курение. Вся информация на сайте носит <br />
        информационный характер. Дистанционная продажа табачных изделий не
        ведется.
      </p>
    </div>
  )
}

export default Warning
