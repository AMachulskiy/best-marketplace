import functionHelpers from '@src/helpers/functionHelpers'
import IProduct from '@src/interfaces/product'
import { ReactFC } from '@src/interfaces/react'
import React from 'react'
import { Link } from 'react-router-dom'

import './miniProductCard.scss'

export interface IMiniProductCardProps {
  product: IProduct
}

const MiniProductCard: ReactFC<IMiniProductCardProps> = ({ product }) => {
  const originalPrice = functionHelpers.getDigitNumber(product.price)
  let priceWithSale: string | number = functionHelpers.getSalePrice(
    product.price,
    product.sale
  )
  priceWithSale = functionHelpers.getDigitNumber(priceWithSale)
  return (
    <Link to={product.link} className='mini-product-card'>
      <div className='mini-product-card__img'>
        <img src={product.cover} alt='Product miniImage' />
        {!!product.sale && (
          <div className='mini-product-card__sale'>-{product.sale} %</div>
        )}
      </div>
      <div className='mini-product-card__price'>
        <strong>{priceWithSale} ₽</strong>
        <span>{originalPrice} ₽</span>
      </div>
      <div className='mini-product-card__link'>
        {product.brand} / {product.name}
      </div>
    </Link>
  )
}

export default MiniProductCard
