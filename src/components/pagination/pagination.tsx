import { ReactFC } from '@src/interfaces/react'
import React from 'react'
import Pagination from 'react-bootstrap/Pagination'

import './pagination.scss'

const CustomPagination: ReactFC = () => {
  return (
    <Pagination className='pagination'>
      <Pagination.First />
      <Pagination.Prev className='pagination__prev-btn'>
        <i className='ic_left-arrow' />
        <span>Предыдущая страница</span>
      </Pagination.Prev>
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item active>{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>
      <Pagination.Ellipsis disabled />
      <Pagination.Next className='pagination__next-btn'>
        <span>Следующая страница</span>
        <i className='ic_left-arrow' />
      </Pagination.Next>
      <Pagination.Last />
    </Pagination>
  )
}

export default CustomPagination
