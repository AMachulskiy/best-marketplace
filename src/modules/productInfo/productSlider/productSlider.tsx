import { ReactFC } from '@src/interfaces/react'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination, Thumbs } from 'swiper'
import PreviewSlide from './previewSlide'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './productSlider.scss'
import Slide from './slide'

const ProductSlider: ReactFC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const renderPreviewsSlider = () => (
    <div className='previews'>
      <div className='previews-prev'>
        <i className='ic_left-arrow' />
      </div>
      <Swiper
        onSwiper={setThumbsSwiper}
        direction='vertical'
        navigation={{
          prevEl: '.previews-prev',
          nextEl: '.previews-next',
        }}
        slidesPerView={5}
        spaceBetween={8}
        modules={[Autoplay, Pagination, Navigation, Thumbs]}
        className='product-slider previews-slider'
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <SwiperSlide key={item}>
            <PreviewSlide slide={item} changeActiveSlide={setActiveSlide} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='previews-next'>
        <i className='ic_left-arrow' />
      </div>
    </div>
  )

  const renderSlider = () => (
    <Swiper
      thumbs={{ swiper: thumbsSwiper }}
      navigation
      modules={[Autoplay, Pagination, Navigation, Thumbs]}
      className='product-slider'
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
        <SwiperSlide key={item}>
          <Slide
            slide={item}
            activeSlide={activeSlide}
            className='product-slider__zoomimg'
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )

  return (
    <div className='product-slider-wrap'>
      {renderPreviewsSlider()}
      {renderSlider()}
    </div>
  )
}

export default ProductSlider
