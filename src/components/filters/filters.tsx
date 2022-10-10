import { useAppDispatch, useAppSelector } from '@src/hooks/redux'
import { ICheckRadio, IColor, IRange } from '@src/interfaces/filters'
import { ReactFC } from '@src/interfaces/react'
import { setFilters } from '@src/store/productsStore/productsStore'
import React from 'react'
import Filter from '../filter/filter'

import './filters.scss'

const saleData: ICheckRadio[] = [
  { id: 1, label: 'от 10% и выше', value: 10 },
  { id: 2, label: 'от 30% и выше', value: 30 },
  { id: 3, label: 'от 50% и выше', value: 50 },
  { id: 4, label: 'от 70% и выше', value: 70 },
]

const Filters: ReactFC = () => {
  const dispatch = useAppDispatch()
  const { filters, selectedFilters } = useAppSelector((state) => state.products)

  const changeColor = (color: IColor) => {
    const { colors } = selectedFilters
    const isSelected = colors.includes(color)
    const withoutSelectedColor = colors.filter((c) => c !== color)
    dispatch(
      setFilters({
        ...selectedFilters,
        colors: isSelected ? withoutSelectedColor : [...colors, color],
      })
    )
  }

  const changePrice = (price: IRange) => {
    dispatch(
      setFilters({
        ...selectedFilters,
        price,
      })
    )
  }

  const changeSale = (sale: number) => {
    dispatch(
      setFilters({
        ...selectedFilters,
        sale,
      })
    )
  }

  const changeBrand = (brand: ICheckRadio) => {
    const { brands } = selectedFilters
    const isSelected = brands.some((b) => b.value === brand.value)
    const withoutSelectedBrand = brands.filter((b) => b.value !== brand.value)
    dispatch(
      setFilters({
        ...selectedFilters,
        brands: isSelected ? withoutSelectedBrand : [...brands, brand],
      })
    )
  }

  return (
    <div className='filters'>
      <Filter
        label='Цвет'
        type='color'
        data={filters.colors}
        selectedData={selectedFilters.colors}
        onChange={changeColor}
      />
      <Filter
        label='Цена'
        type='range'
        data={filters.price}
        onChange={changePrice}
      />
      <Filter
        label='Скидка'
        type='radio'
        data={saleData}
        onChange={changeSale}
      />
      <Filter
        label='Бренды'
        type='checkbox'
        data={filters.brands}
        selectedData={selectedFilters.brands}
        onChange={changeBrand}
      />
    </div>
  )
}

export default Filters
