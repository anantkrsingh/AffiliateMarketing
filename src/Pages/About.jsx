import React from 'react'
import  "./About.css"
function About() {

  return (
    <div> 

        <div class="py-16 px-6 bg-white ">  
        <div class="container-about m-auto px-6 text-gray-600 md:px-12 xl:px-6 mt-10 mb-10 rounded-xl">
            <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                <div class="md:5/12  lg:w-5/12  shadow-2xl">
                    <img src="https://amispardha.vercel.app/university.jpg" alt="image" loading="lazy" className=' h-80'/>
                </div>
            <div class="md:7/12 lg:w-6/12">
                <h2 class="text-2xl text-center text-gray-900 font-bold md:text-4xl pt-10 ">AMITY UNIVERSITY, PATNA</h2>
                <p class="mt-6 text-gray-600 tracking-wide font-[Kanit]"> Amity Universtiy is ranked amongst the top 3% Unviersities globally by QS-2018 ranking. Amity University, Patna is a part of 25 years old, leading education group of India, set up witha vision to contribute in nation builing through excellence in higher education. Amity University has more than 150,000 students, pursuing 300 programs across campuses in India and abroad. </p>
                <p class="mt-4 text-gray-600 tracking-wide font-[Kanit] pb-10"> Patna is a part of 25 years old, leading education group of India, set up witha vision to contribute in nation builing through excellence in higher education. Amity University has mor
                e than 150,000 students, pursuing 300 programs across campuses in India and abroad. Amity University has facilitated more than 36,000 on - campus placements in the past years. Amity is research driven University with more than 6000 research Publication, more than 300 on-going research projects, 500 books in diverse area, 1001 patents, 1260 Management case studies in areas of strategic Management, Marketing, Finance, HRM, and Economics etc.</p>
            </div>
            </div>
        </div>

        <br/>

        <div class="container-about m-auto px-6 text-gray-600 md:px-12 xl:px-6 mt-10 rounded-xl p-10">
            <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 ">

                <div class="md:7/12 lg:w-6/12  flex-col ">
                    <img src="https://lh5.googleusercontent.com/Tf0uHV8l4JfDG29oLIaH02HwHb7lp02rm5VZgm90z29xz69a9wJ7NGwjjldAorrauiI=w2400" className='w-[350px] h-[140px] content-center m-auto' alt="" />
                    <p class="mt-6 text-gray-600 tracking-wide font-[Kanit]" font-bold>Long awaited and much anticipated, Amity University Patna Campus brings to you the most dynamic event, Amiphoria 2023.
                    Sports to music to creativity, we have left nothing else to be desired. It is a 3 day extravaganza with equal parts of enthusiasm in organization and footfall.
                    </p>
                    <p class="mt-4 text-gray-600 tracking-wide font-[Kanit]"> Come join us as we celebrate and indulge in the joys of life and competition. This is not just a fest but an expression of liveliness and art forms. The biggest celebration of art in Bihar. Amiphoria comes with a promise to break the monotony, to give you an opportunity to recharge meet and bond with anyone and everyone who shares your passion for any kind of art.</p>
                 </div>
                <div class="md:5/12 lg:w-6/12 shadow-2xl mt-32 ">
                    <img  src="/src/assets/gallery/banner_about _.jpg" alt="image" className=' md:h-96 w-full '  loading="lazy" />
                </div>
            
            </div>
        </div>

        <br />

    </div>
    </div>
  )
}

export default About
