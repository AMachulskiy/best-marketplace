import React, { ReactNode } from 'react'
import { ReactFC } from '@src/interfaces/react'
import IProduct from '@src/interfaces/product'
import ProductCard from '@src/components/productCard/productCard'
import CustomPagination from '@src/components/pagination/pagination'
import generateProducts from '@src/data/products'

import './subCategoryPage.scss'

const SubCategoryPage: ReactFC = () => {
  const renderProducts = (num: number) => {
    const productsData = generateProducts(num)
    const products: ReactNode[] = []
    productsData.forEach((productData: IProduct) => {
      products.push(<ProductCard key={productData.id} product={productData} />)
    })
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
