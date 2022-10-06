import { IInformationList } from '@src/interfaces/product'
import { ReactFC } from '@src/interfaces/react'
import React, { Fragment } from 'react'

import './informationList.scss'

interface IInformationListProps {
  data: IInformationList[]
}

const InformationList: ReactFC<IInformationListProps> = ({ data }) => {
  return (
    <div className='information-list-wrap'>
      {data.map((item) => (
        <Fragment key={item.title}>
          <div className='information-list__title'>{item.title}</div>
          <div className='information-list'>
            {item.list.map((listItem) => (
              <div key={listItem.label} className='information-list__item'>
                <div className='information-list__label'>
                  <span>{listItem.label}</span>
                  <span className='information-list__line' />
                </div>
                <strong className='information-list__value'>
                  {listItem.value}
                </strong>
              </div>
            ))}
          </div>
        </Fragment>
      ))}
    </div>
  )
}

export default InformationList
