import React from 'react'
import { ReactFC } from '@src/interfaces/react'
import Favorite from '@src/modules/favorite/favorite'

const FavoritePage: ReactFC = () => {
  return (
    <div className='favorite-page'>
      <h1>Favorite</h1>
      <Favorite />
    </div>
  )
}

export default FavoritePage
