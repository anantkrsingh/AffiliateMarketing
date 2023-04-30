import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function CarouselImages() {
  return (
    <div className='pl-8 pr-8'>
       <Carousel
        responsive={responsive}
         dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        showDots={false}
        customTransition 
        infinite={true}
        containerClass="carousel-container"
        swipeable={true}
        draggable={true} autoPlay={true} transitionDuration={1000} partialVisible={true}>
    {slider.map((data,index) =>(
        <img className='h-[80vh] w-full max-[768px]:h-[60vh] max-[590px]:h-[50vh] max-[480px]:h-[40vh] ' src={data.url} alt="" key={index} />
    ))}
   </Carousel>
    </div>
  )
}
