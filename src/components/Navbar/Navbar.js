import React, { useState } from 'react';
import logo from '../../image/logo.png'

const Navbar = ({handleSectionView}) => {
  const [toggle, setToggle] = useState(false)

  return (
    <header>
      <nav className="bg-gray-800 ">
        <div className="container mx-auto px-3">

          <div className="flex items-center p-3 flex-warp flex-col sm:flex-row">
            <div className="w-full sm:w-auto flex">
              <a href="#home" className="p-2 mr-4 inline-flex items-center">
                <img className="h-8 w-auto" src={logo} alt="logo..." />
              </a>
              <button onClick={() => setToggle(!toggle)} type="button" class="inline-flex items-center justify-center  sm:hidden ml-auto p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span class="sr-only">Open main menu</span>

                <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>

              </button>
            </div>
            <div className={`${toggle ? 'block hover:transition duration-700 ease-in-out' : 'hidden'} sm:block sm:bg-gray-800 top-nav w-full lg:inline-flex lg:flex-grow lg:w-auto`} id="navigation">
              <div className="lg:inline-flex lg:flex-row lg:ml-auto  flex flex-col sm:flex-row  align-center uppercase ">
                <button onClick={() => handleSectionView('about')} className="ml-0 sm:ml-4 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium  mt-2 sm:mt-0" >About</button>
                <button onClick={() => handleSectionView('skill')} className="ml-0 sm:ml-4 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium mt-2 sm:mt-0">Skill</button>
                <a href="#protfolio" className="ml-0 sm:ml-4 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium mt-2 sm:mt-0">Portfolio</a>
                <a href="#contact" className="ml-0 sm:ml-4 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium mt-2 sm:mt-0">Contact</a>
                <a href="#blog" className="ml-0 sm:ml-4 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium mt-2 sm:mt-0">Blog</a>
                <button className="ml-4 sm:ml-4 sm:w-auto w-28 rounded-md px-3 py-2 text-sm   text-gray-300 hover:text-green-400 uppercase  font-medium mt-2 sm:mt-0 ring-2 ring-green-400 ring-opacity-100">Resume</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;