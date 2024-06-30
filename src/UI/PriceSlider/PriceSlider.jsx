import React, { useState } from 'react'
import styles from './PriceSlider.module.css'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

const PriceSlider = () => {
  const [priceRange, setPriceRange] = useState([100, 15000])

  const handleSliderChange = (value) => {
    setPriceRange(value)
  }

  return (
    <div className={styles.container_priceSlider}>
      <h3>Цена</h3>
      <Slider
        range
        min={100}
        max={15000}
        defaultValue={priceRange}
        onChange={handleSliderChange}
        trackStyle={[{ backgroundColor: 'rgba(150, 195, 97, 1)' }]}
        handleStyle={[
          {
            backgroundColor: 'rgba(150, 195, 97, 1)',
            borderColor: 'rgba(150, 195, 97, 1)',
          },
          {
            backgroundColor: 'rgba(150, 195, 97, 1)',
            borderColor: 'rgba(150, 195, 97, 1)',
          },
        ]}
      />
      <div>
        {priceRange[0]}₽ - {priceRange[1]}₽
      </div>
    </div>
  )
}

export default PriceSlider
