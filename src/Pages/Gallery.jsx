import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import slider from '../Data/Carousel';


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
    <div className='md:pl-36 md:pr-36 max-[678px]:pl-6 max-[678px]:pr-6 relative top-20 '>
       <Carousel
        responsive={responsive}
         dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        showDots={true}
        customTransition='all .8s ease-in-out' 
        infinite={true}
        containerClass="carousel-container"
        swipeable={true}
        draggable={true} autoPlay={true} transitionDuration={800} partialVisible={true}>
    {slider.map((data,index) =>(
        <img className='h-[80vh] w-full max-[768px]:h-[60vh] max-[590px]:h-[50vh] max-[480px]:h-[40vh] rounded-xl' src={data.url} alt="" key={index} />
    ))}
   </Carousel>
    </div>
  )
}
