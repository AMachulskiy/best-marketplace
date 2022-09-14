import { IBasketProduct } from '@src/interfaces/product'
import { ReactFC } from '@src/interfaces/react'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import functionHelpers from '@src/helpers/functionHelpers'
import BasketListItem from './basketListItem/basketListItem'

import './basketList.scss'

interface IBasketListProps {
  products: IBasketProduct[]
  changeCount: (id: number, count: number) => void
  onDelete: (id: number) => void
  toFavourite: (id: number) => void
  onChecked: (id: number, checked: boolean) => void
  checkedAll: boolean
  onCheckedAll: (checkedAll: boolean) => void
}

const BasketList: ReactFC<IBasketListProps> = ({
  products,
  changeCount,
  onDelete,
  toFavourite,
  onChecked,
  checkedAll,
  onCheckedAll,
}) => {
  const [isOpen, setIsOpen] = useState(true)

  const onChangeCheckedAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    onCheckedAll(e.target.checked)
  }

  const renderOrderInfo = () => {
    const initialOrder = {
      count: 0,
      price: 0,
    }
    const orderInfo = products.reduce((total, item) => {
      return {
        count: total.count + item.count,
        price:
          total.price + functionHelpers.getSalePrice(item.price, item.sale),
      }
    }, initialOrder)
    return (
      <div className='basket-list__order'>
        {orderInfo.count} товара -{' '}
        {functionHelpers.getDigitNumber(orderInfo.price)} ₽
      </div>
    )
  }

  return (
    <div className='basket-list'>
      <div className='basket-list__head'>
        <div className='basket-list__check-all'>
          {isOpen && (
            <Form.Check
              type='checkbox'
              id='basket-check-all'
              label='Выбрать все'
              checked={checkedAll}
              onChange={onChangeCheckedAll}
            />
          )}
          {!isOpen && renderOrderInfo()}
          <div
            className='basket-list__close'
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '-' : '+'}
          </div>
        </div>
      </div>
      <div className={`basket-list__products ${isOpen ? '' : 'hide'}`}>
        {!!products.length &&
          products.map((product) => (
            <BasketListItem
              onDelete={onDelete}
              toFavourite={toFavourite}
              key={product.id}
              product={product}
              changeCount={changeCount}
              onChecked={onChecked}
            />
          ))}
        {!products.length && <h3>Корзина пуста</h3>}
      </div>
    </div>
  )
}

export default BasketList
