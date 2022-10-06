import SearchInput from '@src/components/searchInput/searchInput'
import Selectbox from '@src/components/selectbox/selectbox'
import orderFilterTypeEnum from '@src/interfaces/filters'
import { ReactFC } from '@src/interfaces/react'
import ISelectboxItem from '@src/interfaces/selectbox'
import React from 'react'

import './ordersPageActions.scss'

const filtersSelectboxData: ISelectboxItem<orderFilterTypeEnum>[] = [
  {
    label: 'Все товары',
    value: orderFilterTypeEnum.all,
  },
  { label: 'Выкупленные', value: orderFilterTypeEnum.buy },
  { label: 'Отмененные', value: orderFilterTypeEnum.canceled },
  { label: 'Возврат товара', value: orderFilterTypeEnum.refund },
  { label: 'Отмена магазином', value: orderFilterTypeEnum.storeCanceled },
]

interface IOrdersPageActionsProps {
  onFiltering: (type: orderFilterTypeEnum) => void
  onSearch: (value: string) => void
}

const OrdersPageActions: ReactFC<IOrdersPageActionsProps> = ({
  onFiltering,
  onSearch,
}) => {
  const handleFilterType = (
    filterTypeObj: ISelectboxItem<orderFilterTypeEnum>
  ) => {
    onFiltering(filterTypeObj.value)
  }

  return (
    <div className='orders-actions'>
      <Selectbox<orderFilterTypeEnum>
        data={filtersSelectboxData}
        onChange={handleFilterType}
      />
      <SearchInput placeholder='Название, бренд, цвет' onChange={onSearch} />
    </div>
  )
}

export default OrdersPageActions
