import functionHelpers from '@src/helpers/functionHelpers'
import IProduct, { ColorsEnum } from '@src/interfaces/product'
import { ReactFC } from '@src/interfaces/react'
import React from 'react'
import { Link } from 'react-router-dom'

import './favoriteCard.scss'

export interface IFavoriteCardProps {
  product: IProduct
  onDelete: (id: number) => void
  toCart: (id: number) => void
}

const FavoriteCard: ReactFC<IFavoriteCardProps> = ({
  product,
  onDelete,
  toCart,
}) => {
  const originalPrice = functionHelpers.getDigitNumber(product.price)
  let priceWithSale: string | number = functionHelpers.getSalePrice(
    product.price,
    product.sale
  )
  priceWithSale = functionHelpers.getDigitNumber(priceWithSale)

  const addToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    toCart(product.id)
    alert('Товар добавлен в корзину!')
  }

  const deleteProduct = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onDelete(product.id)
  }

  return (
    <Link to={`/product/${product.id}`} className='favorite-card'>
      <div className='favorite-card__top'>
        <div className='favorite-card__bage'>{product.bage}</div>
        <img
          className='favorite-card__img'
          src={product.cover}
          alt={product.name}
        />
        <div className='favorite-card__sale'>
          -{product.sale}% {product.isAvailable ? 'Доступен' : 'Не доступен'}
        </div>
        <div className='favorite-card__del' onClick={deleteProduct}>
          <i className='ic_close' />
        </div>
      </div>
      <div className='favorite-card__bottom'>
        <div className='favorite-card__price'>
          <strong>{priceWithSale} ₽</strong>
          <span>{originalPrice} ₽</span>
        </div>
        <div className='favorite-card__params'>
          {product.brand.label} / {product.name} / {ColorsEnum[product.color]}
        </div>
        <div className='favorite-card__actions'>
          <div className='favorite-card__bay' onClick={addToCart}>
            В корзину
          </div>
        </div>
      </div>
    </Link>
  )
}

export default FavoriteCard
