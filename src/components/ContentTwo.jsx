import React from "react";
import banner1 from "../assets/img/banner1.png";
import banner2 from "../assets/img/banner2.png";
import phoneScreen from "../assets/img/phone_screen_mockup2.png";

export const ContentTwo = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex justify-center items-center flex-wrap">
        <div className="flex">
          <img className="max-h-[700px]" src={banner2} />
        </div>
        <div className="p-8 bg-[#1A5D1A] rounded-3xl shadow-xl text-left">
          <h1 className=" text-white font-bold text-6xl "> Create </h1>
          <h1 className="text-white font-bold text-6xl">
            {" "}
            your own profile with{" "}
          </h1>
          <h1 className=" text-white font-bold  text-6xl">
            {" "}
            all information you want to{" "}
          </h1>
          <h1 className=" text-white font-bold  text-6xl"> Share </h1>
        </div>
      </div>
      <div className="flex justify-center items-center flex-wrap pt-10 ">
        <div className="p-8 bg-[#1A5D1A] rounded-3xl shadow-xl text-left flex flex-col justify-end">
          <h1 className=" text-white font-bold text-6xl "> Create </h1>
          <h1 className="text-white font-bold text-6xl">
            {" "}
            your own profile with{" "}
          </h1>
          <h1 className=" text-white font-bold  text-6xl">
            {" "}
            all information you want to{" "}
          </h1>
          <h1 className=" text-white font-bold  text-6xl"> Share </h1>
        </div>
        <div className="flex pt-10">
          <img className="max-w-[800px]" src={phoneScreen} />
        </div>
      </div>

    </div>
  );
};
