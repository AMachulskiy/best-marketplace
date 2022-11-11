import Search from '@src/components/search/search'
import { useAppDispatch, useAppSelector } from '@src/hooks/redux'
import { ReactFC } from '@src/interfaces/react'
import routing from '@src/routes/routes'
import menuSlice from '@src/store/menu/menuSlice'
import getProducts from '@src/store/productsStore/actions'
import { getUser } from '@src/store/userStore/actions'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import './header.scss'

const Header: ReactFC = () => {
  const dispatch = useAppDispatch()
  const { setIsOpen } = menuSlice.actions
  const { user, products } = useAppSelector((state) => state)

  useEffect(() => {
    if (!user.haveData) {
      dispatch(getUser(1))
    }
    if (!products.haveData) {
      dispatch(getProducts())
    }
  }, [user.haveData, products.haveData])

  const openMenu = () => {
    dispatch(setIsOpen(true))
  }

  return (
    <div className='container'>
      <header className='header'>
        <div className='project__title'>
          <Link to={routing.home}>
            <h1>STLZ</h1>
          </Link>
        </div>
        <div className='header__top'>
          <div>
            <div className='lang'>
              <div className='lang__selected'>Ru</div>
            </div>
            <Link to={routing.services.shipping} className='user__location'>
              <i className='ic_pin' />
              <span>Москва</span>
            </Link>
            <Link to={routing.services.shipping}>Бесплатная доставка</Link>
          </div>
          <div>
            <div className='message'>
              <i className='ic_chat' />
            </div>
          </div>
        </div>
        <div className='header__bottom'>
          <div className='menu-btn' onClick={openMenu}>
            <i className='ic_menu' />
          </div>
          <Search />
          <Link to={routing.services.shipping} className='header__link'>
            <i className='ic_pin' />
            <div>Адреса</div>
          </Link>
          <Link to={routing.account.index} className='header__link'>
            <i className='ic_user' />
            <div>Войти</div>
          </Link>
          <Link to={routing.basket} className='header__link'>
            <i className='ic_shopping-cart' />
            <div>Корзина</div>
          </Link>
        </div>
      </header>
    </div>
  )
}

export default Header
