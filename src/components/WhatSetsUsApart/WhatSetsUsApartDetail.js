import { useParams, Link } from 'react-router-dom';
import WhatSetsUsApartData from '../../data/WhatSetsUsApart.json';
import { Icon } from '@iconify/react';

const WhatSetsUsApartDetail = () => {
  const { id } = useParams();

  // Find the feature by ID
  const feature = Array.isArray(WhatSetsUsApartData)
    ? WhatSetsUsApartData.find((item) => item.id === id)
    : null;
  if (!feature) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Feature Not Found</h2>
          <Link
            to="/what-sets-us-apart"
            className="inline-flex items-center font-semibold text-custom-green hover:text-teal-700 focus:outline-none"
          >
            Back to Features
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="min-h-screen bg-white">
        {/* Hero Section with Feature Image */}
        <div className="relative">
          <img
            src={feature.image}
            alt={feature.title}
            className="object-cover w-full h-96"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full bg-opacity-20">
                  <Icon icon={feature.icon} className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="px-4 text-4xl font-extrabold text-white sm:px-8 lg:px-16">
                {feature.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl px-4 py-12 mx-auto sm:px-8 lg:px-16">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src="/ZetScore_Icon.png"
              alt="ZetScore Logo"
              className="w-auto h-16"
            />
          </div>

          {/* Author, Date, and Reading Time */}
          <div className="mb-6 text-center">
            <p className="text-sm text-gray-600">By {feature.author}</p>
            <div className="w-24 mx-auto my-4 border-t border-gray-300"></div>
            <div className="flex justify-center gap-4 text-sm text-gray-500">
              <span>{feature.readingTime}</span>
              <span>|</span>
              <span>{feature.date}</span>
            </div>
          </div>

          {/* Feature Content */}
          <div className="space-y-10">
            {/* Overview */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Overview
              </h2>
              <p className="leading-relaxed text-gray-700">{feature.overview}</p>
            </div>

            {/* Full Description */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Detailed Description
              </h2>
              <p className="leading-relaxed text-gray-700">{feature.fullDescription}</p>
            </div>

            {/* Key Benefits */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Key Benefits
              </h2>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                {feature.keyBenefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>

            {/* Challenges We Solve */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Challenges We Solve
              </h2>
              <p className="leading-relaxed text-gray-700">{feature.challengesSolved}</p>
            </div>
          </div>

          {/* Back to Features Link */}
          <div className="mt-8">
            <Link
              to="/what-sets-us-apart"
              className="inline-flex items-center font-semibold text-custom-green hover:text-teal-700 focus:outline-none"
            >
              ← Back to What Sets Us Apart
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatSetsUsApartDetail;