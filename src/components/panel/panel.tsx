import { ReactFC } from '@src/interfaces/react'
import React from 'react'

import './panel.scss'

interface IPanelProps {
  title: string
  isChange?: boolean
  onChange?: () => void
  className?: string
  isWarning?: boolean
  id?: string
}

const Panel: ReactFC<IPanelProps> = ({
  title,
  isChange,
  onChange,
  children,
  className,
  isWarning,
  id,
}) => {
  let klass = 'panel'

  if (className) {
    klass += ` ${className}`
  }

  if (isWarning) {
    klass += ' panel_warning'
  }

  return (
    <div id={id} className={klass}>
      <div className='panel__title'>
        <strong>{title}</strong>
        {isChange && <span onClick={onChange}>Изменить</span>}
      </div>
      <div className='panel__content'>{children}</div>
    </div>
  )
}

export default Panel
