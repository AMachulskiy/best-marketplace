enum ShippingTypeEnum {
  postomat = 'postomat',
  courier = 'courier',
}

export default ShippingTypeEnum

export enum ShippingTypeValueEnum {
  postomat = 'Пункт выдачи',
  courier = 'Курьер',
}

export interface IShipping {
  type: ShippingTypeEnum
  address: string
  addresses: string[]
}
