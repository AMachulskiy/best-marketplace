import React from 'react'
import { ReactFC } from '@src/interfaces/react'
import { useParams } from 'react-router-dom'

export interface ITemplatePageProps {
  title?: string
}

const TemplatePage: ReactFC<ITemplatePageProps> = ({ title }) => {
  const params = useParams()
  return <h1>{title}</h1>
}

export default TemplatePage
