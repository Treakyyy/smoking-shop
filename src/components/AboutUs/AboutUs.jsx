import React, { useEffect, useRef } from 'react'
import styles from './AboutUs.module.css'
import GreenButton from '../../UI/Button/GreenButton/GreenButton'
import { useDispatch } from 'react-redux'
import { setAboutUsRef } from '../../store/store'

const AboutUs = () => {
  const dispatch = useDispatch()
  const aboutUsRef = useRef(null)

  useEffect(() => {
    dispatch(setAboutUsRef(aboutUsRef.current))
  }, [dispatch])

  return (
    <div className={styles.container_about} ref={aboutUsRef}>
      <div className={styles.container_about_item}>
        <div className={styles.content}>
          <img className={styles.women} src="/assets/img/women.png" alt="" />
          <div className={styles.textContainer}>
            <h3 className={styles.title}>Наш мерч</h3>
            <p className={styles.text}>
              We are an online plant shop offering a <br /> wide range of cheap
              and trendy plants
            </p>
            <GreenButton text={'Перейти'}>
              <img
                className={styles.img}
                src="/assets/img/arrow.svg"
                alt="continue"
              />
            </GreenButton>
          </div>
        </div>
      </div>
      <div className={styles.container_about_item}>
        <div className={styles.content}>
          <img className={styles.hookah} src="/assets/img/hookah.png" alt="" />
          <div className={styles.textContainer}>
            <h3 className={styles.title}>Кальянные смеси &Кальяны</h3>
            <p className={styles.text}>
              We are an online plant shop offering a <br /> wide range of cheap
              and trendy plants
            </p>
            <GreenButton text={'Перейти'}>
              <img
                className={styles.img}
                src="https://treakyyy.github.io/smoking_shop/assets/img/arrow.svg"
                alt="continue"
              />
            </GreenButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
