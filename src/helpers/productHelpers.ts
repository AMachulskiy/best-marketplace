import IProduct from '@src/interfaces/product'

const productHelpers = {
  haveProduct: (id: number, products: IProduct[]) => {
    return products.some((product) => product.id === id)
  },
}

export default productHelpers
