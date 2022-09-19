import { ReactFC } from '@src/interfaces/react'
import React from 'react'
import { useSwiper } from 'swiper/react'

import './productSlider.scss'

interface IPreviewSliderProps {
  slide: number
  changeActiveSlide: (slideId: number) => void
}

const PreviewSlide: ReactFC<IPreviewSliderProps> = ({
  slide,
  changeActiveSlide,
}) => {
  const swiper = useSwiper()

  const changeSlide = () => {
    swiper.slideTo(slide)
    changeActiveSlide(slide - 1)
  }
  return (
    <img
      onMouseEnter={changeSlide}
      src={`https://placeimg.com/1920/1080/tech?id=${slide}`}
      alt='Main page slide'
    />
  )
}

export default PreviewSlide
