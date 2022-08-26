import React from 'react'
import { ReactFC } from '@src/interfaces/react'
import { useParams } from 'react-router-dom'
import breadcrumbsHelpers from '@src/helpers/breadcrumbsHelpers'
import Breadcrumbs from '@src/components/breadcrumbs/breadcrumbs'
import Filters from '@src/components/filters/filters'
import CategoryList from '@src/components/categoryList/categoryList'
import ICategoriesParams from '@src/interfaces/params'
import MainCategoryPage from './mainCategoryPage/mainCategoryPage'
import SubCategoryPage from './subCategoryPage copy/subCategoryPage'

import './catalogPage.scss'

const CatalogPage: ReactFC = () => {
  const params: ICategoriesParams = useParams()
  const breadcrumbsData =
    breadcrumbsHelpers.getCategoriesBreadcrumbsData(params)

  return (
    <div className='wrapper'>
      {breadcrumbsData && <Breadcrumbs data={breadcrumbsData} />}
      <h1>Каталог товаров</h1>
      <main className='products'>
        <div className='main-category-page__sidebar'>
          {!params.subCategory && <CategoryList />}
          {params.subCategory && <Filters />}
        </div>
        <div className='main-category-page__content'>
          {!params.subCategory && <MainCategoryPage />}
          {params.subCategory && <SubCategoryPage />}
        </div>
      </main>
    </div>
  )
}

export default CatalogPage
