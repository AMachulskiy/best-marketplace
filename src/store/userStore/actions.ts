import { createAsyncThunk } from '@reduxjs/toolkit'
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
