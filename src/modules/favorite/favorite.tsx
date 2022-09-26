import { ColorsEnum, IFavoriteProduct } from '@src/interfaces/product'
import { ReactFC } from '@src/interfaces/react'
import React, { useState } from 'react'
import moment from 'moment'
import { SortTypeEnum } from '@src/interfaces/selectbox'
import functionHelpers from '@src/helpers/functionHelpers'
import FavoriteActions from './favoriteActions/favoriteActions'
import FavoriteCard from './favoriteCard/favoriteCard'

import './favorite.scss'

const generateProducts = (num: number) => {
  const products: IFavoriteProduct[] = []
  for (let i = 0; i < num; i++) {
    const names = ['IPhone 13 Pro', 'MacBook Pro 16', 'Super TV']
    const brands = ['Apple', 'Samsung', 'Electronica']
    const colors = ['black', 'blue', 'green', 'yellow', 'red', 'white']
    const nameId = Math.floor(Math.random() * names.length)
    const brandsId = Math.floor(Math.random() * brands.length)
    const colorsId = Math.floor(Math.random() * colors.length)
    const productData: IFavoriteProduct = {
      id: i,
      bage: 'new',
      name: names[nameId],
      brand: brands[brandsId],
      cover: `https://placeimg.com/200/300/tech?id=${i}`,
      price: Math.floor(Math.random() * 1000000),
      link: '/catalog/elektronika/telefony',
      sale: Math.floor(Math.random() * 100),
      color: colors[colorsId] as
        | 'black'
        | 'blue'
        | 'green'
        | 'yellow'
        | 'red'
        | 'white',
      ram: '128 Гб',
      ssd: '1 Тб',
      rating: {
        total: 3,
        count: 33,
      },
      seller: 'STLZ',
      shipTime: 3,
      credit: 'РАССРОЧКА ОТ 0-0-6!',
      isAvailable: !!Math.round(Math.random()),
      addToFavoriteDate: moment(
        Date.now() - Math.floor(Math.random() * 100000000)
      ),
    }
    products.push(productData)
  }
  return products
}
const productsData = generateProducts(30)

const Favorite: ReactFC = () => {
  const [products, setProducts] = useState(productsData)
  const [filteredProducts, setfilteredProducts] = useState(productsData)

  const onSort = (type: SortTypeEnum) => {
    const sortedProducts = products.sort((a, b) => {
      const dataA = {
        date: a.addToFavoriteDate.valueOf(),
        price: functionHelpers.getSalePrice(a.price, a.sale),
        isAvailable: a.isAvailable,
      }
      const dataB = {
        date: b.addToFavoriteDate.valueOf(),
        price: functionHelpers.getSalePrice(b.price, b.sale),
        isAvailable: b.isAvailable,
      }
      if (type === SortTypeEnum.addDateDown) {
        return dataA.date > dataB.date ? -1 : 1
      }
      if (type === SortTypeEnum.addDateUp) {
        return dataA.date < dataB.date ? -1 : 1
      }
      if (type === SortTypeEnum.priceDown) {
        return dataA.price > dataB.price ? -1 : 1
      }
      if (type === SortTypeEnum.priceUp) {
        return dataA.price < dataB.price ? -1 : 1
      }
      if (type === SortTypeEnum.available) {
        return dataA.isAvailable > dataB.isAvailable ? -1 : 1
      }
      if (type === SortTypeEnum.notAvailable) {
        return dataA.isAvailable < dataB.isAvailable ? -1 : 1
      }
    })
    setfilteredProducts([...sortedProducts])
  }

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
