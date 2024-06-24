import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Contact } from "../components/Contact";
import Footer from "../components/Footer";
import contact from "../assets/img/portrait-woman-customer-service-worker.jpg";

export const Contactus = () => {
  return (
    <div className="w-screen h-[100%] bg-[#098009]">
      <div>
        <Navbar />
      </div>
      <div className="flex justify-center pt-40 p-4">
        <div className="flex justify-center items-center p-4 rounded-3xl bg-[#1b341b] w-[1000px]">
          <Contact />
        </div>
      </div>
      <div className="pt-40">
        <Footer />
      </div>
    </div>
  );
};
