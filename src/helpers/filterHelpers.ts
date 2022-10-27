import {
  IProductsFilters,
  IProductsSelectedFilters,
} from '@src/interfaces/filters'
import IProduct from '@src/interfaces/product'
import priceHelpers from './priceHelpers'

const filterHelpers = {
  getFilters: (products: IProduct[]) => {
    const initialFilters: IProductsFilters = {
      colors: [],
      price: {
        from: 1000000,
        to: 0,
      },
      sale: [10, 30, 50, 70],
      brands: [],
    }
    const filtersData = products.reduce(
      (filters, product): IProductsFilters => {
        const productPrice = priceHelpers.getSalePrice(
          product.price,
          product.sale
        )
        const {
          colors,
          price: { from, to },
          sale,
          brands,
        } = filters
        return {
          colors: colors.includes(product.color)
            ? colors
            : [...colors, product.color],
          price: {
            from: from > productPrice ? productPrice : from,
            to: to < productPrice ? productPrice : to,
          },
          sale,
          brands: brands.some((b) => b.value === product.brand.value)
            ? brands
            : [...brands, product.brand],
        }
      },
      initialFilters
    )
    return filtersData
  },
  getFilteredProducts: (
    filter: IProductsSelectedFilters,
    products: IProduct[],
    filterByAll = true
  ): IProduct[] => {
    const {
      colors,
      price: { from, to },
      sale,
      brands,
    } = filter

    const filteredProducts = products.filter((product) => {
      const productPrice = priceHelpers.getSalePrice(
        product.price,
        product.sale
      )
      const haveColor = colors.length ? colors.includes(product.color) : true
      const priceInRange = productPrice >= from && productPrice <= to
      const isSaleRange = product.sale >= sale

      if (filterByAll) {
        const haveBrand = brands.length
          ? brands.some((b) => b.value === product.brand.value)
          : true
        return haveColor && priceInRange && isSaleRange && haveBrand
      }
      return haveColor && priceInRange && isSaleRange
    })
    return filteredProducts
  },
}

export default filterHelpers
