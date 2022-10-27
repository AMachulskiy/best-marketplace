import IProduct from '@src/interfaces/product'

const shippingHelpers = {
  getMinMaxShippingTime: (products: IProduct[]) => {
    const shippingTimes = products.map((product) => product.shipTime)
    const result = {
      min: Math.min(...shippingTimes),
      max: Math.max(...shippingTimes),
    }
    return result
  },
}

export default shippingHelpers
