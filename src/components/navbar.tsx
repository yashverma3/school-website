"use client"

import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-cyan-300 p-5">
      <div className="container mx-auto flex justify-between items-center gap-5">
        <div className="flex items-center flex-shrink-0">
          <img src="/schoolLogo.png" alt="School Logo" className="h-10 w-10 mr-3" />
          <span className="text-xl font-semibold text-gray-800 whitespace-nowrap">School Name</span>
        </div>
        <div className="hidden md:flex space-x-3 md:space-x-4 lg:space-x-6">
          <a href="about" className="text-lg font-semibold text-gray-800 hover:text-black relative group whitespace-nowrap">
            About Us
            <span className="rounded-full block h-1 bg-black absolute bottom-[-4px] left-0 w-0 group-hover:w-full transition-all duration-500"></span>
          </a>
          <a href="academics" className="text-lg font-semibold text-gray-800 hover:text-black relative group whitespace-nowrap">
            Academics
            <span className="rounded-full block h-1 bg-black absolute bottom-[-4px] left-0 w-0 group-hover:w-full transition-all duration-500"></span>
          </a>
          <a href="achievements" className="text-lg font-semibold text-gray-800 hover:text-black relative group whitespace-nowrap">
            Achievements
            <span className="rounded-full block h-1 bg-black absolute bottom-[-4px] left-0 w-0 group-hover:w-full transition-all duration-500"></span>
          </a>
          <a href="gallery" className="text-lg font-semibold text-gray-800 hover:text-black relative group whitespace-nowrap">
            Gallery
            <span className="rounded-full block h-1 bg-black absolute bottom-[-4px] left-0 w-0 group-hover:w-full transition-all duration-500"></span>
          </a>
          <a href="contact" className="text-lg font-semibold text-gray-800 hover:text-black relative group whitespace-nowrap">
            Contact Us
            <span className="rounded-full block h-1 bg-black absolute bottom-[-4px] left-0 w-0 group-hover:w-full transition-all duration-500"></span>
          </a>
          <a href="signup" className="text-lg font-semibold text-gray-800 hover:text-black relative group whitespace-nowrap">
            Sign Up
            <span className="rounded-full block h-1 bg-black absolute bottom-[-4px] left-0 w-0 group-hover:w-full transition-all duration-500"></span>
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col md:hidden mt-2 py-3 px-6 space-y-3 items-end">
          <a href="about" className="text-lg font-semibold text-gray-800 hover:text-black relative group whitespace-nowrap">
            About Us
            <span className="rounded-full block h-1 bg-black absolute bottom-[-4px] left-0 w-0 group-hover:w-full transition-all duration-500"></span>
          </a>
          <a href="academics" className="text-lg font-semibold text-gray-800 hover:text-black relative group whitespace-nowrap">
            Academics
            <span className="rounded-full block h-1 bg-black absolute bottom-[-4px] left-0 w-0 group-hover:w-full transition-all duration-500"></span>
          </a>
          <a href="achievements" className="text-lg font-semibold text-gray-800 hover:text-black relative group whitespace-nowrap">
            Achievements
            <span className="rounded-full block h-1 bg-black absolute bottom-[-4px] left-0 w-0 group-hover:w-full transition-all duration-500"></span>
          </a>
          <a href="gallery" className="text-lg font-semibold text-gray-800 hover:text-black relative group whitespace-nowrap">
            Gallery
            <span className="rounded-full block h-1 bg-black absolute bottom-[-4px] left-0 w-0 group-hover:w-full transition-all duration-500"></span>
          </a>
          <a href="contact" className="text-lg font-semibold text-gray-800 hover:text-black relative group whitespace-nowrap">
            Contact Us
            <span className="rounded-full block h-1 bg-black absolute bottom-[-4px] left-0 w-0 group-hover:w-full transition-all duration-500"></span>
          </a>
          <a href="signup" className="text-lg font-semibold text-gray-800 hover:text-black relative group whitespace-nowrap">
            Sign Up
            <span className="rounded-full block h-1 bg-black absolute bottom-[-4px] left-0 w-0 group-hover:w-full transition-all duration-500"></span>
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar