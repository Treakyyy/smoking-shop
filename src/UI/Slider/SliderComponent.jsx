import React from 'react'
import styles from './SliderComponent.module.css'
import GreenButton from '../Button/GreenButton/GreenButton'

const SliderComponent = () => {
  return (
    <div className={styles.slide}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          ИНТЕРНЕТ-МАГАЗИН КАЛЬЯНОВ И АКСЕССУАРОВ
        </h2>
        <h1 className={styles.smoking_text}>
          SMOKING <br /> SHOP
        </h1>
        <p className={styles.text}>
          We are an online plant shop offering a wide range of cheap and trendy
          plants. <br /> Use our plants to create an unique Urban Jungle. Order
          your favorite plants!
        </p>
        <GreenButton text={'Начать покупки'}></GreenButton>
      </div>
      <img
        className={styles.tabak}
        src="/assets/img/tabakSlider.png"
        alt="Smoking Shop"
      />
      <img
        className={styles.cloud}
        src="/assets/img/cloudSlider.png"
        alt="Cloud Shop"
      />
    </div>
  )
}

export default SliderComponent
