import { ColorsEnum } from '@src/interfaces/product'
import { ReactFC } from '@src/interfaces/react'
import React, { useState } from 'react'
import { Form, InputGroup } from 'react-bootstrap'

import './filter.scss'

export interface ICheckRadio {
  id: number
  label: string
  value: string | number
}

export interface IRange {
  from: number
  to: number
}

export type IColor = keyof typeof ColorsEnum

interface IFilterProps {
  type: 'radio' | 'checkbox' | 'range' | 'color'
  label: string
  data: ICheckRadio[] | IRange | IColor[]
}

const Filter: ReactFC<IFilterProps> = ({ type, label, data }) => {
  const [isClose, setIsClose] = useState(false)
  const [isHideSearch, setIsHideSearch] = useState(true)
  const [searchValue, setSearchValue] = useState('')

  const renderColors = (_data: IColor[]) => {
    const colorsHtml = _data.map((color) => (
      <div
        key={color}
        className='filter__color'
        style={{ backgroundColor: color }}
      />
    ))
    return <div className='filter__colors'>{colorsHtml}</div>
  }

  const renderRange = ({ from, to }: IRange) => {
    return (
      <InputGroup className='mb-3'>
        <Form.Control aria-label='First name' defaultValue={from} />
        <Form.Control aria-label='Last name' defaultValue={to} />
      </InputGroup>
    )
  }

  const renderCheckRadio = (_data: ICheckRadio[], isRadio = false) => {
    const isBigData = _data.length > 7
    const reg = new RegExp(searchValue, 'i')
    const filteredData = _data.filter((item) => reg.test(item.label))
    const groupName = String(Math.random() * 1000000)
    const list = []
    for (let i = 0; i < filteredData.length; i++) {
      if (isHideSearch && i > 6) break
      list.push(
        <Form.Check
          key={filteredData[i].id}
          type={isRadio ? 'radio' : 'checkbox'}
          name={groupName}
          id={`${groupName}-${filteredData[i].id}`}
          label={filteredData[i].label}
          value={filteredData[i].value}
        />
      )
    }
    return (
      <div className='filter__list'>
        {isBigData && !isHideSearch && (
          <Form.Control
            placeholder='Я ищу'
            className='filter__search'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        )}
        <div className='filter__list-content'>{list}</div>
        {isBigData && isHideSearch && (
          <div
            className='filter__more'
            onClick={() => setIsHideSearch(!isHideSearch)}
          >
            показать все
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={isClose ? 'filter close' : 'filter'}>
      <div className='filter__head' onClick={() => setIsClose(!isClose)}>
        <span>{label}</span>
        <div className='filter__close-btn' />
      </div>
      <div className='filter__content'>
        {type === 'color' && renderColors(data as IColor[])}
        {type === 'range' && renderRange(data as IRange)}
        {type === 'radio' && renderCheckRadio(data as ICheckRadio[], true)}
        {type === 'checkbox' && renderCheckRadio(data as ICheckRadio[])}
      </div>
    </div>
  )
}

export default Filter
