import { ReactFC } from '@src/interfaces/react'
import React from 'react'
import { Spinner } from 'react-bootstrap'

const Preloader: ReactFC = () => <Spinner animation='border' />

export default Preloader
