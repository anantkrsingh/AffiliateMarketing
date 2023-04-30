import React from 'react'
import PersonCard from '../Widgets/PersonCard'
import Developer from '../Data/TechTeam'
import Sponsor from '../Data/Sponsors'
import Members from '../Data/Members'

function Teams() {
  return (
    <div className='flex flex-col w-full justify-center align-center top-[3rem]'>
    {/* <h1 className='text-black font-[Kanit] mt-20 flex justify-center align-center'>
      Core Members
    </h1> */}
    <div className='teams w-full justify-center align-center grid lg:grid-cols-4 md:p-24   '>
        {
            Developer.map((teams,index)=>{
                return(
                    <PersonCard name={teams.name} image={teams.img} role={teams.role} profileLink={teams.profile} key={index}/>
                )
            })
            
        } 
    </div>
    <div className=' teams w-full justify-center align-center grid lg:grid-cols-4 md:p-24   '>
        {
            Members.map((teams,index)=>{
                return(
                    <PersonCard name={teams.name}  profileLink={teams.profile} image={teams.img} role={teams.role} key={index} />
                )
            })
            
        }
    </div>
    <div className='teams w-full justify-center align-center grid lg:grid-cols-4 md:p-24 '>
        {
            Sponsor.map((teams,index)=>{
                return(
                    <PersonCard name={teams.name}  profileLink={teams.profile}  image={teams.img} role={teams.role} key={index}/>
                )
            })
            
        }
    </div>
    </div>
    
  )
}

export default Teams
