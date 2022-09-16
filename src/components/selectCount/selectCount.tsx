import { ReactFC } from '@src/interfaces/react'
import React, { useEffect, useState } from 'react'

import './selectCount.scss'

interface ISelectCountProps {
  min?: number
  max?: number
  initial?: number
  onChange?: (val: number) => void
}

const SelectCount: ReactFC<ISelectCountProps> = ({
  min,
  max,
  initial = 0,
  onChange,
}) => {
  const [value, setValue] = useState(initial)
  const [disableLess, setDisableLess] = useState(min ? min <= initial : false)
  const [disableMore, setDisableMore] = useState(max ? max <= initial : false)

  const checkDisable = () => {
    if (min && min < initial) {
      setDisableLess(false)
    }
    if (max && max > initial) {
      setDisableMore(false)
    }
  }

  useEffect(() => {
    checkDisable()
  }, [initial])

  const decrement = () => {
    const newValue = value - 1
    if (min) {
      if (newValue >= min) {
        setValue(newValue)
        onChange(newValue)
        setDisableLess(newValue - 1 < min)
        setDisableMore(false)
      }
    } else {
      setValue(newValue)
      onChange(newValue)
    }
  }

  const increment = () => {
    const newValue = value + 1
    if (max) {
      if (newValue <= max) {
        setValue(newValue)
        onChange(newValue)
        setDisableMore(newValue + 1 > max)
        setDisableLess(false)
      }
    } else {
      setValue(newValue)
      onChange(newValue)
    }
  }

  return (
    <div className='select-count'>
      <div
        className={`select-count__less ${disableLess ? 'disable' : ''}`}
        onClick={decrement}
      >
        -
      </div>
      <div className='select-count__value'>{value}</div>
      <div
        className={`select-count__more ${disableMore ? 'disable' : ''}`}
        onClick={increment}
      >
        +
      </div>
    </div>
  )
}

export default SelectCount
