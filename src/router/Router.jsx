import React from 'react'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import App from '../App';
import { Piercing } from '../screens/Piercing';

export const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/piercing" element={<Piercing />} />

    </Routes>
  </BrowserRouter>
  )
}
