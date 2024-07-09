"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from 'swiper/modules';
import "swiper/css";
import 'swiper/swiper-bundle.css';
import "./Banner_slider.css"

const BannerSlider = () => {

    return (
        <div className="container mx-auto w-full h-full p-12">
            <Swiper 
            className="mySwiper"
            // spaceBetween={80}
            rewind={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            pagination={{
            clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            >
                <SwiperSlide 
                className="
                w-full !h-[400px] mb-[40px] 
                !flex !flex-col !items-center !justify-center
                "
                >
                    <h1 className="text-8xl">hello world! 1</h1>
                </SwiperSlide>
                <SwiperSlide 
                className="
                w-full !h-[400px] mb-[40px] 
                !flex !flex-col !items-center !justify-center
                "
                >
                    <h1 className="text-8xl">hello world! 2</h1>
                </SwiperSlide>
                <SwiperSlide 
                className="
                w-full !h-[400px] mb-[40px] 
                !flex !flex-col !items-center !justify-center
                "
                >
                    <h1 className="text-8xl">hello world! 3</h1>
                </SwiperSlide>
                <SwiperSlide 
                className="
                w-full !h-[400px] mb-[40px] 
                !flex !flex-col !items-center !justify-center
                "
                >
                    <h1 className="text-8xl">hello world! 4</h1>
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default BannerSlider;
