import React from "react";
import "./Footer.css"

export default function Footer() {

  return (
    <>
      <footer className=" bg-white h-[30vh] absolute left-0 right-0 mt-24 bg">
        <div className="container mx-auto p-8 bg-white">
          <div className="flex flex-wrap text-left lg:text-left ">
            <div className="w-full lg:w-6/12">
              <h4 className="text-3xl fonat-semibold text-blueGray-700">
                Let's keep in touch!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                Find more about this event on any of these platforms.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6 flex  ">
                <button
                  className="bg-white flex text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 button-grow "
                  type="button"
                >
                  <i className="fab fa-twitter ml-1  rotate_btn"></i>
                </button>
                <button
                  className="bg-white flex text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 button-grow "
                  type="button"
                >
                  <i className="fab fa-facebook-square fb rotate_btn"></i>
                </button>

                <a href="#" 
                  className="bg-white flex justify-self-center text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 button-grow "
                  type="button"
                >
                  <i class="uil uil-instagram ig rotate_btn"></i>
                </a>
              </div>
            </div>
            <div className="w-full lg:w-6/12 ">
              <div className="flex flex-wrap items-top mb-6 justify-center bg-white">
                <div className="w-full lg:w-4/12  ">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Contact
                  </span>
                  <ul className="list-unstyled">

                    <li>

                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href=""
                      ><i className="uil uil-university pr-2" style={{ color: "#EA16C5" }} ></i>
                        Patna

                      </a>
                    </li>
                    <li>
                      <a
                        className="flex text-blueGray-600 hover:text-blueGray-800 font-semibold pb-2 text-sm"
                        href=" "
                      ><i className="uil uil-envelope pr-2" style={{ color: "#EA16C5" }}></i>
                        samratshubham25@gmail.com
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 flex hover:text-blueGray-800 font-semibold pb-2 text-sm"
                        href="https://creative-tim.com/privacy?ref=njs-profile"
                      ><i className="uil uil-phone pr-2" style={{ color: "#EA16C5" }}></i>
                        +91 76541 12892
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © <span id="get-current-year">2023 </span>
                <a
                  href="https://www.creative-tim.com/product/notus-js"
                  className="text-blueGray-500 hover:text-gray-800"
                  target="_blank"
                />
                Techbuzz Digitized
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}