import { ReactFC } from '@src/interfaces/react'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination, Thumbs } from 'swiper'
import { useAppSelector } from '@src/hooks/redux'
import PreviewSlide from './previewSlide'
import Slide from './slide'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './productSlider.scss'

const ProductSlider: ReactFC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const {
    product: { images },
  } = useAppSelector((state) => state.products)

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
        {images.map((item, idx) => (
          <SwiperSlide key={item}>
            <PreviewSlide
              img={item}
              slideNum={idx}
              changeActiveSlide={setActiveSlide}
            />
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
      {images.map((item) => (
        <SwiperSlide key={item}>
          <Slide
            img={item}
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
