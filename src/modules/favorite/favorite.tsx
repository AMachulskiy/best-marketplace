import { ColorsEnum } from '@src/interfaces/product'
import { ReactFC } from '@src/interfaces/react'
import React, { useState } from 'react'
import SortTypeEnum from '@src/interfaces/sort'
import sortHelpers from '@src/helpers/sortHelpers'
import generateProducts from '@src/data/products'
import FavoriteActions from './favoriteActions/favoriteActions'
import FavoriteCard from './favoriteCard/favoriteCard'

import './favorite.scss'

const productsData = generateProducts(30)

const Favorite: ReactFC = () => {
  const [products, setProducts] = useState(productsData)
  const [filteredProducts, setfilteredProducts] = useState(productsData)

  const onSort = (type: SortTypeEnum) => {
    const sortedProducts = sortHelpers.sortFavoriteProducts(type, products)
    setfilteredProducts(sortedProducts)
  }

  const onSearch = (value: string) => {
    const reg = new RegExp(value, 'i')
    const filtered = products.filter((product) => {
      return (
        reg.test(product.name) ||
        reg.test(product.brand.label) ||
        reg.test(ColorsEnum[product.color])
      )
    })
    setfilteredProducts(filtered)
  }

  const deleteFromFavorite = (id: number) => {
    const filtered = products.filter((product) => product.id !== id)
    setProducts(filtered)
    setfilteredProducts(filtered)
  }

  const addToCart = (id: number) => {
    const filtered = products.filter((product) => product.id !== id)
    setProducts(filtered)
    setfilteredProducts(filtered)
  }

  return (
    <div className='favorite'>
      <FavoriteActions onSort={onSort} onSearch={onSearch} />
      <div className='favorite__content'>
        <div className='favorite__products'>
          {filteredProducts.map((product) => (
            <FavoriteCard
              key={product.id}
              product={product}
              onDelete={deleteFromFavorite}
              toCart={addToCart}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Favorite
