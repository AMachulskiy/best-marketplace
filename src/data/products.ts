import { ICheckRadio } from '@src/interfaces/filters'
import IProduct from '@src/interfaces/product'
import moment from 'moment'

const brands: ICheckRadio[] = [
  { id: 1, label: 'Dell', value: 'dell' },
  { id: 2, label: 'Lenovo', value: 'lenovo' },
  { id: 3, label: 'HP', value: 'hp' },
  { id: 4, label: 'Apple', value: 'apple' },
  { id: 5, label: 'Acer', value: 'acer' },
  { id: 6, label: 'Asus', value: 'asus' },
  { id: 7, label: 'Huawei', value: 'huawei' },
  { id: 8, label: 'Fujitsu', value: 'fujitsu' },
  { id: 9, label: 'Samsung', value: 'samsung' },
  { id: 10, label: 'Sony', value: 'sony' },
  { id: 11, label: 'Alienware', value: 'alienware' },
  { id: 12, label: 'Gigabyte', value: 'gigabyte' },
]

const generateProducts = (num: number) => {
  const products: IProduct[] = []
  for (let i = 0; i < num; i++) {
    const names = ['IPhone 13 Pro', 'MacBook Pro 16', 'Super TV']
    const colors = ['black', 'blue', 'green', 'yellow', 'red', 'white']
    const nameId = Math.floor(Math.random() * names.length)
    const brandsId = Math.floor(Math.random() * brands.length)
    const colorsId = Math.floor(Math.random() * colors.length)
    const date = moment(Date.now() - Math.floor(Math.random() * 100000000))
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
      addToFavoriteDate: +date,
      selectedColor: 'black',
      selectedCount: 1,
      checked: true,
      orderDate: +date,
      getDate: +date.add(3, 'day'),
      orderStatus: Math.floor(Math.random() * 5),
    }
    products.push(productData)
  }
  return products
}

export default generateProducts
