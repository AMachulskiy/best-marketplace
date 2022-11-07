import { ReactFC } from '@src/interfaces/react'
import React from 'react'

import './button.scss'

interface IButtonProps {
  onClick: () => void
  theme?: 'outline'
  disable?: boolean
}

const Button: ReactFC<IButtonProps> = ({
  children,
  onClick,
  theme,
  disable,
}) => {
  let cls = 'button'
  if (theme) {
    cls += ` ${theme}`
  }
  if (disable) {
    cls += ` disable`
  }

  return (
    <div className={cls} onClick={onClick}>
      {children}
    </div>
  )
}

export default Button
