import { ReactFC } from '@src/interfaces/react'
import routing from '@src/routes/routes'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@src/hooks/redux'
import { getUser, setNotificationStatus } from '@src/store/userStore/actions'
import Preloader from '@src/components/preloader/preloader'
import AccountCard from './accountCard/accountCard'

import './account.scss'

const Account: ReactFC = () => {
  const dispatch = useAppDispatch()
  const {
    data: { name, lastname, phone },
    id,
    isNotification,
    bayed,
    favorite,
    isLoading,
    haveData,
  } = useAppSelector((state) => state.user)

  useEffect(() => {
    if (!haveData) {
      dispatch(getUser(1))
    }
  }, [haveData])

  if (isLoading || !haveData) return <Preloader />

  return (
    <div className='account'>
      <div className='account__row1'>
        <AccountCard
          link={routing.account.profile}
          title={`${name} ${lastname}`}
          subTitle='Подтвердить аккаунт'
          label='Телефон'
          text={phone}
          onNotification={() =>
            dispatch(
              setNotificationStatus({
                id,
                status: !isNotification,
              })
            )
          }
          isNotification={isNotification}
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
          text={String(bayed.length)}
          products={bayed}
        />
        <AccountCard
          link={routing.account.favorites}
          title='Избранное'
          label='доступно к заказу'
          text={String(
            favorite.filter((product) => product.isAvailable).length
          )}
          products={favorite}
        />
      </div>
    </div>
  )
}

export default Account
