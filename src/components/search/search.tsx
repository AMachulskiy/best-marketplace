import { ReactFC } from '@src/interfaces/react'
import React from 'react'

import './search.scss'

const Search: ReactFC = () => {
  return (
    <div className='search'>
      <div className='search__input'>
        <i className='ic_search' />
        <input type='text' placeholder='Я ищу ...' />
        <i className='ic_photo-camera' />
      </div>
    </div>
  )
}

export default Search
