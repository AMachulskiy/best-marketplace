import functionHelpers from '@src/helpers/functionHelpers'
import { ReactFC } from '@src/interfaces/react'
import moment, { Moment } from 'moment'
import React from 'react'
import Button from '../button/button'

import './basketOrder.scss'

moment.locale('ru')

export interface IBasketOrderProps {
  fullPrice: number
  price: number
  count: number
  sale: number
  shipType: string
  shipAddress: string
  shipRangeDate: {
    from: Moment
    to: Moment
  }
  payMethod: string
  onWarning: () => void
}

const BasketOrder: ReactFC<IBasketOrderProps> = ({
  fullPrice,
  price,
  count,
  sale,
  shipType,
  shipAddress,
  shipRangeDate,
  payMethod,
  onWarning,
}) => {
  const checkOrderSettings = () => {
    if (shipAddress && payMethod) {
      alert('Оплата прошла успешно!')
    }
    onWarning()
  }

  return (
    <div className='basket-order'>
      <div className='basket-order__price'>
        <strong>Итого</strong>
        {!!price && <strong>{functionHelpers.getDigitNumber(price)} ₽</strong>}
      </div>
      <div className='basket-order__price-info'>
        <div>
          <span>Товары, {count} шт.</span>
          {!!fullPrice && (
            <span>{functionHelpers.getDigitNumber(fullPrice)} ₽</span>
          )}
        </div>
        {!!sale && (
          <div>
            <span>Скидка</span>
            <span>{functionHelpers.getDigitNumber(sale)} ₽</span>
          </div>
        )}
        <div>
          <span>Доставка</span>
          <span>Бесплатно</span>
        </div>
      </div>
      <div className='basket-order__info-wrap'>
        <div className='basket-order__info'>
          <strong>Доставка:</strong>
          <span onClick={() => functionHelpers.scrollToElement('ship-type')}>
            {shipType}
          </span>
          <div>{shipAddress}</div>
        </div>
        <div className='basket-order__info'>
          <strong>Дата:</strong>
          <span onClick={() => functionHelpers.scrollToElement('ship-type')}>
            {shipRangeDate.from.format('D')} -{' '}
            {shipRangeDate.to.format('D MMMM')}
          </span>
        </div>
        <div className='basket-order__info'>
          <strong>Оплата:</strong>
          <span onClick={() => functionHelpers.scrollToElement('pay-method')}>
            {payMethod}
          </span>
        </div>
        <Button onClick={checkOrderSettings}>Оплатить заказ</Button>
        <div className='basket-order__conditions'>
          Согласен с условиями Правил пользования торговой площадкой и правилами
          возврата
        </div>
      </div>
    </div>
  )
}

export default BasketOrder
