import React, { useEffect, useRef, useState } from 'react'
import styles from './Product.module.css'
import data from '../../tabak.json'
import Category from '../../UI/Category/Category'
import Advertising from '../Advertising/Advertising'
import Pagination from '../../UI/Pagination/Pagination'
import { useDispatch } from 'react-redux'
import { setProductRef } from '../../store/store'
import ProductMenu from './ProductMenu/ProductMenu'
import BasketComponent from './BasketComponent/BasketComponent'

const Product = () => {
  const [products, setProducts] = useState([])
  const [isColumn, setIsColumn] = useState(false)
  const productRef = useRef(null)
  const dispatch = useDispatch()

  useEffect(() => {
    setProducts(data)
    dispatch(setProductRef(productRef.current))
  }, [dispatch])

  return (
    <div className={styles.container_product} ref={productRef}>
      <div>
        <Category />
        <Advertising />
      </div>
      <div className={styles.container_item}>
        <ProductMenu setIsColumn={setIsColumn} />
        <div className={`${styles.item} ${isColumn ? styles.column : ''}`}>
          {products.map((product) => (
            <div
              key={product.id}
              className={`${styles.container__product_item} ${
                isColumn ? styles.column_item : ''
              }`}
            >
              <div
                className={`${styles.container_image} ${
                  isColumn ? styles.container_image_column : ''
                }`}
              >
                <img
                  className={`${styles.image} ${
                    isColumn ? styles.column_image : ''
                  }`}
                  src={product.image}
                  alt=""
                />
                {!isColumn && (
                  <div className={styles.hover_item}>
                    <BasketComponent />
                  </div>
                )}
              </div>
              <div
                className={
                  isColumn
                    ? styles.container_text_column
                    : styles.container_text
                }
              >
                <p className={styles.text}>{product.title}</p>
                <p className={styles.price}>{product.price}</p>
              </div>
              {isColumn && (
                <div className={styles.hover_item_column}>
                  <BasketComponent />
                </div>
              )}
            </div>
          ))}
        </div>
        <Pagination />
      </div>
    </div>
  )
}

export default Product
