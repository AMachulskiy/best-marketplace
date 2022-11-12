import { createAsyncThunk } from '@reduxjs/toolkit'
import ProductsService from '@src/services/productsService'

const getProducts = createAsyncThunk('products', (arg, thunkApi) => {
  const productsService = new ProductsService()
  const response = productsService.getProducts()
  return response
})

export default getProducts
