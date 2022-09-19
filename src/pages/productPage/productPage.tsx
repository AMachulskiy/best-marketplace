import Breadcrumbs from '@src/components/breadcrumbs/breadcrumbs'
import Preloader from '@src/components/preloader/preloader'
import ProductInfo from '@src/modules/productInfo/productInfo'
import StarsRating from '@src/components/starsRating/starsRating'
import breadcrumbsHelpers from '@src/helpers/breadcrumbsHelpers'
import IBreadcrumb from '@src/interfaces/breadcrumb'
import ICategoriesParams from '@src/interfaces/params'
import IProduct from '@src/interfaces/product'
import { ReactFC } from '@src/interfaces/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import './productPage.scss'

const productData: IProduct = {
  id: 1,
  bage: 'new',
  name: 'MacBook Pro',
  brand: 'Apple',
  cover: 'https://placeimg.com/200/300/tech?id=10',
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
  category: 'elektronika',
  subCategory: 'komputery',
}

const ProductPage: ReactFC = () => {
  const { id } = useParams()
  const [product, setProduct] = useState<IProduct>()

  useEffect(() => {
    if (id) {
      setTimeout(() => {
        setProduct(productData)
      }, 1000)
    }
  }, [id])

  const getBreadcrumbsData = (): IBreadcrumb[] => {
    const params: ICategoriesParams = {
      category: product.category,
      subCategory: product.subCategory,
      innerSubCategory: product.innerSubCategory,
    }
    const breadcrumbs = breadcrumbsHelpers.getCategoriesBreadcrumbsData(params)
    breadcrumbs.push({ label: product.name })
    return breadcrumbs
  }

  if (!product) return <Preloader />

  return (
    <div className='product-page'>
      <Breadcrumbs data={getBreadcrumbsData()} />
      <h3 className='product__title'>
        {product.brand} / {product.name} / {product.ram} / {product.ssd} /{' '}
        {product.color}
      </h3>
      <div className='product__statistic'>
        <StarsRating rating={4} />
        <a href='#reviews' className='product__reviews-link'>
          8 отзывов
        </a>
        <div className='product__articul'>
          <span>Артикул:</span>
          <strong>113008008</strong>
        </div>
        <span>Купили более 40 раз</span>
      </div>
      <ProductInfo product={product} />
    </div>
  )
}

export default ProductPage
