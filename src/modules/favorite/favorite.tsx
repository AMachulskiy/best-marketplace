import { ColorsEnum } from '@src/interfaces/product'
import { ReactFC } from '@src/interfaces/react'
import React, { useEffect, useState } from 'react'
import SortTypeEnum from '@src/interfaces/sort'
import sortHelpers from '@src/helpers/sortHelpers'
import { useAppSelector } from '@src/hooks/redux'
import FavoriteActions from './favoriteActions/favoriteActions'
import FavoriteCard from './favoriteCard/favoriteCard'

import './favorite.scss'

const Favorite: ReactFC = () => {
  const { favorite } = useAppSelector((state) => state.user)
  const [filteredProducts, setfilteredProducts] = useState(favorite)
  const [sortType, setSortType] = useState(SortTypeEnum.addDateUp)

  const onSort = (type: SortTypeEnum) => {
    setSortType(type)
    const sortedProducts = sortHelpers.sortFavoriteProducts(type, [...favorite])
    setfilteredProducts(sortedProducts)
  }

  useEffect(() => {
    onSort(sortType)
  }, [favorite])

  const onSearch = (value: string) => {
    const reg = new RegExp(value, 'i')
    const filtered = favorite.filter((product) => {
      return (
        reg.test(product.name) ||
        reg.test(product.brand.label) ||
        reg.test(ColorsEnum[product.color])
      )
    })
    setfilteredProducts(filtered)
  }

  return (
    <div className='favorite'>
      <FavoriteActions onSort={onSort} onSearch={onSearch} />
      <div className='favorite__content'>
        <div className='favorite__products'>
          {filteredProducts.map((product) => (
            <FavoriteCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Favorite
