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
    const response = usersService.updateBayed(state.user.id, newBayed)
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
  const response = usersService.updateBayed(state.user.id, newBayed)
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
      const response = usersService.updateFavorite(state.user.id, newFavorite)
      return response
    }
    return null
  }
)

export const deleteFromFavorite = createAsyncThunk(
  'deleteFromFavorite',
  (id: number, thunkApi) => {
    const state = thunkApi.getState() as AppState
    const newFavorite = state.user.favorite.filter(
      (product) => product.id !== id
    )
    const response = usersService.updateFavorite(state.user.id, newFavorite)
    return response
  }
)

export const addToBasket = createAsyncThunk(
  'addToBasket',
  (product: IProduct, thunkApi) => {
    const state = thunkApi.getState() as AppState
    let newBasket: IProduct[] = []
    const haveProductInBasket = state.user.basket.some(
      (prod) => prod.id === product.id
    )
    if (haveProductInBasket) {
      newBasket = state.user.basket.map((prod) => {
        if (prod.id === product.id) {
          prod = { ...prod, selectedCount: prod.selectedCount + 1 }
        }
        return prod
      })
    } else {
      newBasket = [...state.user.basket]
      newBasket.push({
        ...product,
        selectedCount: 1,
        inOrder: true,
      })
    }
    const response = usersService.updateBasket(state.user.id, newBasket)
    return response
  }
)

export const changeSelectedProductCount = createAsyncThunk(
  'changeSelectedProductCount',
  (data: { id: number; count: number }, thunkApi) => {
    const state = thunkApi.getState() as AppState
    const newBasket = state.user.basket.map((product) => {
      if (product.id === data.id) {
        product = {
          ...product,
          selectedCount: data.count,
        }
        product.selectedCount = data.count
      }
      return product
    })
    const response = usersService.updateBasket(state.user.id, newBasket)
    return response
  }
)
