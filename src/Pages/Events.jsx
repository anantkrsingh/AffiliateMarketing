import React from 'react'
import Event from '../Data/Events'
import EventCard from '../Widgets/EventCard'
import './PageStyles.css'

export default function Events() {
  return (

    <div className=' events min-h-screen w-full justify-center align-center top-12 grid lg:grid-cols-3 md:grid-cols-2 md:p-36 max-[678px]:pt-16 '>

      {
        Event.map((cards, index) => {
          return (
            <EventCard title={cards.title} imgUrl={cards.imgURL} description={cards.description} rule={cards.rule} key={index} />
          )
        })
      }
    </div>
  )
}
