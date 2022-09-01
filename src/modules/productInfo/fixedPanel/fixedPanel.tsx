import Button from '@src/components/button/button'
import StarsRating from '@src/components/starsRating/starsRating'
import functionHelpers from '@src/helpers/functionHelpers'
import IProduct from '@src/interfaces/product'
import { ReactFC } from '@src/interfaces/react'
import React, { useEffect, useState } from 'react'

import './fixedPanel.scss'

interface IFixedPanelProps {
  product: IProduct
}

const FixedPanel: ReactFC<IFixedPanelProps> = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [inCart, setInCart] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsOpen(window.scrollY > 300)
    })
  }, [])

  return (
    <div className={`fixed-panel ${isOpen ? 'open' : ''}`}>
      <div className='container'>
        <img src={product.cover} alt='Product' className='fixed-panel__img' />
        <div className='fixed-panel__main'>
          <div className='fixed-panel__title'>
            <strong>{product.brand}</strong> /{' '}
            <span>
              {product.name} / {product.ram} / {product.ssd} / {product.color}
            </span>
          </div>
          <div className='fixed-panel__stat'>
            <StarsRating rating={4} />
            <a href='#reviews' className='fixed-panel__reviews-link'>
              8 отзывов
            </a>
          </div>
        </div>

        <div className='fixed-panel__price'>
          <strong>{functionHelpers.getDigitNumber(194993)} ₽</strong>
          <span>{functionHelpers.getDigitNumber(299990)} ₽</span>
        </div>
        <div className='fixed-panel__actions'>
          <Button theme='outline' onClick={() => alert('Спасибо за покупку!')}>
            Купить сейчас
          </Button>
          <Button onClick={() => setInCart(!inCart)}>
            {inCart ? 'Добавлено в корзину' : 'Добавить в корзину'}
          </Button>
          <i
            className={`ic_heart ${isFavorite ? 'ic_like-2' : 'ic_heart'}`}
            onClick={() => setIsFavorite(!isFavorite)}
          />
        </div>
      </div>
    </div>
  )
}

export default FixedPanel
