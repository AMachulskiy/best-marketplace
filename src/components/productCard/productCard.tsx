import functionHelpers from '@src/helpers/functionHelpers'
import IProduct, { ColorsEnum } from '@src/interfaces/product'
import IRating from '@src/interfaces/rating'
import { ReactFC } from '@src/interfaces/react'
import moment from 'moment'
import React, { useState } from 'react'

import './productCard.scss'

export interface IProductCardProps {
  product: IProduct
}

const ProductCard: ReactFC<IProductCardProps> = ({ product }) => {
  const [toFavorite, setToFavorite] = useState(false)
  const originalPrice = functionHelpers.getDigitNumber(product.price)
  let priceWithSale: string | number = functionHelpers.getSalePrice(
    product.price,
    product.sale
  )
  priceWithSale = functionHelpers.getDigitNumber(priceWithSale)
  const shipDate = moment()
    .locale('ru')
    .add(product.shipTime, 'd')
    .format('DD MMMM')

  const renderRating = ({ total, count }: IRating) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      if (i <= total) {
        stars.push(<i className='ic_star-fill fill' />)
      } else {
        stars.push(<i className='ic_star-fill' />)
      }
    }
    return (
      <>
        {stars}
        <span>{count}</span>
      </>
    )
  }

  return (
    <div className='product-card'>
      <div className='product-card__top'>
        <div className='product-card__bage'>{product.bage}</div>
        <img
          className='product-card__img'
          src={product.cover}
          alt={product.name}
        />
        <div className='product-card__sale'>-{product.sale}%</div>
      </div>
      <div className='product-card__bottom'>
        <div className='product-card__price'>
          <strong>{priceWithSale} ₽</strong>
          <span>{originalPrice} ₽</span>
        </div>
        <div className='product-card__params'>
          {product.brand} / {product.name} / {product.ram} / {product.ssd} /{' '}
          {ColorsEnum[product.color]}
        </div>
        <div className='product-card__rating'>
          {renderRating(product.rating)}
        </div>
        <div className='product-card__shipping'>
          <span>Доставка:&nbsp;</span>
          <strong>{shipDate}</strong>
        </div>
        <div className='product-card__credit'>{product.credit}</div>
        <div className='product-card__actions'>
          <div className='product-card__bay'>В корзину</div>
          <div className='product-card__favorite'>
            <i
              className={toFavorite ? 'ic_like-2' : 'ic_heart'}
              onClick={() => setToFavorite(!toFavorite)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
