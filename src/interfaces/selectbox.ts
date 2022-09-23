export enum SortTypeEnum {
  addDateDown,
  addDateUp,
  priceUp,
  priceDown,
  available,
  notAvailable,
}

interface ISelectboxItem {
  label: string
  value: SortTypeEnum
  icon?: 'up' | 'down'
}

export default ISelectboxItem
