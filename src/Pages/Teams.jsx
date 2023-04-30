import React from 'react'
import PersonCard from '../Widgets/PersonCard'
import Developer from '../Data/TechTeam'
import Sponsor from '../Data/Sponsors'
import Members from '../Data/Members'

function Teams() {
    return (
        <div className='flex flex-col w-full justify-center align-center top-[3rem]'>

            <div className=' teams w-full justify-center align-center grid lg:grid-cols-4 md:p-24   '>
                {
                    Members.map((teams, index) => {
                        return (
                            <PersonCard name={teams.name} profileLink={teams.profile} image={teams.img} role={teams.role} key={index} />
                        )
                    })

                }
            </div>

        </div>

    )
}

export default Teams
