import { IProduct } from '@src/interfaces/product'
import { ReactFC } from '@src/interfaces/react'
import React from 'react'
import { Link } from 'react-router-dom'

import './miniProductCard.scss'

export interface IMiniProductCardProps {
  product: IProduct
}

const MiniProductCard: ReactFC<IMiniProductCardProps> = ({ product }) => {
  return (
    <div className='mini-product-card'>
      <div className='mini-product-card__img'>
        <img src={product.img} alt='Product mini-image' />
        {!!product.sale && (
          <div className='mini-product-card__sale'>-{product.sale} %</div>
        )}
      </div>
      <div className='mini-product-card__price'>{product.price} ₽</div>
      <Link to={product.link} className='mini-product-card__link'>
        {product.brand} / {product.name}
      </Link>
    </div>
  )
}

export default MiniProductCard
