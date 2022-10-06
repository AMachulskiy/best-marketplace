import Button from '@src/components/button/button'
import functionHelpers from '@src/helpers/functionHelpers'
import { ReactFC } from '@src/interfaces/react'
import React, { useState } from 'react'

import './productActions.scss'

const ProductActions: ReactFC = () => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [inCart, setInCart] = useState(false)

  return (
    <div className='product-actions'>
      <div className='product-actions__top'>
        <div className='product-actions__price'>
          <strong>{functionHelpers.getDigitNumber(194993)} ₽</strong>
          <span>{functionHelpers.getDigitNumber(299990)} ₽</span>
        </div>
        <i
          className={`ic_heart ${isFavorite ? 'ic_like-2' : 'ic_heart'}`}
          onClick={() => setIsFavorite(!isFavorite)}
        />
      </div>
      <div className='product-actions__credit'>
        <span>В кредит от</span>
        <strong>{functionHelpers.getDigitNumber(19499)} ₽</strong>
      </div>
      <Button onClick={() => setInCart(!inCart)}>
        {inCart ? 'Добавлено в корзину' : 'Добавить в корзину'}
      </Button>
      <Button theme='outline' onClick={() => alert('Спасибо за покупку!')}>
        Купить сейчас
      </Button>
      <div className='product-actions__ship'>
        <strong>31 августа-2 сентября</strong>
        <span>доставит Wildberries со склада Коледино WB</span>
      </div>
    </div>
  )
}

export default ProductActions
