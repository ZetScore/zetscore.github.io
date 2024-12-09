import React, { useState } from 'react';
import ZHighResolutionLogo from '../assets/Logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 z-50 bg-white text-custom-green shadow-xl text-justify inter-character">
      <div className="mx-auto px-2 py-2 grid grid-cols-12 items-center">
        <div className="col-span-10 col-start-2 grid grid-cols-2 md:grid-cols-2 items-center">
          <div className="flex items-center">
            <img
              className="w-[70px] h-auto"
              src={ZHighResolutionLogo}
              alt="Company Logo"
            />
          </div>

          <div className="hidden md:flex justify-center md:justify-end items-center space-x-8 font-primary">
            <a href="#home" className="text-xl font-bold">
              HOME
            </a>
            <a href="#features" className="text-xl font-bold">
              FEATURES
            </a>
            <a href="https://forms.zohopublic.com/evolvizsoftwaresgroup/form/ZetScoreDemoRequest/formperma/Q7VIFiPZauUdJviXd8JnvwE8T27rF2wzbLvFBTWh4Vs">
              <button className="bg-custom-green text-white font-bold px-6 py-2 rounded-lg hover:bg-opacity-90 transition duration-300">
                JOIN PRIORITY LIST
              </button>
            </a>
          </div>

          <div className="md:hidden flex justify-end">
            <button
              onClick={toggleMenu}
              className="text-custom-green focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>
      </div>

     
      <div
        className={`fixed top-0 right-0 h-full bg-white bg-opacity-90 shadow-lg transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } w-1/2 md:w-1/2`}
      >
        <div className="flex flex-col items-center justify-center space-y-6 py-8">
          <a href="#home" className="block text-xl font-bold">
            HOME
          </a>
          <a href="#features" className="block text-xl font-bold">
            FEATURES
          </a>
          <a
            href="https://forms.zohopublic.com/evolvizsoftwaresgroup/form/ZetScoreDemoRequest/formperma/Q7VIFiPZauUdJviXd8JnvwE8T27rF2wzbLvFBTWh4Vs"
            className="block"
          >
            <button className="bg-custom-green text-white font-bold px-6 py-2 rounded-lg hover:bg-opacity-90 transition duration-300">
              JOIN PRIORITY LIST
            </button>
          </a>
        </div>
        <button
          onClick={toggleMenu}
          className="absolute top-4 left-4 text-custom-green focus:outline-none"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Navbar;
