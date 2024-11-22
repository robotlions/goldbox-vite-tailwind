
import React, { useState } from "react";

import clsx from "clsx";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { linkName: "Pool of Radiance", href: "/poolofradiance" },
    {
      linkName: "Curse of the Azure Bonds",
      href: "/azurebonds",
    },
    { linkName: "Secret of the Silver Blades", href: "/silverblades" },
    {linkName: "Pools of Darkness", href: "/poolsofdarkness"},
    {linkName: "Binary Tool", href:"/binarytool"},
    {linkName: "About", href: "/about"},
    {linkName: "robotlions.com", href: "https://robotlions.com"}

    
    
  ];

  function LinkMap() {
    return(
    
    links.map((link) => {
    return (
      <li key={link.linkName}>
      <a
        
        href={link.href}
        className={clsx(
          'inline-block rounded hover:border-gray-200 text-white hover:bg-gray-500 py-2 px-4 text-center',
          {
            'bg-gray-700 text-white font-semibold': window.location.pathname === link.href,
          },
        )}
        >
        <p className="hidden md:block">{link.linkName}</p>
      </a>
      </li>
    )})
    
    )};

  return (
    <nav className=" text-white bg-black pt-5 pb-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold">
             <h6>Curse of the Secret Pools!</h6>
            </a>
          </div>

          {/* Hamburger Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="border-gray-400 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white mr-5"
              aria-expanded={isOpen}
            >
              
              {/* Icon */}
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
          <ul className="flex justify-between items-center mx-5 text-base">
                <LinkMap />
                
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a  href="/" className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              Home
            </a>
            <a  href="/poolofradiance" className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              Pool of Radiance
            </a>
            <a  href="/azurebonds" className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              Curse of the Azure Bonds
            </a>
            <a  href="/silverblades" className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              Secret of the Silver Blades
            </a>
            
            <a  href="/poolsofdarkness" className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              Pools of Darkness
            </a>
            <a  href="/about" className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              About
            </a>
            <a  href="https://robotlions.com" className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              robotlions.com
            </a>
            
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
