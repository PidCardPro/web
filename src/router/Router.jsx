import React from 'react'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import App from '../App';
import { Pricing } from '../screens/Pricing';
import { Home } from '../screens/Home';
import { Contactus } from '../screens/Contactus';
import { Services } from '../screens/Services';
import { About } from '../screens/About';

export const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contactus />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />

    </Routes>
  </BrowserRouter>
  )
}
