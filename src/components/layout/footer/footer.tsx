import { ReactFC } from '@src/interfaces/react'
import React from 'react'
import { Link } from 'react-router-dom'

import './footer.scss'

const Footer: ReactFC = () => {
  return (
    <div className='container'>
      <footer className='footer'>
        <div className='footer__column'>
          <h3 className='footer__title'>Покупателям</h3>
          <Link to='/'>Как сделать заказ</Link>
          <Link to='/'>Способы оплаты</Link>
          <Link to='/'>Доставка</Link>
          <Link to='/'>Возврат товара</Link>
          <Link to='/'>Возврат денежных средств</Link>
          <Link to='/'>Правила продажи</Link>
          <Link to='/'>Правила пользования торговой площадкой</Link>
          <Link to='/'>Вопросы и ответы</Link>
        </div>
        <div className='footer__column'>
          <h3 className='footer__title'>Партнерам</h3>
          <Link to='/'>Продавайте на STLZ</Link>
          <Link to='/'>Перевозчикам</Link>
          <Link to='/'>Откройте пункт выдачи</Link>
          <Link to='/'>Франшизный пункт выдачи</Link>
          <h3 className='footer__title'>Наши проекты</h3>
          <Link to='/'>STLZ Guru</Link>
          <Link to='/'>Трудоустройство</Link>
          <Link to='/'>Цифровые товары</Link>
        </div>
        <div className='footer__column'>
          <h3 className='footer__title'>Компания</h3>
          <Link to='/'>О нас</Link>
          <Link to='/'>Реквизиты</Link>
          <Link to='/'>Пресс-центр</Link>
          <Link to='/'>Контакты</Link>
          <Link to='/'>Bug Bounty</Link>
          <Link to='/'>STLZ.Tech</Link>
        </div>
        <div className='footer__column'>
          <h3 className='footer__title'>Мы в соцсетях</h3>
          <Link to='/'>Вконтакте</Link>
          <Link to='/'>Одноклассники</Link>
          <Link to='/'>YouTube</Link>
          <Link to='/'>Телеграм</Link>
        </div>
        <div className='footer__column'>
          <h3 className='footer__title'>Мобильные устройства</h3>
          <div className='footer__app'>
            <img src='../../images/mobile-app/google.png' alt='GooglePlay' />
            <img src='../../images/mobile-app/apple.png' alt='AppStore' />
          </div>
        </div>
        <div>
          <div>
            2004-2022 © STLZ — модный интернет-магазин одежды, обуви и
            аксессуаров. Все права защищены. Доставка по всей России.
          </div>
          <Link to='/'>Проверка совместимости</Link>
          <div className='footer__pay'>
            <i className='ic_visa' />
            <i className='ic_visa' />
            <i className='ic_visa' />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
