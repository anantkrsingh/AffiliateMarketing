import React from "react";
import "./About.css";
import aboutImage from "../assets/about.gif";
import Client from "./Client";

function About() {
  return (
    <>
    <div>
      <div class="py-16 px-6 bg-white">
        <div class="container-about m-auto px-6 text-gray-600 md:px-12 xl:px-6 mt-10 mb-10 rounded-xl">
          <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div class="md:5/12 lg:w-5/12 shadow-2xl">
              <img
                src={aboutImage}
                alt="image"
                loading="lazy"
                className=" h-80"
              />
            </div>
            <div class="md:7/12 lg:w-6/12">
              <h2 class="text-2xl text-center text-gray-900 font-bold md:text-4xl pt-10 ">
                About us
              </h2>
              <p class="mt-6 text-gray-600 tracking-wide font-[Kanit]">
                We at TECHBUZZ DIGITIZED, connect the audience to build their
                brand, increasing sales which involves publishing great content
                and analyzing the results. Our agency is the best way to build
                new relationships and boost sales with a carefully planned
                Digital Marketing strategy at a price that doesn't blow a hole
                through your wallet. So don't sit around waiting for something
                to happen and miss out on all of the great opportunities that
                Digital marketing has for your business. Go ahead! It is the
                time to bring your social media presence as a leader
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div>
    <h2 className=" font-sans text-center text-4xl font-bold mb-12" style={{paddingTop: '20px', color:'black'}}>Our Clients</h2>
    <Client/>

    </div>
   </>
  );
}

export default About;
