import IProduct from '@src/interfaces/product'

const priceHelpers = {
  getSalePrice: (price: number, sale: number) => {
    const priceWithSale = Math.ceil(price - (price / 100) * sale)
    return priceWithSale
  },
  getOrderInfo: (products: IProduct[]) => {
    const filteredProducts = products.filter((item) => item.inOrder)
    const totalInfo = {
      count: 0,
      salePrice: 0,
      fullPrice: 0,
      saleSize: 0,
    }
    const result = filteredProducts.reduce((total, item) => {
      const totalPrice = item.price * item.selectedCount
      const salePrice =
        total.salePrice + priceHelpers.getSalePrice(totalPrice, item.sale)
      const fullPrice = total.fullPrice + totalPrice
      return {
        count: total.count + item.selectedCount,
        salePrice,
        fullPrice,
        saleSize: fullPrice - salePrice,
      }
    }, totalInfo)
    return result
  },
}

export default priceHelpers
