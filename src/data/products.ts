import functionHelpers from '@src/helpers/functionHelpers'
import { ICheckRadio } from '@src/interfaces/filters'
import IProduct, { ColorsEnum } from '@src/interfaces/product'
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

const generateImages = (num: number) => {
  const images = []
  for (let i = 0; i < num; i++) {
    images.push(`https://placeimg.com/200/300/tech?id=${i}`)
  }
  return images
}

const generateProducts = (num: number) => {
  const products: IProduct[] = []
  for (let i = 0; i < num; i++) {
    const names = ['IPhone 13 Pro', 'MacBook Pro 16', 'Super TV']
    const colors = ['black', 'blue', 'green', 'yellow', 'red', 'white']
    const ratingStars: (1 | 2 | 3 | 4 | 5)[] = [1, 2, 3, 4, 5]
    const nameId = functionHelpers.getRandomNumber(names.length)
    const brandsId = functionHelpers.getRandomNumber(brands.length)
    const colorsId = functionHelpers.getRandomNumber(colors.length)
    const date = moment(Date.now() - functionHelpers.getRandomMilliseconds(10))
    const ratingTotalId = functionHelpers.getRandomNumber(ratingStars.length)
    const imagesCount = functionHelpers.getRandomNumberInRange(1, 10)
    const images = generateImages(imagesCount)
    const productData: IProduct = {
      id: i,
      bage: 'new',
      name: names[nameId],
      brand: brands[brandsId],
      cover: `https://placeimg.com/200/300/tech?id=${i}`,
      price: functionHelpers.getRandomNumber(1000000),
      link: '/catalog/elektronika/telefony',
      sale: functionHelpers.getRandomNumber(100),
      color: colors[colorsId] as keyof typeof ColorsEnum,
      ram: '128 Гб',
      ssd: '1 Тб',
      rating: {
        total: ratingStars[ratingTotalId],
        count: functionHelpers.getRandomNumber(100),
      },
      seller: 'STLZ',
      shipTime: Math.ceil(Math.random() * 5),
      credit: 'РАССРОЧКА ОТ 0-0-6!',
      isAvailable: !!Math.round(Math.random()),
      addToFavoriteDate: +date,
      selectedColor: 'black',
      orderDate: +date,
      getDate: +date.add(3, 'day'),
      orderStatus: functionHelpers.getRandomNumber(5),
      soldCount: functionHelpers.getRandomNumber(100),
      updated: +date - functionHelpers.getRandomMilliseconds(10),
      images,
    }
    products.push(productData)
  }
  return products
}

export default generateProducts
