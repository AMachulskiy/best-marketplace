import Breadcrumbs from '@src/components/breadcrumbs/breadcrumbs'
import Preloader from '@src/components/preloader/preloader'
import ProductInfo from '@src/modules/productInfo/productInfo'
import StarsRating from '@src/components/starsRating/starsRating'
import breadcrumbsHelpers from '@src/helpers/breadcrumbsHelpers'
import IBreadcrumb from '@src/interfaces/breadcrumb'
import ICategoriesParams from '@src/interfaces/params'
import { ReactFC } from '@src/interfaces/react'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@src/hooks/redux'
import { setProduct } from '@src/store/productsStore/productsStore'
import { ColorsEnum } from '@src/interfaces/product'

import './productPage.scss'

const ProductPage: ReactFC = () => {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const { product, haveData, isLoading } = useAppSelector(
    (state) => state.products
  )

  useEffect(() => {
    if (haveData) {
      dispatch(setProduct(+id))
    }
  }, [id, haveData])

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

  if (!product || isLoading || !haveData) return <Preloader />

  return (
    <div className='product-page'>
      <Breadcrumbs data={getBreadcrumbsData()} />
      <h3 className='product__title'>
        {product.brand.label} / {product.name} / {product.ram} / {product.ssd} /{' '}
        {ColorsEnum[product.color]}
      </h3>
      <div className='product__statistic'>
        <StarsRating rating={product.rating.total} />
        <a href='#reviews' className='product__reviews-link'>
          8 отзывов
        </a>
        <div className='product__articul'>
          <span>Артикул:</span>
          <strong>113008008</strong>
        </div>
        <span>Купили {product.soldCount} раз</span>
      </div>
      <ProductInfo />
    </div>
  )
}

export default ProductPage
