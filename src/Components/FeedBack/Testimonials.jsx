import React from "react";
import {Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import 'swiper/swiper-bundle.min.css'
import "./Testimonials.css";

import { data } from "/home/salma/Desktop/WebNiveau2/FinalProject/glowing-day-app/src/Pages/Data.jsx";

import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination]);

const Testimonials = () => {
  return (
    <section id="testimonials" className="main-testimonials-wrapper" >
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 6,
          slideShadows: true,
        }}
        // pagination={true}
      >
        {data.map((item, key) => (
          <SwiperSlide>
            <img  className="avatar" src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="Paragraphe">{item.testimony}</p>
          </SwiperSlide>
        ))}
      </Swiper>

     
    </section>
  );
};

export default Testimonials;