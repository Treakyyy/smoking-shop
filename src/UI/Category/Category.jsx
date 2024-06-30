import React from 'react'
import styles from './Category.module.css'
import CategoryItem from './CategoryItem/CategoryItem'
import PriceSlider from '../PriceSlider/PriceSlider'
import GreenButton from '../Button/GreenButton/GreenButton'
import BlackButton from '../Button/BlackButton/BlackButton'

const Category = () => {
  return (
    <div className={styles.container_category}>
      <h3 className={styles.title}>Категории</h3>
      <div className={styles.container_category_item}>
        <CategoryItem text={'Любой магазин'} number={'33'} />
        <CategoryItem text={'IQOS'} number={'12'} />
        <CategoryItem text={'Аксессуары'} number={'65'} />
        <CategoryItem text={'Кальяные смеси'} number={'39'} />
        <CategoryItem text={'Кальяны'} number={'23'} />
        <CategoryItem text={'Комплектующие'} number={'17'} />
        <CategoryItem text={'Мерч'} number={'19'} />
        <CategoryItem text={'Уголь'} number={'13'} />
        <CategoryItem text={'Электронные сигареты'} number={'18'} />
      </div>
      <PriceSlider />
      <div className={styles.container_button}>
        <GreenButton text={'Применить'} />
        <BlackButton text={'Сброс'} />
      </div>
    </div>
  )
}

export default Category
