import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import generateProducts from '@src/data/products'
import filterHelpers from '@src/helpers/filterHelpers'
import {
  IProductsFilters,
  IProductsSelectedFilters,
} from '@src/interfaces/filters'
import IProduct from '@src/interfaces/product'

const products = generateProducts(50)
const filters = filterHelpers.getFilters(products)

interface IProductsState {
  filters: IProductsFilters
  selectedFilters: IProductsSelectedFilters
  products: IProduct[]
  partFilteredProducts: IProduct[]
  filteredProducts: IProduct[]
}

const initialState: IProductsState = {
  filters,
  selectedFilters: {
    colors: [],
    price: filters.price,
    sale: null,
    brands: [],
  },
  products,
  partFilteredProducts: products,
  filteredProducts: products,
}

const productsStore = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<IProductsSelectedFilters>) => {
      const selectedFilters = action.payload
      state.selectedFilters = selectedFilters
      state.filteredProducts = filterHelpers.getFilteredProducts(
        selectedFilters,
        state.products
      )
      state.partFilteredProducts = filterHelpers.getFilteredProducts(
        selectedFilters,
        state.products,
        false
      )
    },
  },
})

export default productsStore
export const { setFilters } = productsStore.actions
