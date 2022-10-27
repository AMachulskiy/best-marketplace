import functionHelpers from '@src/helpers/functionHelpers'
import priceHelpers from '@src/helpers/priceHelpers'
import { useAppDispatch } from '@src/hooks/redux'
import IProduct, { ColorsEnum } from '@src/interfaces/product'
import { ReactFC } from '@src/interfaces/react'
import { hideProductFromBayed, toRefund } from '@src/store/userStore/userStore'
import moment from 'moment'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './orderCard.scss'

export interface IOrderCardProps {
  product: IProduct
  addReview: (id: number) => void
}

const OrderCard: ReactFC<IOrderCardProps> = ({ product, addReview }) => {
  const dispatch = useAppDispatch()
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  let priceWithSale: string | number = priceHelpers.getSalePrice(
    product.price,
    product.sale
  )
  priceWithSale = functionHelpers.getDigitNumber(priceWithSale)

  const onAddReview = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addReview(product.id)
  }

  const openHideMenu = (e: React.MouseEvent, isOpen: boolean) => {
    e.preventDefault()
    e.stopPropagation()
    setMenuIsOpen(isOpen)
  }

  const addToRefund = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch(toRefund(product.id))
    setMenuIsOpen(false)
  }

  const hideProduct = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch(hideProductFromBayed(product.id))
  }

  return (
    <Link to={`/product/${product.id}`} className='order-card'>
      <div className='order-card__top'>
        <div className='order-card__bage'>{product.bage}</div>
        <img
          className='order-card__img'
          src={product.cover}
          alt={product.name}
        />
      </div>
      <div className='order-card__bottom'>
        <div className='order-card__price'>
          <strong>{priceWithSale} ₽</strong>
          <div
            className='order-card__menu'
            onClick={(e) => openHideMenu(e, true)}
          >
            <div
              className={`order-card__menu-popup ${menuIsOpen ? 'open' : ''}`}
            >
              <div onClick={hideProduct}>
                <span>Не показывать в покупках</span>
              </div>
              {!product.isRefund && (
                <div onClick={addToRefund}>
                  <span>Оформить возврат -</span> <strong>100 ₽</strong>
                </div>
              )}
            </div>
            <i className='ic_dots' />
          </div>
        </div>
        <div className='order-card__params'>
          {product.brand.label} / {product.name} / {ColorsEnum[product.color]}
        </div>
        <div className='order-card__date'>
          <span>Заказ:</span>
          <strong>{moment(product.orderDate).format('D MMMM')}</strong>
        </div>
        <div className='order-card__date'>
          <span>Получение:</span>
          <strong>{moment(product.getDate).format('D MMMM')}</strong>
        </div>
        {product.isRefund && (
          <div className='order-card__refund'>На оформлении возврата</div>
        )}
        <div className='order-card__actions'>
          <div className='order-card__add-review' onClick={onAddReview}>
            Написать отзыв
          </div>
        </div>
      </div>
    </Link>
  )
}

export default OrderCard
