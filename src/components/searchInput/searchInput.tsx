import { ReactFC } from '@src/interfaces/react'
import React, { useState } from 'react'

import './searchInput.scss'

interface ISearchInputProps {
  placeholder?: string
  onChange: (value: string) => void
}

const SearchInput: ReactFC<ISearchInputProps> = ({ placeholder, onChange }) => {
  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
    setValue(e.target.value)
  }

  const cleanValue = () => {
    onChange('')
    setValue('')
  }

  return (
    <div className='search-input'>
      <div className='search-input__input'>
        <input
          type='text'
          placeholder={placeholder}
          onInput={handleChange}
          value={value}
        />
        {!value && <i className='ic_search' />}
        {value && <i className='ic_close' onClick={cleanValue} />}
      </div>
    </div>
  )
}

export default SearchInput
