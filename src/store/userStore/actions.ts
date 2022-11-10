import { createAsyncThunk } from '@reduxjs/toolkit'
import IProduct from '@src/interfaces/product'
import UsersService from '@src/services/usersService'
import { AppState } from '../store'

const usersService = new UsersService()

export const getUser = createAsyncThunk('user', (id: number, thunkApi) => {
  const response = usersService.getUser(id)
  return response
})

export const setNotificationStatus = createAsyncThunk(
  'setNotification',
  (data: { id: number; status: boolean }, thunkApi) => {
    const response = usersService.setNotificationStatus(data.id, data.status)
    return response
  }
)

export const hideProductFromBayed = createAsyncThunk(
  'hideProductFromBayed',
  (id: number, thunkApi) => {
    const state = thunkApi.getState() as AppState
    const newBayed = state.user.bayed.filter((product) => product.id !== id)
    const response = usersService.hideProductFromBayed(state.user.id, newBayed)
    return response
  }
)

export const toRefund = createAsyncThunk('toRefund', (id: number, thunkApi) => {
  const state = thunkApi.getState() as AppState
  const newBayed = state.user.bayed.map((product) => {
    if (product.id === id) {
      product = { ...product, isRefund: true }
    }
    return product
  })
  const response = usersService.toRefund(state.user.id, newBayed)
  return response
})

export const addToFavorite = createAsyncThunk(
  'addToFavorite',
  (product: IProduct, thunkApi) => {
    const state = thunkApi.getState() as AppState
    const haveProductInFavorite = state.user.favorite.some(
      (prod) => prod.id === product.id
    )
    if (!haveProductInFavorite) {
      const newFavorite = [...state.user.favorite, product]
      const response = usersService.addToFavorite(state.user.id, newFavorite)
      return response
    }
    return null
  }
)
