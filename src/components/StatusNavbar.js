import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const StatusNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="sticky top-0 z-50 bg-white shadow-xl text-custom-green inter-character">
      <div className="grid items-center grid-cols-12 px-2 py-2 mx-auto">
        <div className="grid items-center grid-cols-2 col-span-10 col-start-2 md:grid-cols-2">
          {/* Logo is now clickable */}
          <Link to="/" className="flex items-center">
            <img
              className="w-[70px] h-auto"
              src="/ZetScore_Icon.png"
              alt="ZetScore Home"
            />
          </Link>

          {/* Desktop menu */}
          <div className="items-center justify-center hidden space-x-8 md:flex md:justify-end font-primary">
            <Link to="/zetscore-status" className="text-xl font-bold hover:text-opacity-80">
            STATUS
            </Link>
            <Link to="/upcoming-maintainance" className="text-xl font-bold hover:text-opacity-80">
              UPCOMING MAINTENANCE
            </Link>
          </div>

          {/* Mobile hamburger */}
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
            to="/zetscore-status"
            className="block text-xl font-bold hover:text-opacity-80"
            onClick={toggleMenu}
          >
         STATUS
          </Link>
          <Link
            to="/upcoming-maintainance"
            className="block text-xl font-bold hover:text-opacity-80"
            onClick={toggleMenu}
          >
            UPCOMING MAINTENANCE
          </Link>
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

export default StatusNavbar;