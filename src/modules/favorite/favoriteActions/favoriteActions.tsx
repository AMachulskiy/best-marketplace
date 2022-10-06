import SearchInput from '@src/components/searchInput/searchInput'
import Selectbox from '@src/components/selectbox/selectbox'
import { ReactFC } from '@src/interfaces/react'
import ISelectboxItem from '@src/interfaces/selectbox'
import SortTypeEnum from '@src/interfaces/sort'
import React from 'react'
import { Form } from 'react-bootstrap'

import './favoriteActions.scss'

const sortSelectboxData: ISelectboxItem<SortTypeEnum>[] = [
  {
    label: 'По дате добавления',
    value: SortTypeEnum.addDateDown,
    icon: 'down',
  },
  { label: 'По дате добавления', value: SortTypeEnum.addDateUp, icon: 'up' },
  { label: 'По возрастанию цены', value: SortTypeEnum.priceUp },
  { label: 'По убыванию цены', value: SortTypeEnum.priceDown },
  { label: 'Сначала в наличии', value: SortTypeEnum.available },
  { label: 'Сначала не в наличии', value: SortTypeEnum.notAvailable },
]

interface IFavoriteActionsProps {
  onSort: (type: SortTypeEnum) => void
  onSearch: (value: string) => void
}

const FavoriteActions: ReactFC<IFavoriteActionsProps> = ({
  onSort,
  onSearch,
}) => {
  const handleSortType = (sortTypeObj: ISelectboxItem<SortTypeEnum>) => {
    onSort(sortTypeObj.value)
  }

  return (
    <div className='favorite-actions'>
      <Selectbox<SortTypeEnum>
        data={sortSelectboxData}
        onChange={handleSortType}
      />
      <Form.Check
        id='available'
        label='Снова в наличии'
        className='favorite-actions__check'
      />
      <SearchInput placeholder='Название, бренд, цвет' onChange={onSearch} />
    </div>
  )
}

export default FavoriteActions
