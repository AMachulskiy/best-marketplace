import IProduct from '@src/interfaces/product'
import SortTypeEnum from '@src/interfaces/sort'
import functionHelpers from './functionHelpers'
import priceHelpers from './priceHelpers'

const sortHelpers = {
  sortFavoriteProducts: (sortType: SortTypeEnum, products: IProduct[]) => {
    products.sort((a, b) => {
      const dataA = {
        date: a.addToFavoriteDate.valueOf(),
        price: priceHelpers.getSalePrice(a.price, a.sale),
        isAvailable: a.isAvailable,
      }
      const dataB = {
        date: b.addToFavoriteDate.valueOf(),
        price: priceHelpers.getSalePrice(b.price, b.sale),
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
  sortProducts: (sortType: SortTypeEnum, products: IProduct[]) => {
    const sortedProducts = [...products].sort((a, b) => {
      const dataA = {
        price: priceHelpers.getSalePrice(a.price, a.sale),
        rating: a.rating,
        soldCount: a.soldCount,
        sale: a.sale,
        updated: a.updated,
      }
      const dataB = {
        price: priceHelpers.getSalePrice(b.price, b.sale),
        rating: b.rating,
        soldCount: b.soldCount,
        sale: b.sale,
        updated: b.updated,
      }
      if (sortType === SortTypeEnum.popular) {
        return dataA.soldCount > dataB.soldCount ? -1 : 1
      }
      if (sortType === SortTypeEnum.rating) {
        if (dataA.rating.total > dataB.rating.total) return -1
        if (dataA.rating.total < dataB.rating.total) return 1
        if (dataA.rating.count > dataB.rating.count) return -1
        if (dataA.rating.count < dataB.rating.count) return 1
        return 0
      }
      if (sortType === SortTypeEnum.priceDown) {
        return dataA.price > dataB.price ? -1 : 1
      }
      if (sortType === SortTypeEnum.priceUp) {
        return dataA.price < dataB.price ? -1 : 1
      }
      if (sortType === SortTypeEnum.sale) {
        return dataA.sale > dataB.sale ? -1 : 1
      }
      if (sortType === SortTypeEnum.update) {
        return dataA.updated > dataB.updated ? -1 : 1
      }
      return 0
    })
    return sortedProducts
  },
}

export default sortHelpers
