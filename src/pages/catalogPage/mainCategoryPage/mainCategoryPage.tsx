import React, { ReactNode } from 'react'
import { ReactFC } from '@src/interfaces/react'
import MainPageSlider from '@src/components/mainPageSlider/mainPageSlider'
import CollectionCard from '@src/components/collectionCard/collectionCard'
import MiniProductCard from '@src/components/miniProductCard/miniProductCard'

import './mainCategoryPage.scss'
import { useAppSelector } from '@src/hooks/redux'
import Preloader from '@src/components/preloader/preloader'

const MainCategoryPage: ReactFC = () => {
  const { products, isLoading, haveData } = useAppSelector(
    (state) => state.products
  )

  const renderCollection = (num: number) => {
    const collections: ReactNode[] = []
    for (let i = 0; i < num; i++) {
      collections.push(<CollectionCard key={i} id={i} />)
    }
    return collections
  }

  const renderProducts = (num: number) => {
    const cutProducts: ReactNode[] = []
    for (let i = 0; i < num; i++) {
      cutProducts.push(
        <MiniProductCard key={products[i].id} product={products[i]} />
      )
    }
    return cutProducts
  }

  if (isLoading || !haveData) return <Preloader />

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
