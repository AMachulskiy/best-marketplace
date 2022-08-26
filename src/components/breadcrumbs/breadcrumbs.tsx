import IBreadcrumb from '@src/interfaces/breadcrumb'
import { ReactFC } from '@src/interfaces/react'
import routing from '@src/routes/routes'
import React from 'react'
import { Link } from 'react-router-dom'

import './breadcrumbs.scss'

interface IBreadcrumbsProps {
  data: IBreadcrumb[]
}

const Breadcrumbs: ReactFC<IBreadcrumbsProps> = ({ data }) => {
  const renderLinks = (breadcrumbs) => {
    const html = breadcrumbs.map(({ label, link }: IBreadcrumb, i) => {
      const isLast = i + 1 === breadcrumbs.length
      return (
        <>
          <span>/</span>
          {!isLast && <Link to={link}>{label}</Link>}
          {isLast && <div>{label}</div>}
        </>
      )
    })
    return html
  }

  return (
    <div className='breadcrumbs'>
      <Link to={routing.home}>Главная</Link>
      {renderLinks(data)}
    </div>
  )
}

export default Breadcrumbs
