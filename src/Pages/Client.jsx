import React from "react";
import {
  EffectCards,
  EffectCoverflow,
  EffectCreative,
  EffectCube,
  EffectFade,
  EffectFlip,
} from "swiper";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";
import client1 from "../assets/gallery/client1.jpg";
import client2 from "../assets/gallery/client2.jpg";
import client3 from "../assets/gallery/client3.jpg";
function Client() {
  return (
    <>

    <div className="events w-full justify-center align-center top-12 max-[678px]:pt-16">
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          EffectFade,
          EffectFlip,
          EffectCards,
          EffectCoverflow,
          EffectCreative,
          EffectCube,
        ]}
        spaceBetween={100}
        slidesPerView={1}
        navigation
        parallax={true}
        scrollbar={{ draggable: true }}
        pagination={{ clickable: true }}
        style={{ width: "50%", height: "50%" }}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <img src={client1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={client2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="mt-5" src={client3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  );
}

export default Client;
