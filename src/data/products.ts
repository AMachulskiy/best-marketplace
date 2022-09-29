import IProduct from '@src/interfaces/product'
import moment from 'moment'

const generateProducts = (num: number) => {
  const products: IProduct[] = []
  for (let i = 0; i < num; i++) {
    const names = ['IPhone 13 Pro', 'MacBook Pro 16', 'Super TV']
    const brands = ['Apple', 'Samsung', 'Electronica']
    const colors = ['black', 'blue', 'green', 'yellow', 'red', 'white']
    const nameId = Math.floor(Math.random() * names.length)
    const brandsId = Math.floor(Math.random() * brands.length)
    const colorsId = Math.floor(Math.random() * colors.length)
    const productData: IProduct = {
      id: i,
      bage: 'new',
      name: names[nameId],
      brand: brands[brandsId],
      cover: `https://placeimg.com/200/300/tech?id=${i}`,
      price: Math.floor(Math.random() * 1000000),
      link: '/catalog/elektronika/telefony',
      sale: Math.floor(Math.random() * 100),
      color: colors[colorsId] as
        | 'black'
        | 'blue'
        | 'green'
        | 'yellow'
        | 'red'
        | 'white',
      ram: '128 Гб',
      ssd: '1 Тб',
      rating: {
        total: 3,
        count: 33,
      },
      seller: 'STLZ',
      shipTime: 3,
      credit: 'РАССРОЧКА ОТ 0-0-6!',
      isAvailable: !!Math.round(Math.random()),
      addToFavoriteDate: moment(
        Date.now() - Math.floor(Math.random() * 100000000)
      ),
      selectedColor: 'black',
      selectedCount: 1,
      checked: true,
    }
    products.push(productData)
  }
  return products
}

export default generateProducts
