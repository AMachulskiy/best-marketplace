import { useAppSelector } from '@src/hooks/redux'
import { ICheckRadio } from '@src/interfaces/filters'
import { ReactFC } from '@src/interfaces/react'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

import './filterCheckbox.scss'

interface IFilterCheckboxProps {
  label: string
  data: ICheckRadio[]
  selectedData?: ICheckRadio[]
  onChange: (data: ICheckRadio) => void
  onReset?: () => void
}

const FilterCheckbox: ReactFC<IFilterCheckboxProps> = ({
  label,
  data,
  onChange,
  selectedData,
  onReset,
}) => {
  const { partFilteredProducts } = useAppSelector((state) => state.products)
  const [isClose, setIsClose] = useState(false)
  const [isHideSearch, setIsHideSearch] = useState(true)
  const [searchValue, setSearchValue] = useState('')

  const renderCheckbox = () => {
    const selectedCheckboxes = selectedData as ICheckRadio[]
    const isBigData = data.length > 7
    const reg = new RegExp(searchValue, 'i')
    const filteredData = data.filter((item) => reg.test(item.label))
    const groupName = String(Math.random() * 1000000)
    const list = []
    for (let i = 0; i < filteredData.length; i++) {
      if (isHideSearch && i > 6) break
      const { id, label: name, value } = filteredData[i]
      const availableCount = partFilteredProducts.reduce((count, product) => {
        return product.brand.value === value ? count + 1 : count
      }, 0)
      if (availableCount) {
        list.push(
          <Form.Check
            key={id}
            type='checkbox'
            checked={selectedCheckboxes.some((item) => item.value === value)}
            onChange={() => onChange(filteredData[i])}
            name={groupName}
            id={`${groupName}-${id}`}
            label={`${name} (${availableCount})`}
            value={value}
          />
        )
      }
    }
    return (
      <div className='filter-checkbox__list'>
        {isBigData && !isHideSearch && (
          <Form.Control
            placeholder='Я ищу'
            className='filter-checkbox__search'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        )}
        <div className='filter-checkbox__list-content'>{list}</div>
        {isBigData && isHideSearch && (
          <div
            className='filter-checkbox__more'
            onClick={() => setIsHideSearch(!isHideSearch)}
          >
            показать все
          </div>
        )}
      </div>
    )
  }

  const handleReset = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onReset()
  }

  return (
    <div className={isClose ? 'filter-checkbox close' : 'filter-checkbox'}>
      <div
        className='filter-checkbox__head'
        onClick={() => setIsClose(!isClose)}
      >
        <span>{label}</span>
        {!!selectedData.length && (
          <span className='filter-checkbox__reset' onClick={handleReset}>
            Сбросить
          </span>
        )}
        <div className='filter-checkbox__close-btn' />
      </div>
      <div className='filter-checkbox__content'>{renderCheckbox()}</div>
    </div>
  )
}

export default FilterCheckbox
