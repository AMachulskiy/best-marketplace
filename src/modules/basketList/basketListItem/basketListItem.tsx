import SelectCount from '@src/components/selectCount/selectCount'
import functionHelpers from '@src/helpers/functionHelpers'
import priceHelpers from '@src/helpers/priceHelpers'
import { useAppDispatch } from '@src/hooks/redux'
import IProduct, { ColorsEnum } from '@src/interfaces/product'
import { ReactFC } from '@src/interfaces/react'
import {
  addToFavorite,
  changeProductInOrderStatus,
  changeSelectedProductCount,
  deleteFromBasket,
} from '@src/store/userStore/userStore'
import React from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './basketListItem.scss'

interface IBasketListItemProps {
  product: IProduct
}

const BasketListItem: ReactFC<IBasketListItemProps> = ({ product }) => {
  const dispatch = useAppDispatch()
  const getPriceWithSale = () => {
    const priceWithSale = priceHelpers.getSalePrice(
      product.price * product.selectedCount,
      product.sale
    )
    return functionHelpers.getDigitNumber(priceWithSale)
  }

  const getFullPrice = () => {
    const fullPrice = product.price * product.selectedCount
    return functionHelpers.getDigitNumber(fullPrice)
  }

  const toFavorite = () => {
    dispatch(addToFavorite(product))
    alert('Товар добавлен в избранное!')
  }

  return (
    <div className='basket-product'>
      <Form.Check
        type='checkbox'
        onChange={() => dispatch(changeProductInOrderStatus(product.id))}
        checked={product.inOrder}
      />
      <Link to={`/product/${product.id}`}>
        <img
          className='basket-product__img'
          src={product.cover}
          alt={product.name}
        />
      </Link>
      <div className='basket-product__info'>
        <Link to={`/product/${product.id}`} className='basket-product__title'>
          {product.name} / {product.ram} / {product.ssd}
        </Link>
        {product.selectedColor && (
          <span>Цвет: {ColorsEnum[product.selectedColor]}</span>
        )}
        {product.warehouse && <span>{product.warehouse}</span>}
      </div>
      <div className='basket-product__actions'>
        <SelectCount
          min={1}
          initial={product.selectedCount}
          onChange={(count) =>
            dispatch(
              changeSelectedProductCount({
                id: product.id,
                count,
              })
            )
          }
        />
        <div className='basket-product__links'>
          <span onClick={toFavorite}>В избранное</span>
          <span onClick={() => dispatch(deleteFromBasket(product.id))}>
            Удалить
          </span>
        </div>
      </div>
      <div className='basket-product__price'>
        <strong>{getPriceWithSale()} ₽</strong>
        <span>{getFullPrice()} ₽</span>
        <div>рассрочка 24 999 ₽/мес</div>
      </div>
    </div>
  )
}

export default BasketListItem
