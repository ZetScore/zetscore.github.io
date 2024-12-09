import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="mx-auto px-4 grid grid-cols-12 text-justify inter-character">
        <div className="col-span-10 col-start-2">
          <div className="flex flex-row items-center justify-between space-y-6 md:flex-row md:space-y-0">
            <h2 className="text-lg font-bold uppercase mt-5 font-custom">ZetScore</h2>
            <div className="flex space-x-4">
              <Link
                className="text-white"
                to="https://www.linkedin.com/company/zetscore"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="h-6 w-6 md:h-8 md:w-8" />
              </Link>
              <Link
                className="text-white"
                to="https://twitter.com/zetscore"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="h-6 w-6 md:h-8 md:w-8" />
              </Link>
            </div>
          </div>
          <hr className="my-4 border-white/40" />
          <div className="text-center font-primary">
            <p>
              Powered By &copy; {new Date().getFullYear()} Evolv IZSoftwares Group Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
