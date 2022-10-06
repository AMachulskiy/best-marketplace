import { ReactFC } from '@src/interfaces/react'
import React from 'react'

import './starsRating.scss'

interface IStarsRating {
  rating: number
}

const StarsRating: ReactFC<IStarsRating> = ({ rating }) => {
  const renderStars = () => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(
        <i
          key={i}
          className={i < rating ? 'ic_star-fill fill' : 'ic_star-fill'}
        />
      )
    }
    return stars
  }
  return <div className='stars-rating'>{renderStars()}</div>
}

export default StarsRating
