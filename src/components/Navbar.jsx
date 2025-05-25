import React from 'react';
import Logo from '../assets/Logo.png'

export default function Navbar() {
  return (
    <header className="bg-white shadow-md relative z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 relative">
        {/* Logo + Teks */}
        <div className="flex items-center">
          {/* Background bulat putih absolute */}
          <div className="absolute -top-4 -left-2 bg-white rounded-full w-[151px] h-[145px] flex items-center justify-center shadow-xl z-20">
           <a href="/">
           <img
              alt="Yayasan Tunas Anak Mulia logo"
              className="h-[120px] w-[120px] object-contain"
              src={Logo}
            />
           </a>
          </div>

          {/* Geser teks ke kanan karena logo absolute */}
          <div className="ml-[130px]">
            <h1 className="text-2xl font-bold">YAYASAN</h1>
            <p className="text-sm  font-semibold">TUNAS ANAK MULIA</p>
          </div>
        </div>

        {/* Navigasi */}
        <nav className="flex space-x-12 font-montserrat">
          <a className="text-gray-700 hover:text-gray-900 pt-2 font-semibold" href="/lap">
            Little Alley Preschool
          </a>
          <a className="text-gray-700 hover:text-gray-900 pt-2 font-semibold" href="/lac">
            Little Alley CyberSchool
          </a>
          <a className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800" href="/register">
            Join Us
          </a>
        </nav>
      </div>
    </header>
  );
}
