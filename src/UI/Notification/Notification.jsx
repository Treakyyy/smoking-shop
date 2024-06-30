import React, { useState, useEffect } from 'react'
import styles from './Notification.module.css'

const Notification = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showCitySelection, setShowCitySelection] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleConfirm = () => {
    setIsVisible(false)
  }

  const handleDecline = () => {
    setShowCitySelection(true)
  }

  const handleCitySelection = (city) => {
    setIsVisible(false)
    setShowCitySelection(false)
  }

  return (
    <>
      {isVisible && !showCitySelection && (
        <div className={styles.overlay}>
          <div className={styles.notification}>
            <p>
              Ваш город <strong>Москва</strong> верно?
            </p>
            <div className={styles.buttons}>
              <button className={styles.yesButton} onClick={handleConfirm}>
                Да
              </button>
              <button className={styles.noButton} onClick={handleDecline}>
                Нет
              </button>
            </div>
          </div>
        </div>
      )}

      {isVisible && showCitySelection && (
        <div className={styles.overlay}>
          <div className={styles.citySelection}>
            <p>Укажите ваш город</p>
            <div className={styles.cityList}>
              {[
                'Москва',
                'Киров',
                'Пермь',
                'Казань',
                'Сыктывкар',
                'Нижний Новгород',
                'Кострома',
              ].map((city, index) => (
                <span
                  key={index}
                  className={styles.city}
                  onClick={() => handleCitySelection(city)}
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Notification
