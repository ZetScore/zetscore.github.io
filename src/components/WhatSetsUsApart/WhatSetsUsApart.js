import { Link } from 'react-router-dom';
import WhatSetsUsApartData from '../../data/WhatSetsUsApart.json';
import { Icon } from '@iconify/react';

const WhatSetsUsApart = () => {
  return (
    <section id="enhanced-features" className="py-20 bg-gray-100">
      <div className="grid items-center grid-cols-12 px-4 mx-auto">
        <div className="flex flex-col items-center col-span-10 col-start-2">
          {/* Modern Header */}
          <div className="relative mb-16 text-center">
            <h2 className="mb-5 text-4xl font-black text-gray-900 md:text-5xl">
              What Sets <span className="relative">
                Us Apart
                <span className="absolute -bottom-2 left-0 w-1/3 h-1.5 bg-custom-green transform -skew-x-12"></span>
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-700">
              Experience the difference that drives exceptional results
            </p>
          </div>

          {/* Modern Cards Grid */}
          <div className="relative w-full">
            {/* Background decorative element */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent"></div>
            
            <div className="relative z-10 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {WhatSetsUsApartData.map((reason, index) => (
                <div
                  key={index}
                  className="
                    group relative
                    overflow-hidden
                    border border-gray-200
                    rounded-2xl
                    bg-white
                    transition-all duration-500
                    hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)]
                    hover:border-custom-green/30
                  "
                >
                  {/* Hover effect background */}
                  <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-white via-white to-gray-50 group-hover:opacity-100"></div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                    <div className="absolute w-32 h-32 transition-colors duration-500 transform rotate-45 translate-x-1/2 -translate-y-1/2 bg-custom-green/5 group-hover:bg-custom-green/10"></div>
                  </div>
                  
                  <div className="relative z-10 flex flex-col p-8">
                    {/* Icon with modern background */}
                    <div className="relative mb-8">
                      <div className="absolute inset-0 w-16 h-16 transition-transform duration-500 transform rounded-xl bg-custom-green/5 -rotate-3 group-hover:rotate-0"></div>
                      <div className="relative flex items-center justify-center w-16 h-16 shadow-lg rounded-xl bg-gradient-to-br from-custom-green to-custom-green/70">
                        <Icon icon={reason.icon} className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Card Number */}
                    <div className="mb-4 text-sm font-semibold tracking-widest text-gray-400">
                      0{index + 1}
                    </div>
                    
                    {/* Title with underline effect */}
                    <h3 className="mb-4 text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-custom-green">
                      {reason.title}
                      <span className="block w-12 h-0.5 mt-2 bg-gray-300 group-hover:bg-custom-green transition-all duration-500 group-hover:w-16"></span>
                    </h3>
                    
                    {/* Description */}
                    <p className="flex-grow mb-8 leading-relaxed text-gray-600">
                      {reason.description}
                    </p>
                    
                    {/* Modern "Learn more" link */}
                    <div className="pt-6 transition-colors duration-300 border-t border-gray-100 group-hover:border-custom-green/20">
                      <Link
                        to={`/enhanced-features/${reason.id}`}
                        className="inline-flex items-center justify-between w-full font-medium text-gray-700 transition-all duration-300 group-hover:text-custom-green"
                      >
                        <span className="relative">
                          Learn more
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-custom-green transition-all duration-300 group-hover:w-full"></span>
                        </span>
                        <div className="flex items-center justify-center w-10 h-10 transition-all duration-300 bg-gray-100 rounded-full group-hover:bg-custom-green group-hover:text-white">
                          <Icon 
                            icon="material-symbols:arrow-forward-rounded" 
                            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Hover border animation */}
                  <div className="absolute inset-0 transition-all duration-500 border-2 border-transparent pointer-events-none rounded-2xl group-hover:border-custom-green/10"></div>
                </div>
              ))}
            </div>
            
            {/* Grid decorative lines */}
            <div className="absolute top-0 hidden w-px h-full left-1/3 bg-gradient-to-b from-transparent via-gray-200/50 to-transparent lg:block"></div>
            <div className="absolute top-0 hidden w-px h-full left-2/3 bg-gradient-to-b from-transparent via-gray-200/50 to-transparent lg:block"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;