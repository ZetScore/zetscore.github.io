import { Link } from 'react-router-dom';
import WhatSetsUsApartData from '../../data/WhatSetsUsApart.json';
import { Icon } from '@iconify/react';

const WhatSetsUsApart = () => {
  return (
    <section id="enhanced-features" className="py-16 bg-white">
      <div className="grid items-center grid-cols-12 px-4 mx-auto">
        <div className="flex flex-col items-center col-span-10 col-start-2">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-800 md:text-4xl">
            What Sets Us Apart
          </h2>
          <p className="mb-12 text-lg text-center text-gray-600 max-w-[600px] mx-auto">
            Discover what sets us Apart.
          </p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {WhatSetsUsApartData.map((reason, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-8 text-center bg-white border border-gray-100 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-custom-green/20 hover:scale-[1.02]"
              >
                <div className="flex items-center justify-center w-20 h-20 mb-6 bg-gray-100 rounded-full">
                  <Icon icon={reason.icon} className="w-8 h-8 text-custom-green" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-800">
                  {reason.title}
                </h3>
                <p className="mb-6 text-justify text-gray-600">{reason.description}</p>
                <Link
                  to={`/enhanced-features/${reason.id}`}
                  className="font-medium transition-colors duration-200 text-custom-green hover:text-teal-700 focus:outline-none"
                >
                  Read more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;