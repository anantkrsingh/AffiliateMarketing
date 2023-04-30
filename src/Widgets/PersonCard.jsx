import React, { useState } from 'react'
import './PersonCardStyle.css'
import LinkedIn from '../Comps/Buttons/LinkedIn';
import { Skeleton } from '@mantine/core';

export default function PersonCard({image , name,role, profileLink}) {
  const [hovered,setHovered] = useState(false);
  return (
    <div  onMouseLeave={()=>{setHovered(false)}} className='flex transition-all delay-100 ease-in-out align-center flex-col person-card-base rounded-xl text-black'>
      <div className=' transition-all delay-100 ease-in-out profile-parent rounded-full border-inherit border-2 p-1 cursor-pointer'>
      
        <div className={` p-5 absolute top-5 z-1 transition-all delay-100 ease-in-out ${hovered ? "translate-y-[-7rem]" :""}` }>{<LinkedIn profile={profileLink} />}</div>   

        <Skeleton className='absolute justify-center' height={80} circle mb="xl" />
        <img onMouseEnter={()=>{setHovered(true)}} src={image} className="rounded-full user-image z-2 absolute " alt="" />  
      
      
      </div>
      <p className='personName'>{name}</p>
      <p className='programme text-sm font-mono'>{role}</p>
    </div>
  )
}
