import React, { useState } from 'react'
import styles from './Help.module.css'
import Input from '../../UI/Input/Input'

const Help = () => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleClick = () => {
    setInputValue('')
    alert('Ваше обращение записано, ответим вам в ближайшее время!')
  }

  return (
    <div className={styles.container_help}>
      <div className={styles.content}>
        <h3 className={styles.title}>Не нашли нужный товар?</h3>
        <div className={styles.inputContainer}>
          <Input
            placeholder={'впишите ваш email ...'}
            value={inputValue}
            onChange={handleInputChange}
          />
          <button onClick={handleClick} className={styles.button}>
            Ок
          </button>
        </div>
        <p className={styles.text}>
          Мы сможем подобрать нужный вам товар, а так же помочь со всеми
          вопросами, просто <br /> заполните ваш емейл и мы вам ответим
        </p>
      </div>
      <img className={styles.fire} src="/assets/img/fire.png" alt="fire" />
    </div>
  )
}

export default Help
