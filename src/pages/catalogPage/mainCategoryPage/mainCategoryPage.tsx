import React, { ReactNode } from 'react'
import { ReactFC } from '@src/interfaces/react'
import MainPageSlider from '@src/components/mainPageSlider/mainPageSlider'
import CollectionCard from '@src/components/collectionCard/collectionCard'
import MiniProductCard from '@src/components/miniProductCard/miniProductCard'
import IProduct from '@src/interfaces/product'
import generateProducts from '@src/data/products'

import './mainCategoryPage.scss'

const MainCategoryPage: ReactFC = () => {
  const renderCollection = (num: number) => {
    const collections: ReactNode[] = []
    for (let i = 0; i < num; i++) {
      collections.push(<CollectionCard key={i} id={i} />)
    }
    return collections
  }

  const renderProducts = (num: number) => {
    const productsData = generateProducts(num)
    const products: ReactNode[] = []
    productsData.forEach((productData: IProduct) => {
      products.push(
        <MiniProductCard key={productData.id} product={productData} />
      )
    })
    return products
  }

  return (
    <>
      <MainPageSlider />
      <div className='main-category-page__collections main-category-page__collections_3'>
        {renderCollection(8)}
      </div>
      <div className='main-category-page__liked'>
        <h2>Популярные товары</h2>
        <div className='main-category-page__products'>{renderProducts(5)}</div>
      </div>
      <div className='main-category-page__collections main-category-page__collections_4'>
        {renderCollection(12)}
      </div>
      <div className='main-category-page__liked'>
        <h2>Новинки</h2>
        <div className='main-category-page__products'>{renderProducts(5)}</div>
      </div>
    </>
  )
}

export default MainCategoryPage
