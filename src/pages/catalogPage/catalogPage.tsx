import React from 'react'
import { ReactFC } from '@src/interfaces/react'
import { useParams } from 'react-router-dom'
import Breadcrumbs from '@src/components/breadcrumbs/breadcrumbs'
import Filters from '@src/components/filters/filters'
import CategoryList from '@src/components/categoryList/categoryList'
import MainCategoryPage from './mainCategoryPage/mainCategoryPage'
import SubCategoryPage from './subCategoryPage copy/subCategoryPage'

import './catalogPage.scss'

const CatalogPage: ReactFC = () => {
  const { subcategory } = useParams()
  return (
    <div className='wrapper'>
      <Breadcrumbs />
      <h1>Каталог товаров</h1>
      <main className='products'>
        <div className='main-category-page__sidebar'>
          {!subcategory && <CategoryList />}
          {subcategory && <Filters />}
        </div>
        <div className='main-category-page__content'>
          {!subcategory && <MainCategoryPage />}
          {subcategory && <SubCategoryPage />}
        </div>
      </main>
    </div>
  )
}

export default CatalogPage
