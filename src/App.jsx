import { useState } from 'react'
import './index.css';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/register" element={<Register />} />
       </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
