import { ColorsEnum } from '@src/interfaces/product'
import { ReactFC } from '@src/interfaces/react'
import React, { useEffect, useState } from 'react'
import generateProducts from '@src/data/products'
import orderFilterTypeEnum from '@src/interfaces/filters'
import OrdersPageActions from './ordersPageActions/ordersPageActions'
import OrderCard from './orderCard/orderCard'

import './ordersPageContent.scss'

const productsData = generateProducts(30)

const OrdersPageContent: ReactFC = () => {
  const [products, setProducts] = useState(productsData)
  const [filteredProducts, setfilteredProducts] = useState(products)
  const [statusType, setStatusType] = useState<orderFilterTypeEnum>(
    orderFilterTypeEnum.all
  )

  const onFiltering = (type: orderFilterTypeEnum) => {
    setStatusType(type)
    if (type) {
      const foltered = products.filter(
        (product) => product.orderStatus === type
      )
      setfilteredProducts(foltered)
    } else {
      setfilteredProducts(products)
    }
  }

  useEffect(() => {
    onFiltering(statusType)
  }, [products])

  const onSearch = (value: string) => {
    const reg = new RegExp(value, 'i')
    const filtered = products.filter((product) => {
      return (
        reg.test(product.name) ||
        reg.test(product.brand) ||
        reg.test(ColorsEnum[product.color])
      )
    })
    setfilteredProducts(filtered)
  }

  const addReview = (id: number) => {
    alert('Добавление отзыва!')
  }

  const onHideProduct = (id: number) => {
    const updatedProducts = products.filter((product) => product.id !== id)
    setProducts(updatedProducts)
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
                onHide={onHideProduct}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
export default OrdersPageContent
