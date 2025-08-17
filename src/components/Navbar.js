import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 z-50 text-justify bg-white shadow-xl text-custom-green inter-character">
      <div className="grid items-center grid-cols-12 px-2 py-2 mx-auto">
        <div className="grid items-center grid-cols-2 col-span-10 col-start-2 md:grid-cols-2">
          <div className="flex items-center">
            <img
              className="w-[70px] h-auto"
              src="/ZetScore_Icon.png"
              alt="Company Logo"
            />
          </div>

          <div className="items-center justify-center hidden space-x-8 md:flex md:justify-end font-primary">
            <Link to="/" className="text-xl font-bold">
              HOME
            </Link>
            <Link to="#features" className="text-xl font-bold">
              FEATURES
            </Link>
            <Link to="/pricing" className="text-xl font-bold">
              PRICING
            </Link>
            <a href="https://forms.zohopublic.com/evolvizsoftwaresgroup/form/ZetScoreDemoRequest/formperma/Q7VIFiPZauUdJviXd8JnvwE8T27rF2wzbLvFBTWh4Vs">
              <button className="px-6 py-2 font-bold text-white transition duration-300 rounded-lg bg-custom-green hover:bg-opacity-90">
                JOIN PRIORITY LIST
              </button>
            </a>
          </div>

          <div className="flex justify-end md:hidden">
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
        <div className="flex flex-col items-center justify-center py-8 space-y-6">
          <Link to="/" className="block text-xl font-bold" onClick={toggleMenu}>
            HOME
          </Link>
          <Link to="#features" className="block text-xl font-bold" onClick={toggleMenu}>
            FEATURES
          </Link>
          <Link to="/pricing" className="block text-xl font-bold" onClick={toggleMenu}>
            PRICING
          </Link>
          <a
            href="https://forms.zohopublic.com/evolvizsoftwaresgroup/form/ZetScoreDemoRequest/formperma/Q7VIFiPZauUdJviXd8JnvwE8T27rF2wzbLvFBTWh4Vs"
            className="block"
          >
            <button className="px-6 py-2 font-bold text-white transition duration-300 rounded-lg bg-custom-green hover:bg-opacity-90">
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