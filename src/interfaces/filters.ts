import { ColorsEnum } from './product'

enum orderFilterTypeEnum {
  all,
  buy,
  canceled,
  refund,
  storeCanceled,
}

export default orderFilterTypeEnum

export interface IRange {
  from: number
  to: number
}

export interface ICheckRadio {
  id: number
  label: string
  value: string | number
}

export type IColor = keyof typeof ColorsEnum

export interface IProductsFilters {
  colors: IColor[]
  price: IRange
  sale: number[]
  brands: ICheckRadio[]
}

export interface IProductsSelectedFilters {
  colors: IColor[]
  price: IRange
  sale: number
  brands: ICheckRadio[]
}
