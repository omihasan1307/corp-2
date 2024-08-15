"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";

import item1 from "../../../public/Partner-1.png";
import item2 from "../../../public/Partner-4.png";
import Image from "next/image";
const AboutSwiperSection = () => {
  return (
    <div className="bg-darkBlueColor p-8">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper flex max-w-screen-2xl mx-auto"
      >
        <SwiperSlide className="">
          <Image src={item1} alt="item1" width={200} height={200} />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image src={item2} alt="item2" width={200} height={200} />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image src={item2} alt="item2" width={200} height={200} />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image src={item2} alt="item2" width={200} height={200} />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image src={item2} alt="item2" width={200} height={200} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AboutSwiperSection;
