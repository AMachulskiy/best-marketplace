import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import generateProducts from '@src/data/products'
import filterHelpers from '@src/helpers/filterHelpers'
import {
  IProductsFilters,
  IProductsSelectedFilters,
} from '@src/interfaces/filters'
import IProduct from '@src/interfaces/product'
import SortTypeEnum from '@src/interfaces/sort'
import getProducts from './actions'

// const products = generateProducts(50)
// const filters = filterHelpers.getFilters(products)

interface IProductsState {
  filters: IProductsFilters
  selectedFilters: IProductsSelectedFilters
  product: IProduct
  products: IProduct[]
  partFilteredProducts: IProduct[]
  filteredProducts: IProduct[]
  sortType: SortTypeEnum
  viewType: 'small' | 'big'
  isLoading: boolean
  isError: boolean
  error: string
  haveData: boolean
}

const initialState: IProductsState = {
  filters: null,
  selectedFilters: {
    colors: [],
    price: null,
    sale: null,
    brands: [],
  },
  product: null,
  products: [],
  partFilteredProducts: [],
  filteredProducts: [],
  sortType: SortTypeEnum.popular,
  viewType: 'small',
  isLoading: false,
  isError: false,
  error: '',
  haveData: false,
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
    changeSortType: (state, action: PayloadAction<SortTypeEnum>) => {
      state.sortType = action.payload
    },
    changeViewType: (state, action: PayloadAction<'small' | 'big'>) => {
      state.viewType = action.payload
    },
    setProduct: (state, action: PayloadAction<number>) => {
      const productData = state.products.find(
        (product) => product.id === action.payload
      )
      state.product = productData
    },
  },
  extraReducers: {
    [getProducts.pending.type]: (state) => {
      state.isLoading = true
    },
    [getProducts.fulfilled.type]: (
      state,
      action: PayloadAction<IProduct[]>
    ) => {
      const products = action.payload
      const filters = filterHelpers.getFilters(products)
      state.isLoading = false
      state.haveData = true
      state.filters = filters
      state.selectedFilters.price = filters.price
      state.products = products
      state.partFilteredProducts = products
      state.filteredProducts = products
    },
    [getProducts.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.isError = true
      state.error = action.payload
    },
  },
})

export default productsStore
export const { setFilters, changeSortType, changeViewType, setProduct } =
  productsStore.actions
