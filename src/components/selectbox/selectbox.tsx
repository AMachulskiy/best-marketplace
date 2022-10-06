import ISelectboxItem from '@src/interfaces/selectbox'
import React, { useState } from 'react'

import './selectbox.scss'

interface ISelectboxProps<ValueType> {
  data: ISelectboxItem<ValueType>[]
  onChange?: (item: ISelectboxItem<ValueType>) => void
}

const Selectbox = <ValueType extends {}>(props: ISelectboxProps<ValueType>) => {
  const { data, onChange } = props
  const [selected, setSelected] = useState(data[0])
  const [isOpen, setIsOpen] = useState(false)

  const handleChange = (item: ISelectboxItem<ValueType>) => {
    setSelected(item)
    onChange(item)
    setIsOpen(false)
  }

  const renderList = () => {
    return data.map((item: ISelectboxItem<ValueType>) => {
      const itemClass =
        item.value === selected.value
          ? 'selectbox__item selected'
          : 'selectbox__item'
      return (
        <div
          key={item.value as any}
          className={itemClass}
          onClick={() => handleChange(item)}
        >
          <span>{item.label}</span>
          {item.icon && <i className={`ic_arrow-${item.icon}`} />}
        </div>
      )
    })
  }

  return (
    <div className={`selectbox ${isOpen ? 'open' : ''}`}>
      <div className='selectbox__selected' onClick={() => setIsOpen(!isOpen)}>
        <span>{selected.label}</span>
        <div className='selectbox__selected-arrow' />
      </div>
      <div className='selectbox__list'>{renderList()}</div>
    </div>
  )
}

export default Selectbox
