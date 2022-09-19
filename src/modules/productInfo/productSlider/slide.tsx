import { ReactFC } from '@src/interfaces/react'
import React, { useEffect } from 'react'
import { useSwiper } from 'swiper/react'
import ContentZoom from 'react-content-zoom'

import './productSlider.scss'

interface IPreviewSliderProps {
  slide: number
  activeSlide: number
  className?: string
}

const Slide: ReactFC<IPreviewSliderProps> = ({
  slide,
  activeSlide,
  className,
}) => {
  const swiper = useSwiper()

  useEffect(() => {
    swiper.slideTo(activeSlide)
  }, [activeSlide])

  return (
    <div className={className}>
      <ContentZoom
        zoomPercent={350}
        largeImageUrl={`https://placeimg.com/1920/1080/tech?id=${slide}`}
        imageUrl={`https://placeimg.com/1920/1080/tech?id=${slide}`}
      />
    </div>
  )
}

export default Slide
