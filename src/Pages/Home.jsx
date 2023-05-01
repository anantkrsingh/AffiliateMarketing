import React from 'react'
import './PageStyles.css'
import { Button } from '@mantine/core'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.gif'


// import Main from './Main'
export default function Home() {
  return (
    <>
      <div className='home flex flex-row  w-screen bg-blue-800 max-[1100px]:h-[124vh]'>
        <div className='flex flex-col justify-center align-center'>
          <div className='text-div max-[1100px]:mt-28 '>
            <p className='w-auto p-10 mr-2 amity-text text-white font-bold text-3xl max-[678px]:text-xl'>Grow Your Business To Next Level</p>
            <p className='amiphoria-text max-[678px]:text-7xl text'>Techbuzz Digitized</p>
            <p className='mb-4 font-[Kanit] text-xl max-[678px]:text-md'>We are team of talented Digital Marketers.</p>
            <button type="button" class=" btn-explore text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 button-grow">
              <Link to={"/contact"}>Contact Us</Link>
            </button>
            <button type="button" class=" btn-explore text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 button-grow">
              <Link to={"/events"}>Brochure</Link>
            </button>
          </div>
        </div>

        <div className='logo'>
          <img src={logo} alt="" />
        </div>
      </div>
    </>

  )
}
