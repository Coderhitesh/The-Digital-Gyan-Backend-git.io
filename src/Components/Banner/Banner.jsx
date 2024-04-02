// import React, { useRef, useState } from 'react'
import './Banner.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination , Autoplay } from 'swiper/modules';

import b1 from './banner-1.jpg'
import b2 from './banner-2.jpg'
import b3 from './banner-3.jpg'
import b4 from './banner-4.jpeg'
import b5 from './banner-5.png'
import b6 from './banner-6.png'
import b7 from './banner-7.jpg'
import b8 from './banner-8.jpg'
import { Link } from 'react-router-dom';

function Banner() {
    const bannerImage = [
        {
            id:1,
            img : b3
        },
        {
            id:2,
            img : b5
        },
        {
            id:3,
            img : b8
        }
    ]
  return (
    <>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2400,
          disableOnInteraction: false,
        }}
        // navigation={true}
        modules={[Pagination , Autoplay]}
        className="mySwiper"
      >
        {
            bannerImage && bannerImage.map((item,index)=>(
                <SwiperSlide key={index}><Link to={'/contact'}><img className='bannerImage' src={item.img} /></Link></SwiperSlide>
            ))
        }
      </Swiper> 
    </>
  )
}

export default Banner
