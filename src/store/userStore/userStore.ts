import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PaymentType } from '@src/interfaces/payment'
import IProduct from '@src/interfaces/product'
import { IShipping } from '@src/interfaces/shipping'
import IUser from '@src/interfaces/user'
import {
  addToBasket,
  addToFavorite,
  changePaymentType,
  changeSelectedProductCount,
  changeShippingType,
  deleteFromBasket,
  deleteFromFavorite,
  getUser,
  hideProductFromBayed,
  setNotificationStatus,
  setShippingAddress,
  toRefund,
} from './actions'

interface IUserState {
  id: number
  data: {
    name: string
    lastname: string
    phone: string
  }
  isNotification: boolean
  shipping: IShipping
  paymentType: PaymentType
  basket: IProduct[]
  favorite: IProduct[]
  bayed: IProduct[]
  warnings: {
    address: boolean
    payment: boolean
  }
  isLoading: boolean
  isError: boolean
  error: string
  haveData: boolean
}

const initialState: IUserState = {
  id: null,
  data: {
    name: null,
    lastname: null,
    phone: null,
  },
  isNotification: false,
  shipping: {
    type: null,
    address: null,
    addresses: [],
  },
  paymentType: null,
  basket: [],
  favorite: [],
  bayed: [],
  warnings: {
    address: false,
    payment: false,
  },
  isLoading: false,
  isError: false,
  error: '',
  haveData: false,
}

const userStore = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeProductInOrderStatus: (state, action: PayloadAction<number>) => {
      state.basket = state.basket.map((product) => {
        if (product.id === action.payload) {
          product.inOrder = !product.inOrder
        }
        return product
      })
    },
    changeAllInOrderStatus: (state, action: PayloadAction<boolean>) => {
      state.basket = state.basket.map((product) => {
        product.inOrder = action.payload
        return product
      })
    },
    checkWarnings: (state) => {
      state.warnings.address = !state.shipping.address
      state.warnings.payment = !state.warnings.payment
    },
    completeOrder: (state) => {
      const bayedProducts = state.basket.filter((product) => product.inOrder)
      state.basket = state.basket.filter((product) => !product.inOrder)
      state.bayed = [...state.bayed, ...bayedProducts]
    },
  },
  extraReducers: {
    [getUser.pending.type]: (state) => {
      state.isLoading = true
    },
    [getUser.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      const user = action.payload
      state.isLoading = false
      state.haveData = true
      state.id = user.id
      state.data = user.data
      state.isNotification = user.isNotification
      state.shipping = user.shipping
      state.paymentType = user.paymentType
      state.basket = user.basket
      state.favorite = user.favorite
      state.bayed = user.bayed
    },
    [getUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.isError = true
      state.error = action.payload
    },
    [setNotificationStatus.fulfilled.type]: (
      state,
      action: PayloadAction<IUser>
    ) => {
      const user = action.payload
      state.isNotification = user.isNotification
    },
    [hideProductFromBayed.fulfilled.type]: (
      state,
      action: PayloadAction<IUser>
    ) => {
      const user = action.payload
      state.bayed = user.bayed
    },
    [toRefund.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      const user = action.payload
      state.bayed = user.bayed
    },
    [addToFavorite.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      const user = action.payload
      if (user) {
        state.favorite = user.favorite
      }
    },
    [deleteFromFavorite.fulfilled.type]: (
      state,
      action: PayloadAction<IUser>
    ) => {
      const user = action.payload
      if (user) {
        state.favorite = user.favorite
      }
    },
    [addToBasket.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      const user = action.payload
      state.basket = user.basket
    },
    [changeSelectedProductCount.fulfilled.type]: (
      state,
      action: PayloadAction<IUser>
    ) => {
      const user = action.payload
      state.basket = user.basket
    },
    [deleteFromBasket.fulfilled.type]: (
      state,
      action: PayloadAction<IUser>
    ) => {
      const user = action.payload
      state.basket = user.basket
    },
    [changeShippingType.fulfilled.type]: (
      state,
      action: PayloadAction<IUser>
    ) => {
      const user = action.payload
      state.shipping.type = user.shipping.type
    },
    [setShippingAddress.fulfilled.type]: (
      state,
      action: PayloadAction<IUser>
    ) => {
      const user = action.payload
      state.shipping.address = user.shipping.address
      state.warnings.address = false
    },
    [changePaymentType.fulfilled.type]: (
      state,
      action: PayloadAction<IUser>
    ) => {
      const user = action.payload
      state.paymentType = user.paymentType
      state.warnings.payment = false
    },
  },
})

export default userStore
export const {
  changeProductInOrderStatus,
  changeAllInOrderStatus,
  checkWarnings,
  completeOrder,
} = userStore.actions
