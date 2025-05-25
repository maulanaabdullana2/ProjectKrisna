import { useState } from 'react'
import './index.css';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Lap from './pages/Lap/Lap';
import Lac from './pages/Lac/Lac';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/register" element={<Register />} />
           <Route path="/lap" element={<Lap />} />
           <Route path="/lac" element={<Lac />} />
       </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
