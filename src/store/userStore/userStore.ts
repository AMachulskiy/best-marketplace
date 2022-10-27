import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PaymentType } from '@src/interfaces/payment'
import IProduct from '@src/interfaces/product'
import ShippingTypeEnum from '@src/interfaces/shipping'

interface IUserState {
  data: {
    name: string
    lastname: string
    phone: string
  }
  isNotification: boolean
  shipping: {
    type: ShippingTypeEnum
    address: string
    addresses: string[]
  }
  paymentType: PaymentType
  basket: IProduct[]
  favorite: IProduct[]
  bayed: IProduct[]
  warnings: {
    address: boolean
    payment: boolean
  }
}

const initialState: IUserState = {
  data: {
    name: 'Алексей',
    lastname: 'Мачульский',
    phone: '+7 888 888-88-88',
  },
  isNotification: false,
  shipping: {
    type: ShippingTypeEnum.courier,
    address: null,
    addresses: [
      'Москва, Красная площадь, д. 1',
      'Санкт-Петербург, ул. Петра 1, д. 8',
    ],
  },
  paymentType: null,
  basket: [],
  favorite: [],
  bayed: [],
  warnings: {
    address: false,
    payment: false,
  },
}

const userStore = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeNotificationStatus: (state) => {
      state.isNotification = !state.isNotification
    },
    hideProductFromBayed: (state, action: PayloadAction<number>) => {
      state.bayed = state.bayed.filter(
        (product) => product.id !== action.payload
      )
    },
    toRefund: (state, action: PayloadAction<number>) => {
      state.bayed = state.bayed.map((product) => {
        if (product.id === action.payload) {
          product.isRefund = true
        }
        return product
      })
    },
    addToFavorite: (state, action: PayloadAction<IProduct>) => {
      const haveProductInFavorite = state.favorite.some(
        (product) => product.id === action.payload.id
      )
      if (!haveProductInFavorite) {
        state.favorite.push(action.payload)
      }
    },
    deleteFromFavorite: (state, action: PayloadAction<number>) => {
      state.favorite = state.favorite.filter(
        (product) => product.id !== action.payload
      )
    },
    addToBasket: (state, action: PayloadAction<IProduct>) => {
      const haveProductInBasket = state.basket.some(
        (product) => product.id === action.payload.id
      )
      if (haveProductInBasket) {
        state.basket = state.basket.map((product) => {
          if (product.id === action.payload.id) {
            product.selectedCount++
          }
          return product
        })
      } else {
        state.basket.push({
          ...action.payload,
          selectedCount: 1,
          inOrder: true,
        })
      }
    },
    changeSelectedProductCount: (
      state,
      action: PayloadAction<{ id: number; count: number }>
    ) => {
      state.basket = state.basket.map((product) => {
        if (product.id === action.payload.id) {
          product.selectedCount = action.payload.count
        }
        return product
      })
    },
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
    deleteFromBasket: (state, action: PayloadAction<number>) => {
      state.basket = state.basket.filter(
        (product) => product.id !== action.payload
      )
    },
    changeShippingType: (state, action: PayloadAction<ShippingTypeEnum>) => {
      state.shipping.type = action.payload
    },
    setShippingAddress: (state, action: PayloadAction<string>) => {
      state.shipping.address = action.payload
      state.warnings.address = false
    },
    changePaymentType: (state, action: PayloadAction<PaymentType>) => {
      state.paymentType = action.payload
      state.warnings.payment = false
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
})

export default userStore
export const {
  changeNotificationStatus,
  hideProductFromBayed,
  toRefund,
  addToFavorite,
  deleteFromFavorite,
  addToBasket,
  changeSelectedProductCount,
  changeProductInOrderStatus,
  changeAllInOrderStatus,
  deleteFromBasket,
  changeShippingType,
  setShippingAddress,
  changePaymentType,
  checkWarnings,
  completeOrder,
} = userStore.actions
