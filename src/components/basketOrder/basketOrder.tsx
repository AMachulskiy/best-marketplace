import functionHelpers from '@src/helpers/functionHelpers'
import priceHelpers from '@src/helpers/priceHelpers'
import shippingHelpers from '@src/helpers/shippingHelpers'
import { useAppDispatch, useAppSelector } from '@src/hooks/redux'
import { PaymentTypeValue } from '@src/interfaces/payment'
import { ReactFC } from '@src/interfaces/react'
import { ShippingTypeValueEnum } from '@src/interfaces/shipping'
import { completeOrder } from '@src/store/userStore/actions'
import { checkWarnings } from '@src/store/userStore/userStore'
import moment from 'moment'
import React from 'react'
import Button from '../button/button'

import './basketOrder.scss'

moment.locale('ru')

const BasketOrder: ReactFC = () => {
  const dispatch = useAppDispatch()
  const { basket, shipping, paymentType } = useAppSelector(
    (state) => state.user
  )

  const onlyOrderProducts = basket.filter((product) => product.inOrder)
  const { min, max } = shippingHelpers.getMinMaxShippingTime(onlyOrderProducts)
  const shipRangeDate = {
    from: moment().add(min, 'day'),
    to: moment().add(max, 'day'),
  }
  const { count, fullPrice, salePrice, saleSize } =
    priceHelpers.getOrderInfo(basket)
  const checkOrderSettings = () => {
    if (shipping.address && paymentType) {
      dispatch(completeOrder())
      alert('Оплата прошла успешно!')
    } else {
      dispatch(checkWarnings())
    }
  }

  return (
    <div className='basket-order'>
      <div className='basket-order__price'>
        <strong>Итого</strong>
        {!!salePrice && (
          <strong>{functionHelpers.getDigitNumber(salePrice)} ₽</strong>
        )}
      </div>
      <div className='basket-order__price-info'>
        <div>
          <span>Товары, {count} шт.</span>
          {!!fullPrice && (
            <span>{functionHelpers.getDigitNumber(fullPrice)} ₽</span>
          )}
        </div>
        {!!saleSize && (
          <div>
            <span>Скидка</span>
            <span>- {functionHelpers.getDigitNumber(saleSize)} ₽</span>
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
            {ShippingTypeValueEnum[shipping.type]}
          </span>
          {shipping.address && <div>{shipping.address}</div>}
        </div>
        <div className='basket-order__info'>
          <strong>Дата:</strong>
          {!!basket.length && (
            <span onClick={() => functionHelpers.scrollToElement('ship-type')}>
              {shipRangeDate.from.format('D')} -{' '}
              {shipRangeDate.to.format('D MMMM')}
            </span>
          )}
        </div>
        <div className='basket-order__info'>
          <strong>Оплата:</strong>
          <span onClick={() => functionHelpers.scrollToElement('pay-method')}>
            {PaymentTypeValue[paymentType]}
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
