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
            <Link to="/" className="text-xl font-bold hover:text-opacity-80">
              HOME
            </Link>
            <Link to="/features" className="text-xl font-bold hover:text-opacity-80">
              FEATURES
            </Link>
            <Link to="/pricing" className="text-xl font-bold hover:text-opacity-80">
              PRICING
            </Link>
            
            {/* REMOVED LOGIN BUTTON */}
            
            <a href="https://forms.zohopublic.com/evolvizsoftwaresgroup/form/ZetScoreDemoRequest/formperma/Q7VIFiPZauUdJviXd8JnvwE8T27rF2wzbLvFBTWh4Vs">
              <button className="px-6 py-2 font-bold text-white transition duration-300 rounded-lg bg-custom-green hover:bg-custom-green">
                JOIN PRIORITY LIST
              </button>
            </a>
          </div>

          <div className="flex justify-end md:hidden">
            <button
              onClick={toggleMenu}
              className="text-custom-green focus:outline-none hover:text-opacity-80"
              aria-label="Toggle menu"
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

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-white bg-opacity-95 shadow-xl transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } w-3/4 sm:w-1/2`}
      >
        <div className="flex flex-col items-center justify-center h-full py-8 space-y-6">
          <Link 
            to="/" 
            className="block text-xl font-bold hover:text-opacity-80" 
            onClick={toggleMenu}
          >
            HOME
          </Link>
          <Link 
            to="/features" 
            className="block text-xl font-bold hover:text-opacity-80" 
            onClick={toggleMenu}
          >
            FEATURES
          </Link>
          <Link 
            to="/pricing" 
            className="block text-xl font-bold hover:text-opacity-80" 
            onClick={toggleMenu}
          >
            PRICING
          </Link>
          
          {/* REMOVED LOGIN BUTTON */}
          
          <a
            href="https://forms.zohopublic.com/evolvizsoftwaresgroup/form/ZetScoreDemoRequest/formperma/Q7VIFiPZauUdJviXd8JnvwE8T27rF2wzbLvFBTWh4Vs"
            className="block w-48"
            onClick={toggleMenu}
          >
            <button className="w-full px-6 py-3 font-bold text-white transition duration-300 rounded-lg bg-custom-green hover:bg-custom-green">
              JOIN PRIORITY LIST
            </button>
          </a>
        </div>
        
        <button
          onClick={toggleMenu}
          className="absolute text-2xl font-bold top-6 right-6 text-custom-green focus:outline-none hover:text-opacity-80"
          aria-label="Close menu"
        >
          ×
        </button>
      </div>
      
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
};

export default Navbar;