import React from 'react'
import { ReactFC } from '@src/interfaces/react'
import { useParams } from 'react-router-dom'
import Breadcrumbs from '@src/components/breadcrumbs/breadcrumbs'

const CatalogPage: ReactFC = () => {
  const params = useParams()

  return (
    <>
      <Breadcrumbs />
      <h1>Каталог товаров</h1>
    </>
  )
}

export default CatalogPage
