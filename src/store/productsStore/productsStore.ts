import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import generateProducts from '@src/data/products'
import filterHelpers from '@src/helpers/filterHelpers'
import {
  IProductsFilters,
  IProductsSelectedFilters,
} from '@src/interfaces/filters'
import IProduct from '@src/interfaces/product'
import SortTypeEnum from '@src/interfaces/sort'

const products = generateProducts(50)
const filters = filterHelpers.getFilters(products)

interface IProductsState {
  filters: IProductsFilters
  selectedFilters: IProductsSelectedFilters
  product: IProduct
  products: IProduct[]
  partFilteredProducts: IProduct[]
  filteredProducts: IProduct[]
  sortType: SortTypeEnum
  viewType: 'small' | 'big'
}

const initialState: IProductsState = {
  filters,
  selectedFilters: {
    colors: [],
    price: filters.price,
    sale: null,
    brands: [],
  },
  product: null,
  products,
  partFilteredProducts: products,
  filteredProducts: products,
  sortType: SortTypeEnum.popular,
  viewType: 'small',
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
})

export default productsStore
export const { setFilters, changeSortType, changeViewType, setProduct } =
  productsStore.actions
