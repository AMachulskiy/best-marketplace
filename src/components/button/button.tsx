import { ReactFC } from '@src/interfaces/react'
import React from 'react'

import './button.scss'

interface IButtonProps {
  onClick: () => void
  theme?: 'outline'
}

const Button: ReactFC<IButtonProps> = ({ children, onClick, theme }) => {
  let cls = 'button'
  if (theme) {
    cls += ` ${theme}`
  }

  return (
    <div className={cls} onClick={onClick}>
      {children}
    </div>
  )
}

export default Button
