import Button from '@src/components/button/button'
import functionHelpers from '@src/helpers/functionHelpers'
import priceHelpers from '@src/helpers/priceHelpers'
import productHelpers from '@src/helpers/productHelpers'
import { useAppDispatch, useAppSelector } from '@src/hooks/redux'
import { ReactFC } from '@src/interfaces/react'
import routing from '@src/routes/routes'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  addToBasket,
  addToFavorite,
  deleteFromFavorite,
} from '@src/store/userStore/actions'
import moment from 'moment'

import './productActions.scss'

const ProductActions: ReactFC = () => {
  const dispatch = useAppDispatch()
  const {
    products: { product },
    user: { basket, favorite },
  } = useAppSelector((state) => state)
  const navigate = useNavigate()
  const priceWithSale = priceHelpers.getSalePrice(product.price, product.sale)
  const haveProductInBasket = productHelpers.haveProduct(product.id, basket)
  const haveProductInFavorite = productHelpers.haveProduct(product.id, favorite)
  const shippingDate = moment().add(product.shipTime, 'day').format('D MMMM')

  const handleFavorite = () => {
    if (haveProductInFavorite) {
      dispatch(deleteFromFavorite(product.id))
    } else {
      dispatch(addToFavorite(product))
    }
  }
  const buyNow = () => {
    if (!haveProductInBasket) {
      dispatch(addToBasket(product))
    }
    navigate(routing.basket)
  }

  return (
    <div className='product-actions'>
      <div className='product-actions__top'>
        <div className='product-actions__price'>
          <strong>{functionHelpers.getDigitNumber(priceWithSale)} ₽</strong>
          <span>{functionHelpers.getDigitNumber(product.price)} ₽</span>
        </div>
        <i
          className={`ic_heart ${
            haveProductInFavorite ? 'ic_like-2' : 'ic_heart'
          }`}
          onClick={handleFavorite}
        />
      </div>
      <div className='product-actions__credit'>
        <span>В кредит от</span>
        <strong>{functionHelpers.getDigitNumber(19499)} ₽</strong>
      </div>
      <Button
        onClick={() => dispatch(addToBasket(product))}
        disable={haveProductInBasket}
      >
        {haveProductInBasket ? 'Добавлено в корзину' : 'Добавить в корзину'}
      </Button>
      <Button theme='outline' onClick={buyNow}>
        Купить сейчас
      </Button>
      <div className='product-actions__ship'>
        <strong>{shippingDate}</strong>
        <span>доставит Wildberries со склада Коледино WB</span>
        <br />
        <span>
          Продавец: <strong>{product.seller}</strong>
        </span>
      </div>
    </div>
  )
}

export default ProductActions
