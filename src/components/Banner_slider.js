"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from 'swiper/modules';
import "swiper/css";
import 'swiper/swiper-bundle.css';
import "./Banner_slider.css"

const BannerSlider = ({Banners}) => {

    return (
        <div className=" w-full h-full">
            <Swiper 
            className="mySwiper"
            id="banner_slider"
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

                {Banners.map((Banner, index) => (
                <SwiperSlide key={index} course={Banner} 
                className="
                w-full !h-[400px] mb-[60px] 
                !flex !flex-col !items-start !justify-center gap-2 p-8 pr-[50%]
                "
                style={{background: `url('/images/banner_bg.jpg')`}}>
                    <h1 className="text-4xl text-left font-bold text-white">{Banner.title}</h1>
                    <p className="text-sm font-normal text-white">{Banner.description}</p>
                    <a 
                    className=" p-2 text-sm text-black border-dashed border-2 border-sky-500 border-black rounded-md " 
                    title={Banner.href} href={Banner.href}>{Banner.btn}
                    </a>
                </SwiperSlide>
                ))}
                
            </Swiper>
        </div>
    );
};

export default BannerSlider;
