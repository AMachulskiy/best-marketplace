import { ReactFC } from '@src/interfaces/react'
import routing from '@src/routes/routes'
import React from 'react'
import IProduct from '@src/interfaces/product'
import generateProducts from '@src/data/products'
import AccountCard from './accountCard/accountCard'

import './account.scss'

const product: IProduct = generateProducts(1)[0]

const getProducts = (count: number): IProduct[] => {
  const products: IProduct[] = []
  for (let i = 0; i < count; i++) {
    products.push({
      ...product,
      id: i,
      cover: `https://placeimg.com/100/100/tech?id=${i}`,
    })
  }
  return products
}

const buyProductsData = getProducts(5)
const favoriteProductsData = getProducts(138)

const Account: ReactFC = () => {
  return (
    <div className='account'>
      <div className='account__row1'>
        <AccountCard
          link={routing.account.profile}
          title='Мачульский Алексей'
          subTitle='Подтвердить аккаунт'
          label='Телефон'
          text='+7 (911) 778-88-88'
          onNotification={() => alert('Уведомления включены')}
          logout
          isBig
        />
        <AccountCard
          link={routing.account.shipping}
          title='Доставки'
          label='Ближайшая'
          text='не ожидается'
          gradient
          icon={<i className='ic_car' />}
          isBig
        />
        <AccountCard
          link={routing.account.sale}
          title='Скидка покупателя'
          label='Процент и сумма выкупа за 2 года'
          sale={{
            size: 25,
            buySale: 100,
            buySum: 100000,
          }}
          isBig
        />
      </div>
      <div className='account__row2'>
        <AccountCard
          link={routing.account.cards}
          title='Мои карты'
          label='добавить карту'
          gradient
        />
        <AccountCard link={routing.account.wallet} title='Баланс' label='0 ₽' />
        <AccountCard
          link={routing.account.cheki}
          title='Чеки'
          label='смотреть'
        />
        <AccountCard
          link={routing.account.brands}
          title='Любимые бренды'
          label='1 бренд'
        />
      </div>
      <div className='account__row3'>
        <AccountCard
          link={routing.account.orders}
          title='Покупки'
          label='всего товаров'
          text={String(buyProductsData.length)}
          products={buyProductsData}
        />
        <AccountCard
          link={routing.account.favorites}
          title='Избранное'
          label='доступно к заказу'
          text={String(
            favoriteProductsData.length > 3
              ? favoriteProductsData.length - 3
              : favoriteProductsData.length
          )}
          products={favoriteProductsData}
        />
      </div>
    </div>
  )
}

export default Account
