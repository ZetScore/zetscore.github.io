import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Headphones } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAssistanceOpen, setIsAssistanceOpen] = useState(false);
  const dropdownRef = useRef(null);

  const demoRequestUrl = "https://forms.zohopublic.com/evolvizsoftwaresgroup/form/ZetScoreDemoRequest/formperma/Q7VIFiPZauUdJviXd8JnvwE8T27rF2wzbLvFBTWh4Vs";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleAssistanceDropdown = () => setIsAssistanceOpen(!isAssistanceOpen);

  const handleJoinPriorityList = () => {
    window.open(demoRequestUrl, '_blank', 'noopener,noreferrer');
    setIsAssistanceOpen(false);
  };

  const handleSupportClick = () => {
    setIsAssistanceOpen(false);
    if (isMenuOpen) toggleMenu();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsAssistanceOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="sticky top-0 z-50 text-justify bg-white shadow-xl text-custom-green inter-character">
      <div className="grid items-center grid-cols-12 px-2 py-2 mx-auto">
        <div className="grid items-center grid-cols-2 col-span-10 col-start-2 md:grid-cols-2">

          {/* Logo */}
          <div className="flex items-center">
            <img
              className="w-[70px] h-auto"
              src="/ZetScore_Icon.png"
              alt="Company Logo"
            />
          </div>

          {/* Desktop Nav */}
          <div className="items-center justify-end hidden space-x-8 md:flex font-primary">
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
                className="inline-flex items-center gap-2 px-6 py-2 font-bold text-white transition duration-300 rounded-lg bg-custom-green hover:bg-custom-green"
              >
                <Headphones className="w-5 h-5 shrink-0" />
                <span className="text-base">Need Assistance?</span>
              </button>

              {/* DROPDOWN */}
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

      {/* ── Mobile Slide-in Menu ── */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-2xl transition-transform duration-300 ease-in-out z-50 w-3/4 sm:w-72 flex flex-col ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close button */}
        <button
          onClick={toggleMenu}
          className="absolute flex items-center justify-center w-8 h-8 text-xl font-bold transition bg-gray-100 rounded-full top-5 right-5 text-custom-green focus:outline-none hover:bg-gray-200"
          aria-label="Close menu"
        >
          ×
        </button>

        {/* Logo inside drawer */}
        <div className="flex items-center px-6 pt-6 pb-4 border-b border-gray-100">
          <img className="w-12 h-auto" src="/ZetScore_Icon.png" alt="Company Logo" />
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-6 pt-6 space-y-1">
          {[
            { to: "/", label: "Home" },
            { to: "/features", label: "Features" },
            { to: "/pricing", label: "Pricing" },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={toggleMenu}
              className="flex items-center px-3 py-3 text-base font-bold transition rounded-lg text-custom-green hover:bg-gray-50"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Assistance section */}
        <div className="px-6 pt-6 mt-2 border-t border-gray-100">
          <p className="mb-3 text-xs font-semibold tracking-widest text-gray-400 uppercase">
            Need Assistance?
          </p>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => { handleJoinPriorityList(); toggleMenu(); }}
              className="inline-flex items-center justify-center w-full gap-2 px-4 py-3 text-sm font-bold text-white transition rounded-lg bg-custom-green hover:opacity-90"
            >
              <Headphones className="w-4 h-4 shrink-0" />
              <span>Join Priority List</span>
            </button>
            <Link to="/customer-support" className="block" onClick={toggleMenu}>
              <button className="inline-flex items-center justify-center w-full gap-2 px-4 py-3 text-sm font-bold text-white transition bg-gray-500 rounded-lg hover:bg-gray-600">
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
                <span>Contact Support</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-40 md:hidden"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
};

export default Navbar;