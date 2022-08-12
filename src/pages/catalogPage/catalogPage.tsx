import React, { ReactNode } from 'react'
import { ReactFC } from '@src/interfaces/react'
import Breadcrumbs from '@src/components/breadcrumbs/breadcrumbs'
import CategoryList from '@src/components/categoryList/categoryList'
import MainPageSlider from '@src/components/mainPageSlider/mainPageSlider'

import './catalogPage.scss'
import { IProduct } from '@src/interfaces/product'
import CollectionCard from '@src/components/collectionCard/collectionCard'
import MiniProductCard from '@src/components/miniProductCard/miniProductCard'

const CatalogPage: ReactFC = () => {
  const renderCollection = (num: number) => {
    const collections: ReactNode[] = []
    for (let i = 0; i < num; i++) {
      collections.push(<CollectionCard key={i} id={i} />)
    }
    return collections
  }

  const renderProducts = (num: number) => {
    const products: ReactNode[] = []
    for (let i = 0; i < num; i++) {
      const finish = Math.floor(Math.random() * 15)
      const name = 'IPhone 13 Pro'.substring(0, finish)
      const productData: IProduct = {
        id: i,
        name,
        brand: 'Apple',
        img: `https://picsum.photos/id/${i}/300/500`,
        price: Math.floor(Math.random() * 1000000),
        link: '/catalog/elektronika/telefony',
        sale: Math.floor(Math.random() * 100),
      }
      products.push(<MiniProductCard product={productData} />)
    }
    return products
  }

  return (
    <div className='wrapper'>
      <Breadcrumbs />
      <h1>Каталог товаров</h1>
      <main className='products'>
        <div className='products__sidebar'>
          <CategoryList />
        </div>
        <div className='products__content'>
          <MainPageSlider />
          <div className='products__collections products__collections_3'>
            {renderCollection(8)}
          </div>
          <div className='products__liked'>
            <h2>Популярные товары</h2>
            <div className='products__products'>{renderProducts(5)}</div>
          </div>
          <div className='products__collections products__collections_4'>
            {renderCollection(12)}
          </div>
          <div className='products__liked'>
            <h2>Новинки</h2>
            <div className='products__products'>{renderProducts(5)}</div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CatalogPage
