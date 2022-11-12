import React, { useEffect } from 'react'
import { ReactFC } from '@src/interfaces/react'
import { useAppDispatch, useAppSelector } from '@src/hooks/redux'
import { ICheckRadio, IColor, IRange } from '@src/interfaces/filters'
import { setFilters } from '@src/store/productsStore/productsStore'
import getProducts from '@src/store/productsStore/actions'
import FilterCheckbox from '../filterCheckbox/filterCheckbox'
import FilterColor from '../filterColor/filterColor'
import FilterRadio from '../filterRadio/filterRadio'
import FilterRange from '../filterRange/filterRange'

import './filters.scss'
import Preloader from '../preloader/preloader'

const saleData: ICheckRadio[] = [
  { id: 1, label: 'от 10% и выше', value: 10 },
  { id: 2, label: 'от 30% и выше', value: 30 },
  { id: 3, label: 'от 50% и выше', value: 50 },
  { id: 4, label: 'от 70% и выше', value: 70 },
]

const Filters: ReactFC = () => {
  const dispatch = useAppDispatch()
  const { filters, selectedFilters, isLoading, haveData } = useAppSelector(
    (state) => state.products
  )

  useEffect(() => {
    if (!haveData) {
      dispatch(getProducts())
    }
  }, [haveData])

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

  const onReset = (filter: 'colors' | 'sale' | 'brands') => {
    dispatch(
      setFilters({
        ...selectedFilters,
        [filter]: filter === 'sale' ? null : [],
      })
    )
  }

  if (isLoading || !haveData) return <Preloader />

  return (
    <div className='filters'>
      <FilterColor
        label='Цвет'
        data={filters.colors}
        selectedData={selectedFilters.colors}
        onChange={changeColor}
        onReset={() => onReset('colors')}
      />
      <FilterRange label='Цена' data={filters.price} onChange={changePrice} />
      <FilterRadio
        label='Скидка'
        data={saleData}
        selectedData={selectedFilters.sale}
        onChange={changeSale}
        onReset={() => onReset('sale')}
      />
      <FilterCheckbox
        label='Бренды'
        data={filters.brands}
        selectedData={selectedFilters.brands}
        onChange={changeBrand}
        onReset={() => onReset('brands')}
      />
    </div>
  )
}

export default Filters
