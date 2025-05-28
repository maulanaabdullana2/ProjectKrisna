import { useState } from 'react'
import './index.css';
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Lap from './pages/Lap';
import Lac from './pages/Lac';

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
