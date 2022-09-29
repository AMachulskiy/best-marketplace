import IProduct from '@src/interfaces/product'
import SortTypeEnum from '@src/interfaces/sort'
import functionHelpers from './functionHelpers'

const sortHelpers = {
  sortFavoriteProducts: (sortType: SortTypeEnum, products: IProduct[]) => {
    products.sort((a, b) => {
      const dataA = {
        date: a.addToFavoriteDate.valueOf(),
        price: functionHelpers.getSalePrice(a.price, a.sale),
        isAvailable: a.isAvailable,
      }
      const dataB = {
        date: b.addToFavoriteDate.valueOf(),
        price: functionHelpers.getSalePrice(b.price, b.sale),
        isAvailable: b.isAvailable,
      }
      if (sortType === SortTypeEnum.addDateDown) {
        return dataA.date > dataB.date ? -1 : 1
      }
      if (sortType === SortTypeEnum.addDateUp) {
        return dataA.date < dataB.date ? -1 : 1
      }
      if (sortType === SortTypeEnum.priceDown) {
        return dataA.price > dataB.price ? -1 : 1
      }
      if (sortType === SortTypeEnum.priceUp) {
        return dataA.price < dataB.price ? -1 : 1
      }
      if (sortType === SortTypeEnum.available) {
        return dataA.isAvailable > dataB.isAvailable ? -1 : 1
      }
      if (sortType === SortTypeEnum.notAvailable) {
        return dataA.isAvailable < dataB.isAvailable ? -1 : 1
      }
      return 0
    })
    return [...products]
  },
}

export default sortHelpers
