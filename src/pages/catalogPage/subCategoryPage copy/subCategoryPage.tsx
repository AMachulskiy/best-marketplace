import React, { ReactNode } from 'react'
import { ReactFC } from '@src/interfaces/react'
import IProduct from '@src/interfaces/product'
import ProductCard from '@src/components/productCard/productCard'
import CustomPagination from '@src/components/pagination/pagination'

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
        cover: `https://placeimg.com/200/300/tech?id=${i}`,
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
      products.push(<ProductCard key={i} product={productData} />)
    }
    return products
  }

  return (
    <>
      <div className='sort'>
        <div className='sort__actions'>
          <span className='sort__actions-label'>Сортировка по:</span>
          <div className='sort__action active'>Популярности</div>
          <div className='sort__action'>Рейтингу</div>
          <div className='sort__action'>
            <span>Цене</span>
            <i className='ic_left-arrow' />
          </div>
          <div className='sort__action'>Скидке</div>
          <div className='sort__action'>Обновлению</div>
        </div>
        <div className='sort__view'>
          <i className='ic_view-2 active' />
          <i className='ic_view-1' />
        </div>
      </div>
      <div className='sub-category-page__products'>{renderProducts(16)}</div>
      <CustomPagination />
    </>
  )
}

export default SubCategoryPage
