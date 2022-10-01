import React from 'react'
import { ReactFC } from '@src/interfaces/react'
import OrdersPageContent from '@src/modules/ordersPageContent/ordersPageContent'

const OrdersPage: ReactFC = () => {
  return (
    <div className='orders-page'>
      <OrdersPageContent />
    </div>
  )
}

export default OrdersPage
