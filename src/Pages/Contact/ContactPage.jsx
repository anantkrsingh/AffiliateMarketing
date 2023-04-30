import React from 'react'
import Contact from "./Contact";

function ContactPage() {
  return (
    <div className='flex md:flex-row flex-col relative top-20 justify-center bg-[#2369d1] rounded-sm '>
         <iframe className = "mb-12 mr-8 mt-10 max-[768px]:w-full max-[768px]:p-6 max-[768px]:h-[450px] rounded-xl drop md:ml-2 max-[768px]:rounded-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.7804619882154!2d85.05199591494231!3d25.612210383704912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed56457e773c5d%3A0x26f4637f762e3747!2sAmity%20University%2C%20Patna!5e0!3m2!1sen!2sin!4v1679111356101!5m2!1sen!2sin" width="50%" height="550" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <Contact/>

    </div>
  )
}

export default ContactPage
