import React from "react";
import { Contact } from "./Contact";

const Footer = () => {
  const gradientColor = "#098009";

  const footerStyle = {
    background: `linear-gradient(${gradientColor}, black)`,
    color: "white",
    padding: "20px",
    textAlign: "center",
    justifyContent:"center",
    display:"flex",
    height:"250px",
    alignItems:"end"
};

  return (
    <footer style={footerStyle}>
      <p>www.PidcardPro.com</p>
    </footer>
  );
};

export default Footer;