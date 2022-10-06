import { ReactFC } from '@src/interfaces/react'
import routing from '@src/routes/routes'
import React from 'react'
import { Link, useMatch } from 'react-router-dom'

import './accountNav.scss'

const AccountNav: ReactFC = () => {
  const renderNavigation = () => {
    const navData = [
      { icon: 'home', text: 'Главная', route: routing.account.index },
      { icon: 'heart', text: 'Избранное', route: routing.account.favorites },
      { icon: 'bags', text: 'Покупки', route: routing.account.orders },
      { icon: 'comment', text: 'Обращения', route: routing.account.support },
      {
        icon: 'book',
        text: 'Отзывы и вопросы',
        route: routing.account.reviews,
      },
      { icon: 'wallet', text: 'Баланс', route: routing.account.wallet },
      { icon: 'user-out', text: 'Профиль', route: routing.account.profile },
    ]

    return navData.map(({ icon, text, route }) => (
      <Link
        key={route}
        to={route}
        className={`account__nav-item ${useMatch(route) ? 'active' : ''}`}
      >
        <i className={`ic_${icon}`} />
        <span>{text}</span>
      </Link>
    ))
  }

  return <div className='account__nav'>{renderNavigation()}</div>
}

export default AccountNav
