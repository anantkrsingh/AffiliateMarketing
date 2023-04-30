import React from 'react'
import image from '../../assets/scope.gif'
export default function Scope() {
  return (
    <div className='flex flex-col relative top-20 items-center h-screen'>
      <p className='font-extrabold text-2xl text-gray-700'>SCOPE OF WORK</p>
      <div className='flex flex-col-reverse sm:flex-row w-screen max-w-screen-lg justify-between'>
        <div className='flex w-full sm:w-screen'>
          <p className='text-black p-6 sm:p-16 ' >
            Akrist Digitized creates an online presence for Advertiser on the popular social media websites as identified in the addendum to this will include setting up of the profile on these committed social media websites with the right information and image representation of the advertiser
            <br />
            <br />
            <br />
            We would get all the content pre-approved from the advertiser before posting on these websites.
            <br />
            <br />
            <br />
            The objective of the SMO is to create brand awareness and engagement which is not limited to increase in the number of Likes or Followers on social media handles of the Advertiser
            <br />
            <br />
            <br />
            The objective of the SMO is to create brand awareness and engagement which is not limited to increase in the number of Likes or Followers on social media handles of the Advertiser
            <br />
            <br />
            
            Creation and integration of any Interactive or High density Facebook Apps e.g. Games etc. and creation of Welcome Page would be separately chargeable and are not part of the package unless specifically mentioned in the Addendum to this SOW
          </p>
        </div>
        <div className='p-6 sm:p-2 mt-12 flex w-full sm:w-full h-[78%]'>
          <img src={image} alt="" className="hidden sm:block" />
        </div>
      </div>
    </div>
  )
}
