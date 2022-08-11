import { ReactFC } from '@src/interfaces/react'
import React from 'react'

import './collectionCard.scss'

interface ICollectionCardProps {
  id: number
}

const CollectionCard: ReactFC<ICollectionCardProps> = ({ id }) => {
  return (
    <div className='collection-card'>
      <img
        src={`https://picsum.photos/id/${id}/300/200`}
        alt='Collection card'
      />
    </div>
  )
}

export default CollectionCard
