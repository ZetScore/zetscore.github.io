import { Link } from "react-router-dom";
import { FaLinkedin, FaYoutube } from "react-icons/fa"; 

const Footer = () => {
  return (
    <footer id="footer" className="font-sans text-gray-700 bg-white border-t border-gray-200">
      {/* Main Footer Content Area (Top Section) */}
      <div className="grid items-center grid-cols-12 px-2 py-2 mx-auto">
        <div className="grid items-start grid-cols-2 col-span-10 col-start-2 gap-16 lg:grid-cols-2">
          <div className="flex flex-col w-full gap-6">
            <img
              className="w-[70px] h-auto"
              src='/ZetScore_Icon.png'
              alt="Company Logo"
            />
            
            <div className="mt-4 text-xl leading-relaxed">
              <p>Need help? We are here to assist you.</p>
            </div>
            
            <div className="flex items-center mt-4 transition duration-300 text-primary hover:text-secondary">
              <Link to="/contact-us" className="mr-2 text-base font-semibold">
                Contact Us
              </Link>
              <svg className="w-6 h-6 transform rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
              </svg>
            </div>
            
            {/* Social Icons (LinkedIn, YouTube) */}
            <div className="flex mt-8 space-x-4">
              <a href="https://www.linkedin.com/showcase/zetcollect/about/" target="_blank" rel="noopener noreferrer" className="p-2 text-black transition duration-300 bg-white border border-black rounded-full hover:bg-gray-100" aria-label="LinkedIn">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@izsoftwares" target="_blank" rel="noopener noreferrer" className="p-2 text-black transition duration-300 bg-white border border-black rounded-full hover:bg-gray-100" aria-label="YouTube">
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Right Columns: Navigation Links */}
          <div className="grid items-start grid-cols-3 col-span-10 col-start-2 gap-2 mt-10">
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              <p className="font-bold">About</p>
              <Link to="https://izsoftwares.com/about" className="text-base text-gray-700 transition duration-200 hover:text-primary">About Us</Link>
              <Link to="/pricing" className="text-base text-gray-700 transition duration-200 hover:text-primary">Pricing</Link>
              <Link to="/contact-us" className="text-base text-gray-700 transition duration-200 hover:text-primary">Contact Us</Link>
            </div>
            
            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              <p className="font-bold">Newsroom</p>
              <Link to="/articles" className="text-base text-gray-700 transition duration-200 hover:text-primary">Articles</Link>
              <Link to="/events-and-webinars" className="text-base text-gray-700 transition duration-200 hover:text-primary">Events & Webinars</Link>
              <div className="h-6"></div> {/* Placeholder to align with other columns */}
            </div>
            
            {/* Column 3 */}
            <div className="flex flex-col gap-4">
              <p className="font-bold">Support</p>
              <Link to="/faq" className="text-base text-gray-700 transition duration-200 hover:text-primary">FAQ</Link>
              <Link to="/customer-support" className="text-base text-gray-700 transition duration-200 hover:text-primary">Customer Support</Link>
              <div className="h-6"></div> {/* Placeholder to align with other columns */}
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer Section (Copyright and Legal Links) */}
      <div className="py-4 text-sm text-gray-600 border-t border-gray-200 bg-gray-50">
        <div className="container items-center px-2 mx-auto space-y-4 text-center max-w-7xl md:flex-row md:space-y-0">
          <div className="items-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
            <span>
              <p>Copyright © {new Date().getFullYear()} Evolv IZSoftwares Group Ltd. All rights reserved.</p>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;