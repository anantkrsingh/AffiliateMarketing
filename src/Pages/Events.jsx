import React from 'react';
import Event from '../Data/Events';
import EventCard from '../Widgets/EventCard';
import './PageStyles.css';
import { EffectCards, EffectCoverflow, EffectCreative, EffectCube, EffectFade, EffectFlip } from 'swiper';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/bundle';

export default function Events() {
  return (
    <div className='events w-full justify-center align-center top-12  md:grid-cols-2 md:p-36 max-[678px]:pt-16'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, EffectFlip, EffectCards,EffectCoverflow,EffectCreative,EffectCube ]}
        spaceBetween={30}
        slidesPerView = {1}
        navigation
        
        effect = "coverflow"
        parallax={true}
        scrollbar={{ draggable: true }}
        pagination={{ clickable: true }}
        style={{ width: '100%', height: '100%' }}
        breakpoints={{
            768:{
              slidesPerView:3,
            }
        }} 

      >
        {Event.map((cards, index) => (
         <SwiperSlide key={index}>
         <div role="listitem" key={index}>
            <EventCard title={cards.title} imgUrl={cards.imgUrl} description={cards.description} />
          </div>
       </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
