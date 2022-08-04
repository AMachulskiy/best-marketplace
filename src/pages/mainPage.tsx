import React from 'react'
import { ReactFC } from '@src/interfaces/react'

interface IMainPageProps {
  title?: string
}

const MainPage: ReactFC<IMainPageProps> = ({ title }) => {
  return <h1>{title}</h1>
}

export default MainPage
