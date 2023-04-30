import React from 'react'

export default function  EventCard({ title, imgUrl, description }){
  return (
    <div className="w-dyn-item shadow-xl h-[500px]">
      <div className="icon" style={{ display: 'block', marginLeft: '35%', width: '60%' }}>
        <img src={imgUrl} className="img-fluid w-28 h-20 mt-2" alt={title} />
      </div>
      <div className="picture t-2 text-black">
        <h3 className="customer-name-header text-center">{title}</h3>
        <div className="rich-text-block w-richtext">  
          <p id="txtpcs" className=' text-sm mb-6'>{description}</p>
        </div>
      </div>
    </div>
  );
};