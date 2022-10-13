import { IRange } from '@src/interfaces/filters'
import { ReactFC } from '@src/interfaces/react'
import React, { useState } from 'react'
import { Form, InputGroup } from 'react-bootstrap'

import './filterRange.scss'

interface IFilterRangeProps {
  label: string
  data: IRange
  onChange: (data: IRange) => void
}

const FilterRange: ReactFC<IFilterRangeProps> = ({ label, data, onChange }) => {
  const [isClose, setIsClose] = useState(false)
  const [range, setRange] = useState<IRange>(data as IRange)

  const renderRange = () => {
    return (
      <InputGroup className='mb-3'>
        {['from', 'to'].map((name) => (
          <Form.Control
            key={name}
            value={range[name]}
            onChange={(e) => {
              setRange({
                ...range,
                [name]: /^\d{0,7}$/.test(e.target.value)
                  ? +e.target.value
                  : range[name],
              })
            }}
            onKeyUp={({ key }) => (key === 'Enter' ? onChange(range) : false)}
            onBlur={() => onChange(range)}
          />
        ))}
      </InputGroup>
    )
  }

  return (
    <div className={isClose ? 'filter-range close' : 'filter-range'}>
      <div className='filter-range__head' onClick={() => setIsClose(!isClose)}>
        <span>{label}</span>
        <div className='filter-range__close-btn' />
      </div>
      <div className='filter-range__content'>{renderRange()}</div>
    </div>
  )
}

export default FilterRange
