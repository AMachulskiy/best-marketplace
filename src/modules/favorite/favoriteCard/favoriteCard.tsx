import functionHelpers from '@src/helpers/functionHelpers'
import priceHelpers from '@src/helpers/priceHelpers'
import { useAppDispatch } from '@src/hooks/redux'
import IProduct, { ColorsEnum } from '@src/interfaces/product'
import { ReactFC } from '@src/interfaces/react'
import { deleteFromFavorite } from '@src/store/userStore/actions'
import { addToBasket } from '@src/store/userStore/userStore'
import React from 'react'
import { Link } from 'react-router-dom'

import './favoriteCard.scss'

export interface IFavoriteCardProps {
  product: IProduct
}

const FavoriteCard: ReactFC<IFavoriteCardProps> = ({ product }) => {
  const dispatch = useAppDispatch()
  const originalPrice = functionHelpers.getDigitNumber(product.price)
  let priceWithSale: string | number = priceHelpers.getSalePrice(
    product.price,
    product.sale
  )
  priceWithSale = functionHelpers.getDigitNumber(priceWithSale)

  const addToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch(addToBasket(product))
    alert('Товар добавлен в корзину!')
  }

  const deleteProduct = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch(deleteFromFavorite(product.id))
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
