import React from "react";
import banner1 from "../assets/img/banner1.png";
import banner2 from "../assets/img/banner2.png";
export const ContentTwo = () => {
  return (
    <div className="flex justify-center items-center flex-wrap">
      <div className="flex">
        <img className="max-h-[700px]" src={banner2} />
      </div>
      <div >
        <h1 style={{fontSize:"100px"}} className="text-justify text-white font-bold " > Create </h1>
        <h1 style={{fontSize:"70px"}} className="text-justify text-white font-bold -mt-12" > your own profile with </h1>
        <h1 style={{fontSize:"70px"}} className="text-justify text-white font-bold -mt-6" > all information you want to </h1>
        <h1 style={{fontSize:"100px"}} className="text-justify text-white font-bold -mt-12" > Share </h1>

      </div>
    </div>
  );
};