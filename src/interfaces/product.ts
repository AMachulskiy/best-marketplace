import IRating from './rating'

export enum ColorsEnum {
  white = 'Белый',
  black = 'Черный',
  red = 'Красный',
  yellow = 'Желтый',
  green = 'Зеленый',
  blue = 'Синий',
}

interface IProduct {
  id: number
  cover: string
  sale?: number
  rating: IRating
  bage?: string
  credit?: string
  price: number
  name: string
  brand: string
  link: string
  seller: string
  shipTime: number
  color: keyof typeof ColorsEnum
  ram:
    | '2 Гб'
    | '4 Гб'
    | '6 Гб'
    | '8 Гб'
    | '12 Гб'
    | '16 Гб'
    | '32 Гб'
    | '64 Гб'
    | '128 Гб'
    | '256 Гб'
  ssd:
    | '64 Гб'
    | '120 Гб'
    | '128 Гб'
    | '250 Гб'
    | '256 Гб'
    | '480 Гб'
    | '500 Гб'
    | '512 Гб'
    | '1 Тб'
    | '2 Тб'
}

export default IProduct
