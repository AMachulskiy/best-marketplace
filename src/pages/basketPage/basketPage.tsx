import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { ReactFC } from '@src/interfaces/react'
import Panel from '@src/components/panel/panel'
import BasketList from '@src/modules/basketList/basketList'
import BasketOrder from '@src/components/basketOrder/basketOrder'
import Button from '@src/components/button/button'
import { useAppDispatch, useAppSelector } from '@src/hooks/redux'
import { PaymentType, PaymentTypeValue } from '@src/interfaces/payment'
import ShippingTypeEnum, {
  ShippingTypeValueEnum,
} from '@src/interfaces/shipping'
import {
  changePaymentType,
  changeShippingType,
  setShippingAddress,
} from '@src/store/userStore/actions'

import './basketPage.scss'

const BasketPage: ReactFC = () => {
  const dispatch = useAppDispatch()
  const {
    warnings,
    shipping,
    paymentType,
    data: { name, lastname },
  } = useAppSelector((state) => state.user)
  const [isOpenShipModal, setIsOpenShipModal] = useState(false)
  const [isOpenPayModal, setIsOpenPayModal] = useState(false)

  const renderShippingTypes = () => {
    const shippingTypes = [ShippingTypeEnum.courier, ShippingTypeEnum.postomat]
    return shippingTypes.map((key: ShippingTypeEnum) => (
      <div
        key={key}
        className={`basket__ship-type ${shipping.type === key ? 'active' : ''}`}
        onClick={() => dispatch(changeShippingType(key))}
      >
        {ShippingTypeValueEnum[key]}
      </div>
    ))
  }

  const renderShipAddressList = () => {
    return shipping.addresses.map((address) => {
      return (
        <strong
          key={address}
          className={address === shipping.address ? 'active' : ''}
          onClick={() => {
            dispatch(setShippingAddress(address))
            setIsOpenShipModal(false)
          }}
        >
          {address}
        </strong>
      )
    })
  }

  const renderPayTypes = () => {
    const payTypes = [PaymentType.card, PaymentType.qr, PaymentType.credit]
    return payTypes.map((key: PaymentType) => (
      <div
        key={key}
        className={`basket__pay-method ${key === paymentType ? 'active' : ''}`}
        onClick={() => {
          dispatch(changePaymentType(key))
          setIsOpenPayModal(false)
        }}
      >
        {PaymentTypeValue[key]}
      </div>
    ))
  }

  return (
    <>
      <div className='basket'>
        <div className='basket__main'>
          <Panel title='Корзина'>
            <BasketList />
          </Panel>
          <Panel
            id='ship-type'
            title='Способ доставки'
            isWarning={warnings.address}
            isChange={!!shipping.address}
            onChange={() => setIsOpenShipModal(true)}
          >
            {!shipping.address && (
              <span
                className='basket__select-address'
                onClick={() => setIsOpenShipModal(true)}
              >
                Выбрать адрес доставки
              </span>
            )}
            {!!shipping.address && shipping.address}
          </Panel>
          <Panel
            id='pay-method'
            title='Способ оплаты'
            isWarning={warnings.payment}
            isChange={!!paymentType}
            onChange={() => setIsOpenPayModal(true)}
          >
            {!shipping.address && (
              <span>
                Для выбора способа оплаты, необходимо выбрать адрес доставки
              </span>
            )}
            {!!shipping.address && (
              <div className='basket__pay'>
                {!paymentType && (
                  <span onClick={() => setIsOpenPayModal(true)}>
                    Выбрать способ оплаты
                  </span>
                )}
                {!!paymentType && (
                  <strong>{PaymentTypeValue[paymentType]}</strong>
                )}
              </div>
            )}
          </Panel>
          <Panel title='Ваши данные'>
            {name} {lastname}
          </Panel>
        </div>
        <div className='basket__sidebar'>
          <BasketOrder />
        </div>
      </div>
      <Modal
        size='lg'
        show={isOpenShipModal}
        onHide={() => setIsOpenShipModal(false)}
        aria-labelledby='example-modal-sizes-title-lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Способ доставки</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='basket__modal-content'>
            <div className='basket__ship-types'>{renderShippingTypes()}</div>
            <div className='basket__ship-address-list'>
              {renderShipAddressList()}
            </div>
            <Button onClick={() => alert('Выбор адреса доставки на карте')}>
              Выбрать адрес доставки
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        size='sm'
        show={isOpenPayModal}
        onHide={() => setIsOpenPayModal(false)}
        aria-labelledby='example-modal-sizes-title-lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Способ оплаты</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='basket__modal-content'>
            <div className='basket__pay-methods'>{renderPayTypes()}</div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default BasketPage
