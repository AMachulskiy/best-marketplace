import IProduct, { IInformationList } from '@src/interfaces/product'
import { ReactFC } from '@src/interfaces/react'
import React, { useState } from 'react'
import InformationList from './informationList/informationList'
import ProductSlider from './productSlider/productSlider'
import ProductActions from './productActions/productActions'
import FixedPanel from './fixedPanel/fixedPanel'

import './productInfo.scss'
import functionHelpers from '@src/helpers/functionHelpers'

const dataProductInformation: IInformationList[] = [
  {
    title: 'Общие характеристики',
    list: [
      { label: 'Гарантийный срок', value: '1 год' },
      { label: 'Модель', value: 'MacBook Pro 16' },
      { label: 'Операционная система', value: 'macOS' },
    ],
  },
  {
    title: 'Экран',
    list: [
      { label: 'Диагональ экрана', value: '16"' },
      { label: 'Разрешение экрана', value: '3456x2234' },
      { label: 'Тип матрицы', value: 'IPS' },
    ],
  },
  {
    title: 'Процессор',
    list: [
      { label: 'Количество ядер процессора', value: '8' },
      { label: 'Линейка процессоров', value: 'Apple M1' },
      { label: 'Операционная система', value: 'Apple M1 Pro' },
    ],
  },
  {
    title: 'Память',
    list: [{ label: 'Объем оперативной памяти (Гб)', value: '16 ГБ' }],
  },
  {
    title: 'Видеокарта',
    list: [
      { label: 'Видеоадаптер', value: 'Apple M1 Pro 16-core' },
      {
        label: 'Объем памяти видеоадаптера',
        value: 'выделяется из оперативной',
      },
    ],
  },
  {
    title: 'Накопители данных',
    list: [
      { label: 'Объем накопителя HDD', value: 'нет' },
      { label: 'Объем накопителя SSD', value: '512 Гб' },
      { label: 'Тип накопителя', value: 'SSD' },
    ],
  },
]

interface IProductInfoProps {
  product: IProduct
}

const ProductInfo: ReactFC<IProductInfoProps> = ({ product }) => {
  const [isOpenCharacteristics, setIsOpenCharacteristics] = useState(false)
  const [isOpenDesc, setIsOpenDesc] = useState(false)

  return (
    <div className='product'>
      <div className='product__block'>
        <ProductSlider />
        <div>
          <InformationList
            data={[dataProductInformation[0], dataProductInformation[1]]}
          />
          <div
            className='product__link'
            onClick={() => functionHelpers.scrollToElement('characteristics')}
          >
            Все характеристики
          </div>
        </div>
        <div>
          <ProductActions />
        </div>
      </div>
      <h2 className='product__block-title' id='characteristics'>
        О товаре
      </h2>
      <div className='product__block'>
        <div>
          <div
            className={`product__all-characteristics ${
              isOpenCharacteristics ? 'open' : ''
            }`}
          >
            <InformationList data={dataProductInformation} />
          </div>
          <div
            className='product__link'
            onClick={() => setIsOpenCharacteristics(!isOpenCharacteristics)}
          >
            {isOpenCharacteristics
              ? 'Свернуть характеристики'
              : 'Развернуть характеристики'}
          </div>
        </div>
        <div>
          <div className='product__desc-title'>Описание</div>
          <div className={`product__desc-text ${isOpenDesc ? 'open' : ''}`}>
            БЕЗ РУССКОЙ РАСКЛАДКИ КЛАВИАТУРЫ. БЕЗ ПЕРЕХОДНИКА НА EU РОЗЕТКУ.
            Супербыстрые M1 Pro и M1 Max - первые чипы Apple, разработанные
            специально для профессионалов. Они дают феноменальную
            производительность и обеспечивают удивительно долгое время работы
            без подзарядки. Прибавьте к этому потрясающий дисплей Liquid Retina
            XDR, превосходную камеру и звук, а также больше портов для
            профессиональной работы. С этим ноутбуком всё становится
            возможным.Дисплей Liquid Retina XDR с экстремальным динамическим
            диапазоном и поразительной контрастностью. Невероятная детализация в
            темных областях, более глубокий черный, а остальные цвета - яркие
            как никогда.Улучшенная камера FaceTime HD 1080p. Мощная система из
            шести динамиков с поддержкой пространственного аудио. И микрофоны
            студийного уровня. Вас будет отлично видно и слышно.Больше портов
            для профессиональной работы: слот SDXC, порты HDMI и Thunderbolt 4,
            выход для наушников. Иразъем питания MagSafe 3.
          </div>
          <div
            className='product__link'
            onClick={() => setIsOpenDesc(!isOpenDesc)}
          >
            {isOpenDesc ? 'Свернуть описание' : 'Развернуть описание'}
          </div>
        </div>
        <div>
          Продавец <strong>STLZ</strong>
        </div>
        <FixedPanel product={product} />
      </div>
    </div>
  )
}

export default ProductInfo
