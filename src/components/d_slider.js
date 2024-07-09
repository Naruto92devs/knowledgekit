"use client"
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './d_slider.css';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const d_slider = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide className="slide-1"></SwiperSlide>
      <SwiperSlide className="slide-2"></SwiperSlide>
      <SwiperSlide className="slide-3"></SwiperSlide>
      <SwiperSlide className="slide-4"></SwiperSlide>
      <SwiperSlide className="slide-5"></SwiperSlide>
      <SwiperSlide className="slide-6"></SwiperSlide>
      <SwiperSlide className="slide-7"></SwiperSlide>
      <SwiperSlide className="slide-8"></SwiperSlide>
      <SwiperSlide className="slide-9"></SwiperSlide>
    </Swiper>  
  )
}

export default d_slider;
