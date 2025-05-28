import React, { useState } from 'react';
import Logo from '../assets/Logo.png';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md relative z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 relative">
        <div className="flex items-center">
          <div className="absolute top-1 left-0 z-20 w-[80px] h-[80px] md:top-1 lg:-top-1 lg:left-[-8px] lg:w-[151px] lg:h-[145px]  lg:bg-white md:rounded-full lg:shadow-xl flex items-center justify-center">
            <a href="/">
              <img
                alt="Yayasan Tunas Anak Mulia logo"
                className="h-[60px] w-[70px] lg:h-[120px] lg:w-[120px] object-contain"
                src={Logo}
              />
            </a>
          </div>
          <div className="ml-[60px] md:ml-18 lg:ml-[130px]">
            <h1 className="text-2xl font-bold">YAYASAN</h1>
            <p className="text-sm font-semibold">TUNAS ANAK MULIA</p>
          </div>
        </div>
        <button
          className="lg:hidden z-30"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        <nav
          className={`flex-col md:flex-col lg:flex-row lg:flex md:space-y-6 md:py-6 md:ml-[-33px] md:w-[108%] space-y-4 lg:space-y-0 lg:space-x-12 font-montserrat absolute md:absolute lg:static bg-white lg:bg-transparent top-[100%] left-0 w-full lg:w-auto px-6 lg:px-0 py-6 md:py-0 shadow-md lg:shadow-none transition-all duration-300 ease-in-out ${isOpen ? 'flex' : 'hidden lg:flex'
            }`}
        >
          <a
            className="text-gray-700 md:ml-2 lg:ml-0 hover:text-gray-900 pt-2 font-semibold"
            href="/lap"
          >
            Little Alley Preschool
          </a>
          <a
            className="text-gray-700 md:ml-2 lg:ml-0 hover:text-gray-900 pt-2 font-semibold"
            href="/lac"
          >
            Little Alley CyberSchool
          </a>
          <a
            className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800"
            href="/register"
          >
            Join Us
          </a>
        </nav>
      </div>
    </header>
  );
}
