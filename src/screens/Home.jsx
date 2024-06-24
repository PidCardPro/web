import React from "react";
import { Navbar } from "../components/Navbar";
import { ContentOne } from "../components/ContentOne";
import { ContentTwo } from "../components/ContentTwo";
import { ContentThree } from "../components/ContentThree";
import { Contact } from "../components/Contact";
import Footer from "../components/Footer";
import image1 from "../assets/img/bg11.png"
import "../styles/home.css"

export const Home = () => {

  const estiloConFondo = {
    height: "800px",
    overflow: "hidden",
  };
  const estiloConFondo1 = {
    backgroundColor: "#098009",
  };
  const estiloConFondo2 = {
    backgroundColor: "#098009",
  };

  return (
    <div className="content">
      <Navbar />
      {/*       <MobileDisplay /> */}
      <div style={estiloConFondo} className="p-4">
        <ContentOne />
      </div>
      <div style={estiloConFondo1} className="p-4">
        <ContentTwo />
      </div>
      <div style={estiloConFondo2} className="p-4">
        <ContentThree />
      </div>
      {/*         <div style={estiloConFondo2}>
            <ContentFour />
          </div> */}
      <div style={estiloConFondo2}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
};
