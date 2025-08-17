import { useState } from 'react';

const CustomerSupport = () => {
  const [selectedFeature, setSelectedFeature] = useState('');

  // Define feature support with names and categorized emails
  const featureSupport = [
    {
      name: 'Training',
      email: 'support.training@zetscore.com',
    },
    {
      name: 'Service',
      email: 'support@zetscore.com',
    },
  ];

  // Find the currently selected feature's contact info
  const currentSupportInfo = featureSupport.find(
    (feature) => feature.name === selectedFeature
  );

  return (
    <>
      <div className="flex flex-col items-center justify-center px-4 py-24 bg-custom-green sm:px-6 lg:px-8">
        {/* Main Header: Customer Support */}
        <h1 className="w-full max-w-4xl mb-16 text-6xl font-extrabold leading-tight text-center text-white md:text-7xl">
          Customer Support
        </h1>

        {/* Two-Column Card with Equal Widths */}
        <div className="flex flex-col w-full max-w-5xl bg-white shadow-xl rounded-2xl md:flex-row">
          {/* Left Section: Image */}
          <div className="md:w-1/2">
            <img
              src="/person-office-work-day.jpg"
              alt="Customer Support"
              className="object-cover w-full h-64 rounded-t-2xl md:h-full md:rounded-l-2xl md:rounded-tr-none"
            />
          </div>

          {/* Right Section: Dropdown and Support Details */}
          <div className="flex flex-col justify-center p-12 md:w-1/2 lg:p-12">
            <h2 className="mb-8 text-2xl font-bold text-center text-gray-900">
              Contact Our Support Team
            </h2>

            {/* Dropdown for selecting a feature */}
            <div className="w-full max-w-md mb-2">
              <select
                id="feature-select"
                className="w-full px-2 py-2 text-xl text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-custom-green focus:border-custom-green"
                value={selectedFeature}
                onChange={(e) => setSelectedFeature(e.target.value)}>
                <option value="" disabled>Select a Feature</option>
                {featureSupport.map((feature, index) => (
                  <option key={index} value={feature.name}>
                    {feature.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Display contact information based on selection */}
            {currentSupportInfo ? (
              <div className="mt-8 space-y-5">
                <p className="text-xl text-gray-900">
                  <span className="font-semibold">
                    Contact for {currentSupportInfo.name}
                  </span>
                </p>
               
                <p className="text-l">
                  Email: <a href={`mailto:${currentSupportInfo.email}`}>{currentSupportInfo.email}</a>
                </p>
              </div>
            ) : (
              <p className="text-xl text-center text-gray-700">Please select a feature to see contact details.</p>
            )}

            {/* Online Support Community Button */}
            <div className="flex mt-8">
              <button
                type="button"
                className="inline-flex items-center px-5 py-5 text-xl font-medium text-white transition-colors border border-transparent shadow-sm bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                onClick={() => window.open('https://zetcollect.com/', '_blank')}>
                Join Our Community →
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerSupport;