import { ReactFC } from '@src/interfaces/react'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './mainPageSlider.scss'

const MainPageSlider: ReactFC = () => {
  return (
    <Swiper
      navigation
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      loop
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className='main-page-slider'
    >
      {[1, 2, 3, 4, 5].map((item) => (
        <SwiperSlide key={item} className='main-page-slider__slide'>
          <img
            src={`https://placeimg.com/1920/300/tech?id=${item}`}
            alt='Main page slide'
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default MainPageSlider
