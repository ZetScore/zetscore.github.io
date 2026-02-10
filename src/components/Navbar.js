import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Headphones } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAssistanceOpen, setIsAssistanceOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  // Demo request form URL
  const demoRequestUrl = "https://forms.zohopublic.com/evolvizsoftwaresgroup/form/ZetScoreDemoRequest/formperma/Q7VIFiPZauUdJviXd8JnvwE8T27rF2wzbLvFBTWh4Vs";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAssistanceDropdown = () => {
    setIsAssistanceOpen(!isAssistanceOpen);
  };

  const handleJoinPriorityList = () => {
    window.open(demoRequestUrl, '_blank', 'noopener,noreferrer');
    setIsAssistanceOpen(false);
  };

  const handleSupportClick = () => {
    setIsAssistanceOpen(false);
    if (isMenuOpen) toggleMenu();
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsAssistanceOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
            
            {/* NEED ASSISTANCE BUTTON WITH DROPDOWN */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={toggleAssistanceDropdown}
                className="flex items-center gap-2 px-6 py-2 font-bold text-white transition duration-300 rounded-lg bg-custom-green hover:bg-custom-green"
              >
                <Headphones className="w-5 h-5" />
                <span>Need Assistance ?</span>
              </button>
              
              {/* DROPDOWN MODAL - IN ROW LAYOUT */}
              {isAssistanceOpen && (
                <div className="absolute right-0 mt-2 w-[600px] bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                  <div className="p-6">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-gray-900">
                        We provide 24/7 support to all our customers
                      </h3>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6">
                      {/* JOIN PRIORITY LIST CARD */}
                      <div className="p-5 border border-gray-200 rounded-lg bg-gray-50">
                        <div className="mb-4">
                          <h4 className="mb-2 text-lg font-bold text-gray-900">Join Priority List</h4>
                          <p className="text-sm text-gray-600">
                            Be among the first to experience our platform. Get early access, 
                            exclusive updates, and priority support.
                          </p>
                        </div>
                        <button 
                          onClick={handleJoinPriorityList}
                          className="w-full px-4 py-3 text-sm font-bold text-white transition duration-300 rounded-lg bg-custom-green hover:bg-custom-green"
                        >
                          Join
                        </button>
                      </div>
                      
                      {/* SUPPORT CARD */}
                      <div className="p-5 border border-gray-200 rounded-lg bg-gray-50">
                        <div className="mb-4">
                          <h4 className="mb-2 text-lg font-bold text-gray-900">Support</h4>
                          <p className="text-sm text-gray-600">
                            Contact our support team for technical assistance, 
                            account questions, or any other inquiries.
                          </p>
                        </div>
                        <Link to="/customer-support">
                          <button 
                            onClick={handleSupportClick}
                            className="w-full px-4 py-3 text-sm font-bold text-white transition duration-300 rounded-lg bg-custom-green hover:bg-custom-green"
                          >
                            Contact Support
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
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
          
          {/* MOBILE NEED ASSISTANCE BUTTON */}
          <div className="w-48">
            <button className="flex items-center justify-center w-full gap-2 px-6 py-3 mb-2 font-bold text-white transition duration-300 rounded-lg bg-custom-green hover:bg-custom-green">
              <Headphones className="w-5 h-5" />
              <span>Need Assistance?</span>
            </button>
            
            {/* MOBILE ASSISTANCE OPTIONS - In row for larger mobile screens */}
            <div className="mt-2 space-y-2 sm:grid sm:grid-cols-2 sm:gap-2 sm:space-y-0">
              <button 
                onClick={handleJoinPriorityList}
                className="w-full px-4 py-2 text-sm font-bold text-white transition duration-300 bg-gray-600 rounded-lg hover:bg-gray-700"
              >
                Join Priority List
              </button>
              
              <Link 
                to="/customer-support" 
                className="block"
                onClick={toggleMenu}
              >
                <button className="w-full px-4 py-2 text-sm font-bold text-white transition duration-300 bg-gray-600 rounded-lg hover:bg-gray-700">
                  Support
                </button>
              </Link>
            </div>
          </div>
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