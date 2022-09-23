import React from 'react'
import { ReactFC } from '@src/interfaces/react'
import Account from '@src/modules/account/account'
import AccountNav from '@src/modules/account/accountNav/accountNav'

const AccountPage: ReactFC = () => {
  return (
    <>
      <AccountNav />
      <Account />
    </>
  )
}

export default AccountPage
