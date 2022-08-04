import IconsEnum from '@src/interfaces/icons'
import { IMenuCategory } from '@src/interfaces/menuCategories'

const categories: IMenuCategory[] = [
  {
    id: 0,
    link: '/catalog/zhenshinam',
    title: 'Женщинам',
    icon: IconsEnum.woman,
    img: 'https://images.wbstatic.net/big/new/17300000/17307781-2.jpg',
    subCategories: [
      {
        id: 0,
        title: 'Верхняя одежда',
        link: '/catalog/zhenshinam/verhnaya-odezhda',
      },
      { id: 1, title: 'Джинсы', link: '/catalog/zhenshinam/dzhinsy' },
      {
        id: 2,
        title: 'Платья',
        link: '/catalog/zhenshinam/platya',
        subCategories: [
          { id: 0, title: 'Летние', link: '/catalog/zhenshinam/platya/letnie' },
          {
            id: 1,
            title: 'Вечерние',
            link: '/catalog/zhenshinam/platya/vechernie',
          },
          {
            id: 2,
            title: 'Клубные',
            link: '/catalog/zhenshinam/platya/klubnye',
          },
        ],
      },
    ],
  },
  {
    id: 1,
    link: '/catalog/muzhchinam',
    title: 'Мужчинам',
    icon: IconsEnum.man,
    img: 'https://cdn1.ozone.ru/s3/multimedia-t/c1200/6019627769.jpg',
    subCategories: [
      {
        id: 0,
        title: 'Верхняя одежда',
        link: '/catalog/muzhchinam/verhnaya-odezhda',
      },
    ],
  },
  {
    id: 2,
    link: '/catalog/detyam',
    title: 'Детям',
    icon: IconsEnum.children,
    img: 'https://shop-cdn1.vigbo.tech/shops/48947/products/10376741/images/3-ba568cb2db1f8e3498847646768d4c72.jpg',
  },
  {
    id: 3,
    link: '/catalog/home',
    title: 'Дом',
    icon: IconsEnum.home,
    img: 'https://img.freepik.com/premium-vector/poster-home-sweet-home-cozy-aframe-wooden-house-in-a-dark-forest_546563-340.jpg',
  },
  {
    id: 4,
    link: '/catalog/krasota',
    title: 'Красота',
    icon: IconsEnum.cosmetics,
    img: 'https://cdn.ananasposter.ru/image/cache/catalog/poster/retro/83/12117-1000x830.jpg',
  },
  {
    id: 5,
    link: '/catalog/aksessuary',
    title: 'Аксессуары',
    icon: IconsEnum.bags,
    img: 'https://cdn.w600.comps.canstockphoto.ru/%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%BD%D1%8B%D0%B9-%D0%B0%D0%B2%D1%82%D0%BE-%D0%B0%D0%BA%D1%81%D0%B5%D1%81%D1%81%D1%83%D0%B0%D1%80%D1%8B-liquids-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%8B%D0%B5-%D0%B2-%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%B5-eps_csp59164532.jpg',
  },
  {
    id: 6,
    link: '/catalog/sport',
    title: 'Спорт',
    icon: IconsEnum.sport,
    img: 'https://redpandashop.ru/image/cache/catalog/products/poster/poster-sport-eto-zhizn-3-750x750.jpg',
  },
]

export default categories
