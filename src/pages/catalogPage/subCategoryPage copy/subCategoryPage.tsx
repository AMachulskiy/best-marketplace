import React, { ReactNode } from 'react'
import { ReactFC } from '@src/interfaces/react'
import IProduct from '@src/interfaces/product'
import ProductCard from '@src/components/productCard/productCard'

import './subCategoryPage.scss'

const SubCategoryPage: ReactFC = () => {
  const renderProducts = (num: number) => {
    const products: ReactNode[] = []
    for (let i = 0; i < num; i++) {
      const finish = Math.floor(Math.random() * 15)
      const name = 'IPhone 13 Pro'.substring(0, finish)
      const productData: IProduct = {
        id: i,
        bage: 'new',
        name,
        brand: 'Apple',
        cover: `https://picsum.photos/id/${i}/200/300`,
        price: Math.floor(Math.random() * 1000000),
        link: '/catalog/elektronika/telefony',
        sale: Math.floor(Math.random() * 100),
        color: 'black',
        ram: '128 Гб',
        ssd: '1 Тб',
        rating: {
          total: 3,
          count: 33,
        },
        seller: 'STLZ',
        shipTime: 3,
        credit: 'РАССРОЧКА ОТ 0-0-6!',
      }
      products.push(<ProductCard product={productData} />)
    }
    return products
  }

  return (
    <>
      <div className='sub-category-page__sort-panel'>Панель сортировки</div>
      <div className='sub-category-page__products'>{renderProducts(16)}</div>
      <div>Навигация</div>
    </>
  )
}

export default SubCategoryPage
