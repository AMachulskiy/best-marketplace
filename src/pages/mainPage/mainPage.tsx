import React, { ReactNode, useState } from 'react'
import { ReactFC } from '@src/interfaces/react'
import MainPageSlider from '@src/components/mainPageSlider/mainPageSlider'
import CollectionCard from '@src/components/collectionCard/collectionCard'
import MiniProductCard from '@src/components/miniProductCard/miniProductCard'
import IProduct from '@src/interfaces/product'

import './mainPage.scss'

const MainPage: ReactFC = () => {
  let count = 1
  const [productCount, setProductCount] = useState(42)

  const viewMoreProducts = () => {
    count += 1
    setProductCount(productCount * count)
  }

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
        cover: `https://picsum.photos/id/${i}/300/500`,
        price: Math.floor(Math.random() * 1000000),
        link: '/catalog/elektronika/telefony',
        sale: Math.floor(Math.random() * 100),
        color: 'black',
        ram: '128 Гб',
        ssd: '1 Тб',
        rating: {
          total: 5,
          count: 33,
        },
        seller: 'STLZ',
        shipTime: 3,
      }
      products.push(<MiniProductCard product={productData} />)
    }
    return products
  }

  return (
    <div className='wrapper main'>
      <MainPageSlider />
      <div className='main__collections main__collections_4'>
        {renderCollection(8)}
      </div>
      <div className='main__liked'>
        <h2>Возможно, Вам понравится</h2>
        <div className='main__products'>{renderProducts(14)}</div>
      </div>
      <div className='main__collections'>{renderCollection(2)}</div>
      <div className='main__products'>{renderProducts(14)}</div>
      <div className='main__collections'>{renderCollection(2)}</div>
      <div className='main__products'>{renderProducts(productCount)}</div>
      <div className='main__more-btn' onClick={viewMoreProducts}>
        Показать еще
      </div>
    </div>
  )
}

export default MainPage
