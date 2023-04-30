import React from 'react'

function Main() {
  return (
    <div>
      <section class="text-black body-font relative top-16">
        <div class="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
          <div class="lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font tracking-wide sm:text-3xl md:text-6xl xl:text-7xl mb-4 font-bold ">Invite friends and sclae your business
            </h1>
            <p class="mb-8 leading-relaxed opacity-50 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, sit ut fermentum posuere platea. Cras turpis adipiscing varius id sed leo morbi. Morbi amet, lectus pretium et vitae duis lectus in lorem. </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-blue-500 py-2 px-4 focus:outline-none hover:bg-opacity-80 rounded text-sm">Book a demo</button>

            </div>
          </div>
          <div id="pattern" class="w-32 sm:w-40 lg:max-w-xl lg:w-full md:w-32 xl:w-5/6 bg-contain bg-no-repeat md:ml-40 xl:mr-16">
            <div class="w-full flex gap-3 justify-center ">

              <img class="object-cover object-center rounded-xl " alt="hero" src="image" />
              <img class="object-cover object-center rounded-xl" alt="hero" src="image" />
            </div>
            <div class="w-full h- flex gap-2 justify-center items-center my-2">

              <img class="object-cover object-center rounded-xl" alt="hero" src="image" />
              <img class="object-cover object-center rounded-xl" alt="hero" src="image" />
              <img class="object-cover object-center rounded-xl" alt="hero" src="image" />
            </div>
            <div class="w-full flex gap-3 justify-center">

              <img class="object-cover object-center rounded-xl" alt="hero" src="image" />
              <img class="object-cover object-center rounded-xl" alt="hero" src="image" />
            </div>
            <div class="w-full flex gap-3 justify-center my-2">
              <img class="object-cover object-center rounded-xl" alt="hero" src="image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Main