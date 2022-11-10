import IProduct from '@src/interfaces/product'
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

  hideProductFromBayed = async (
    userID: number,
    bayed: IProduct[]
  ): Promise<IUser> => {
    const { data } = await this.api.patch(`users/${userID}`, { bayed })
    return data
  }
}
