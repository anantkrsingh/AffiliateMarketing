import React from 'react'

export default function  EventCard({ title, imgUrl, description }){
  return (
    <div className="w-dyn-item overflow-hidden rounded-lg m-4 shadow-xl h-[550px]" onSelectCapture={"return false"}>
      <div className="icon" style={{ display: 'block', marginLeft: '35%', width: '25%' }}>
        <img src={imgUrl} className="img-fluid w-28 h-20 mt-2" />
      </div>
      <div className="picture t-2 text-black">
        <h3 className="customer-name-header text-center">{title}</h3>
        <div className="rich-text-block w-richtext">  
          <p id="txtpcs" className=' p-4 text-sm mb-6'>{description}</p>
        </div>
      </div>
    </div>
  );
};