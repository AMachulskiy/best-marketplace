import { PaymentType } from '@src/interfaces/payment'
import IProduct from '@src/interfaces/product'
import ShippingTypeEnum, { IShipping } from '@src/interfaces/shipping'
import IUser from '@src/interfaces/user'
import apiService from './api'

export interface IUsersService {
  getUser: (id: number) => Promise<IUser>
}

export default class UsersService implements IUsersService {
  private api = apiService

  getUser = async (userID: number): Promise<IUser> => {
    const { data } = await this.api.get(`users/${userID}`)
    return data
  }

  setNotificationStatus = async (
    userID: number,
    isNotification: boolean
  ): Promise<IUser> => {
    const { data } = await this.api.patch(`users/${userID}`, { isNotification })
    return data
  }

  updateBayed = async (userID: number, bayed: IProduct[]): Promise<IUser> => {
    const { data } = await this.api.patch(`users/${userID}`, { bayed })
    return data
  }

  updateFavorite = async (
    userID: number,
    favorite: IProduct[]
  ): Promise<IUser> => {
    const { data } = await this.api.patch(`users/${userID}`, { favorite })
    return data
  }

  updateBasket = async (userID: number, basket: IProduct[]): Promise<IUser> => {
    const { data } = await this.api.patch(`users/${userID}`, { basket })
    return data
  }

  changeShippingData = async (
    userID: number,
    shipping: IShipping
  ): Promise<IUser> => {
    const { data } = await this.api.patch(`users/${userID}`, { shipping })
    return data
  }

  changePaymentType = async (
    userID: number,
    paymentType: PaymentType
  ): Promise<IUser> => {
    const { data } = await this.api.patch(`users/${userID}`, { paymentType })
    return data
  }
}
