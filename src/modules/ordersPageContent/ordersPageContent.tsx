import { ColorsEnum } from '@src/interfaces/product'
import { ReactFC } from '@src/interfaces/react'
import React, { useEffect, useState } from 'react'
import orderFilterTypeEnum from '@src/interfaces/filters'
import { useAppSelector } from '@src/hooks/redux'
import OrdersPageActions from './ordersPageActions/ordersPageActions'
import OrderCard from './orderCard/orderCard'

import './ordersPageContent.scss'

const OrdersPageContent: ReactFC = () => {
  const { bayed } = useAppSelector((state) => state.user)
  const [filteredProducts, setfilteredProducts] = useState(bayed)
  const [statusType, setStatusType] = useState<orderFilterTypeEnum>(
    orderFilterTypeEnum.all
  )

  const onFiltering = (type: orderFilterTypeEnum) => {
    setStatusType(type)
    if (type) {
      const foltered = bayed.filter((product) => product.orderStatus === type)
      setfilteredProducts(foltered)
    } else {
      setfilteredProducts(bayed)
    }
  }

  useEffect(() => {
    onFiltering(statusType)
  }, [bayed])

  const onSearch = (value: string) => {
    const reg = new RegExp(value, 'i')
    const filtered = bayed.filter((product) => {
      return (
        reg.test(product.name) ||
        reg.test(product.brand.label) ||
        reg.test(ColorsEnum[product.color])
      )
    })
    setfilteredProducts(filtered)
  }

  const addReview = (id: number) => {
    alert('Добавление отзыва!')
  }

  return (
    <div className='orders-page'>
      <OrdersPageActions onFiltering={onFiltering} onSearch={onSearch} />
      <div className='orders-page__content'>
        {!filteredProducts.length && <h1>Товары отсутствуют.</h1>}
        {!!filteredProducts.length && (
          <div className='orders-page__products'>
            {filteredProducts.map((product) => (
              <OrderCard
                key={product.id}
                product={product}
                addReview={addReview}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
export default OrdersPageContent
