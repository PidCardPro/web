import React from 'react'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import App from '../App';
import { Pricing } from '../screens/Pricing';

export const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/pricing" element={<Pricing />} />

    </Routes>
  </BrowserRouter>
  )
}
