import React from 'react'
import style from './ProductMenuButton.module.css'

const ProductMenuButton = ({ setIsColumn }) => {
  return (
    <div className={style.container}>
      <img
        className={style.img}
        src="/assets/img/row.svg"
        alt="row"
        onClick={() => setIsColumn(false)}
      />
      <img
        className={style.img}
        src="/assets/img/column.svg"
        alt="column"
        onClick={() => setIsColumn(true)}
      />
    </div>
  )
}

export default ProductMenuButton
