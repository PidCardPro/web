import React from "react";
import { Navbar } from "../components/Navbar";
import "../styles/piercing.css";
import card from "../assets/img/Neon1.png";
import Footer from "../components/Footer";
export const Pricing = () => {
  return (
    <div className="content">
      <Navbar />
      <div className="mt-[100px] pt-20">
        <div className="flex justify-center">
          <img src={card} className="w-[400px]" />{" "}
        </div>
        <h1 className="text-center text-3xl mb-20 text-white font-bold">
          {" "}
          Get Your Pidcard
        </h1>
        <div className="flex justify-center ">
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mr-20">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Inividual Card
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <button
              type="button"
              class="text-white bg-[#1A5D1A] hover:bg-[#1b341b] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-[#1A5D1A] dark:hover:bg-[#1b341b] dark:focus:ring-[#1b341b]"
            >
              10$ Card
            </button>
          </div>
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Enterprise card{" "}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <button
              type="button"
              class="text-white bg-[#1A5D1A] hover:bg-[#1b341b] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-[#1A5D1A] dark:hover:bg-[#1b341b] dark:focus:ring-[#1b341b]"
            >
              100$ Plan
            </button>
          </div>

        </div>
        <div className="flex justify-center pt-20" >
          
{/*         <input type="text" value={email} onChange={handleInputChange} />
 */}        </div>
      </div>
      {/*     <Footer/> */}
    </div>
  );
};
