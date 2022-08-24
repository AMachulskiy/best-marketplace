import { ReactFC } from '@src/interfaces/react'
import React from 'react'
import Filter, { ICheckRadio } from '../filter/filter'

import './filters.scss'

const sale: ICheckRadio[] = [
  { id: 1, label: 'от 10% и выше', value: 10 },
  { id: 2, label: 'от 30% и выше', value: 30 },
  { id: 3, label: 'от 50% и выше', value: 50 },
  { id: 4, label: 'от 70% и выше', value: 70 },
]

const brands: ICheckRadio[] = [
  { id: 1, label: 'Dell', value: 'dell' },
  { id: 2, label: 'Lenovo', value: 'lenovo' },
  { id: 3, label: 'HP', value: 'hp' },
  { id: 4, label: 'Apple', value: 'apple' },
  { id: 5, label: 'Acer', value: 'acer' },
  { id: 6, label: 'Asus', value: 'asus' },
  { id: 7, label: 'Huawei', value: 'huawei' },
  { id: 8, label: 'Fujitsu', value: 'fujitsu' },
  { id: 9, label: 'Samsung', value: 'samsung' },
  { id: 10, label: 'Sony', value: 'sony' },
  { id: 11, label: 'Alienware', value: 'alienware' },
  { id: 12, label: 'Gigabyte', value: 'gigabyte' },
]

const Filters: ReactFC = () => {
  return (
    <div className='filters'>
      <Filter
        label='Цвет'
        type='color'
        data={['black', 'green', 'yellow', 'blue', 'red']}
      />
      <Filter label='Цена' type='range' data={{ from: 100, to: 100000 }} />
      <Filter label='Скидка' type='radio' data={sale} />
      <Filter label='Бренды' type='checkbox' data={brands} />
    </div>
  )
}

export default Filters
