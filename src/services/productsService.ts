import IProduct from '@src/interfaces/product'
import apiService from './api'

export interface IProductsService {
  getProducts: () => Promise<IProduct[]>
}

export default class ProductsService implements IProductsService {
  private api = apiService

  getProducts = async (): Promise<IProduct[]> => {
    const { data } = await this.api.get('products')
    return data
  }
}
