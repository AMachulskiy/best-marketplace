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
    link: '/catalog/obuv',
    title: 'Обувь',
    icon: IconsEnum.obuv,
    img: 'https://vintageposters.ru/wp-content/uploads/2016/10/vintageposters.ru_vp981853_900px.jpg',
    subCategories: [
      {
        id: 0,
        title: 'Женская',
        link: '/catalog/obuv/zhenskaya',
      },
      {
        id: 1,
        title: 'Мужская',
        link: '/catalog/obuv/muzhskaya',
      },
      {
        id: 2,
        title: 'Детская',
        link: '/catalog/obuv/detskaya',
      },
    ],
  },
  {
    id: 2,
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
      {
        id: 1,
        title: 'Джинсы',
        link: '/catalog/muzhchinam/dzhinsy',
      },
      {
        id: 2,
        title: 'Костюмы',
        link: '/catalog/muzhchinam/kostumy',
      },
    ],
  },
  {
    id: 3,
    link: '/catalog/detyam',
    title: 'Детям',
    icon: IconsEnum.children,
    img: 'https://shop-cdn1.vigbo.tech/shops/48947/products/10376741/images/3-ba568cb2db1f8e3498847646768d4c72.jpg',
  },
  {
    id: 4,
    link: '/catalog/home',
    title: 'Дом',
    icon: IconsEnum.home,
    img: 'https://img.freepik.com/premium-vector/poster-home-sweet-home-cozy-aframe-wooden-house-in-a-dark-forest_546563-340.jpg',
    subCategories: [
      {
        id: 0,
        title: 'Гостиная',
        link: '/catalog/home/gostinaya',
      },
      {
        id: 1,
        title: 'Кухня',
        link: '/catalog/home/kuhnya',
      },
      {
        id: 2,
        title: 'Спальня',
        link: '/catalog/home/spalnya',
      },
      {
        id: 3,
        title: 'Ванная',
        link: '/catalog/home/vannaya',
      },
      {
        id: 4,
        title: 'Детская',
        link: '/catalog/home/detskaya',
      },
    ],
  },
  {
    id: 5,
    link: '/catalog/krasota',
    title: 'Красота',
    icon: IconsEnum.cosmetics,
    img: 'https://cdn.ananasposter.ru/image/cache/catalog/poster/retro/83/12117-1000x830.jpg',
    subCategories: [
      {
        id: 0,
        title: 'Аксессуары',
        link: '/catalog/krasota/aksessuary',
      },
      {
        id: 1,
        title: 'Аптечная косметика',
        link: '/catalog/krasota/aptechnaya-kosmetika',
      },
      {
        id: 2,
        title: 'Парфюмерия',
        link: '/catalog/krasota/parfumeriya',
        subCategories: [
          {
            id: 0,
            title: 'Детские ароматы',
            link: '/catalog/krasota/parfumeriya/detskaya',
          },
          {
            id: 1,
            title: 'Женские ароматы',
            link: '/catalog/krasota/parfumeriya/zhenskaya',
          },
          {
            id: 2,
            title: 'Мужские ароматы',
            link: '/catalog/krasota/parfumeriya/muzhskaya',
          },
        ],
      },
    ],
  },
  {
    id: 6,
    link: '/catalog/aksessuary',
    title: 'Аксессуары',
    icon: IconsEnum.bags,
    img: 'https://cdn.w600.comps.canstockphoto.ru/%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%BD%D1%8B%D0%B9-%D0%B0%D0%B2%D1%82%D0%BE-%D0%B0%D0%BA%D1%81%D0%B5%D1%81%D1%81%D1%83%D0%B0%D1%80%D1%8B-liquids-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%8B%D0%B5-%D0%B2-%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%B5-eps_csp59164532.jpg',
    subCategories: [
      {
        id: 0,
        title: 'Аксессуары для волос',
        link: '/catalog/aksessuary/aksessuary-dlya-volos',
      },
      {
        id: 1,
        title: 'Бижутерия',
        link: '/catalog/aksessuary/bizhuteriya',
      },
      {
        id: 2,
        title: 'Головные уборы',
        link: '/catalog/aksessuary/golovhye-ubory',
      },
    ],
  },
  {
    id: 7,
    link: '/catalog/sport',
    title: 'Спорт',
    icon: IconsEnum.sport,
    img: 'https://redpandashop.ru/image/cache/catalog/products/poster/poster-sport-eto-zhizn-3-750x750.jpg',
    subCategories: [
      {
        id: 0,
        title: 'Фитнес',
        link: '/catalog/sport/fitnes',
      },
      {
        id: 1,
        title: 'Велоспорт',
        link: '/catalog/sport/velosport',
        subCategories: [
          {
            id: 0,
            title: 'Велосипеды',
            link: '/catalog/sport/velosport/velosipedy',
          },
          {
            id: 1,
            title: 'Велозапчасти',
            link: '/catalog/sport/velosport/velozapchasti',
          },
          {
            id: 2,
            title: 'Экипировка',
            link: '/catalog/sport/velosport/ekipirovka',
          },
        ],
      },
      {
        id: 2,
        title: 'Охота и рыбалка',
        link: '/catalog/sport/ohota-i-rybalka',
      },
    ],
  },
  {
    id: 8,
    link: '/catalog/elektronika',
    title: 'Электроника',
    icon: IconsEnum.elektronika,
    img: 'https://www.prom-tex.org/upload/iblock/281/2813839da6d5659d4ac11a2a484561f6.jpg',
    subCategories: [
      {
        id: 0,
        title: 'Игровые консоли',
        link: '/catalog/elektronika/igrovye-konsoli',
      },
      {
        id: 1,
        title: 'Компьютеры',
        link: '/catalog/elektronika/komputery',
      },
      {
        id: 2,
        title: 'Смартфоны',
        link: '/catalog/elektronika/smartfony',
      },
    ],
  },
  {
    id: 9,
    link: '/catalog/igrushki',
    title: 'Игрушки',
    icon: IconsEnum.toys,
    img: 'https://static.insales-cdn.com/images/products/1/1687/515999383/large_OT41-24_main.jpg',
    subCategories: [
      {
        id: 0,
        title: 'Для малышей',
        link: '/catalog/igrushki/dlya-malyshei',
      },
      {
        id: 1,
        title: 'Игровые наборы',
        link: '/catalog/igrushki/igrovye-nabory',
      },
      {
        id: 2,
        title: 'Конструкторы',
        link: '/catalog/igrushki/konstruktory',
      },
    ],
  },
  {
    id: 10,
    link: '/catalog/tovary-dlya-vzroslyh',
    title: 'Товары для взрослых',
    icon: IconsEnum.dlyavzroslyh,
    img: 'https://play-lh.googleusercontent.com/s91mCkWJWsUCLoSlh710G2MjC3xa5uZazZ40hksU-goyQwRKG9CzzVyPEIe9m3H7dMg',
  },
  {
    id: 11,
    link: '/catalog/produkty',
    title: 'Продукты',
    icon: IconsEnum.produkty,
    img: 'https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-fresh-organic-produce-fresh-vegetables-poster-background-material-image_147019.jpg',
    subCategories: [
      {
        id: 0,
        title: 'Здоровое питание',
        link: '/catalog/produkty/zdorovoe-pitanie',
      },
      {
        id: 1,
        title: 'Чай и кофе',
        link: '/catalog/produkty/chai-i-kofe',
      },
      {
        id: 2,
        title: 'Детское питание',
        link: '/catalog/produkty/detskoe-pitanie',
      },
    ],
  },
  {
    id: 12,
    link: '/catalog/bytovaya-tehnika',
    title: 'Бытовая техника',
    icon: IconsEnum.bytteh,
    img: 'https://img.freepik.com/premium-vector/home-appliances-set-icons-poster_24908-69673.jpg',
    subCategories: [
      {
        id: 0,
        title: 'Техника для дома',
        link: '/catalog/bytovaya-tehnika/tehnika-dlya-doma',
      },
      {
        id: 1,
        title: 'Техника для кухни',
        link: '/catalog/bytovaya-tehnika/tehnika-dlya-kuhni',
      },
      {
        id: 2,
        title: 'Садовая техника',
        link: '/catalog/bytovaya-tehnika/sadovaya-tehnika',
      },
    ],
  },
]

export default categories
