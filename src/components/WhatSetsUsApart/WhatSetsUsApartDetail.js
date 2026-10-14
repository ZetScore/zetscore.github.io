import { useParams, Link } from "react-router-dom";
import WhatSetsUsApartData from "../../data/WhatSetsUsApart.json";
import { Icon } from "@iconify/react";
import PropTypes from "prop-types";

const getCardTone = (index) => {
  const mobileIsGreen = index % 2 === 0;
  const row = Math.floor(index / 2);
  const col = index % 2;
  const tabletIsGreen = (row + col) % 2 === 0;

  const mobileTone = mobileIsGreen
    ? "bg-custom-green bg-opacity-10"
    : "bg-gray-100";
  const tabletTone = tabletIsGreen
    ? "md:bg-custom-green md:bg-opacity-10"
    : "md:bg-gray-100";

  return `${mobileTone} ${tabletTone}`;
};

// UPDATED: Titles now align left (flex-start) instead of center
const SectionHeading = ({ id, children }) => (
  <div className="flex flex-col items-start mb-8 lg:mb-10">
    <h2
      id={id}
      className="text-3xl font-extrabold text-custom-green sm:text-4xl"
    >
      {children}
    </h2>
    <div className="w-16 h-1 mt-4 rounded-full bg-custom-green"></div>
  </div>
);

SectionHeading.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
};

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
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Feature Not Found
          </h2>
          <Link
            to="/enhanced-features"
            className="inline-flex items-center font-semibold text-custom-green hover:text-teal-700 focus:outline-none"
          >
            Back to Features
          </Link>
        </div>
      </div>
    );
  }

  // Features that provide a `services` array get the card-grid layout
  const services = Array.isArray(feature.services) ? feature.services : [];
  const hasServices = services.length > 0;

  return (
    <>
      <section className="min-h-screen bg-white">
        {/* Hero Section with Feature Image */}
        <div className="relative">
          <img
            src={feature.image}
            alt={feature.title}
            className="object-cover w-full h-72 sm:h-96"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full bg-opacity-20 ring-2 ring-white ring-opacity-40">
                  <Icon icon={feature.icon} className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="px-4 text-3xl font-extrabold text-white sm:px-8 sm:text-4xl lg:px-16 lg:text-5xl">
                {feature.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Content Section - Matched EXACTLY to Homepage Width */}
        <div className="grid items-center grid-cols-12 px-4 mx-auto py-14 lg:py-20">
          <div className="flex flex-col items-start col-span-10 col-start-2">
            
            {/* Removed max-w-4xl from all these sections so they span full width */}
            <div className="w-full space-y-16 lg:space-y-20">
              
              {/* Combined Overview & Detailed Description */}
              <section aria-labelledby="overview-heading" className="w-full">
                <SectionHeading id="overview-heading">Overview</SectionHeading>
                <div className="space-y-6 text-base leading-relaxed text-gray-700 sm:text-lg">
                  <p>{feature.overview}</p>
                  <p>{feature.fullDescription}</p>
                </div>
              </section>

              {/* Verification Services (card grid) or Key Benefits (list) */}
              {hasServices ? (
                <section aria-labelledby="verification-services-heading" className="w-full">
                  <SectionHeading id="verification-services-heading">
                    {feature.servicesHeading || feature.title}
                  </SectionHeading>

                  {/* 3 cards per row on large screens */}
                  <ul className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 sm:gap-6 sm:p-6 lg:p-8 rounded-2xl bg-custom-green bg-opacity-5">
                    {services.map((service, index) => (
                      <li
                        key={service.title}
                        className={`flex flex-col items-center h-full p-6 text-center rounded-xl shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md sm:p-8 ${getCardTone(
                          index
                        )}`}
                      >
                        <div className="flex items-center justify-center w-16 h-16 mb-5 bg-white rounded-full shadow-sm">
                          <Icon
                            icon={service.icon}
                            aria-hidden="true"
                            className="w-8 h-8 text-custom-green"
                          />
                        </div>
                        <h3 className="mb-3 text-lg font-bold text-gray-900 sm:text-xl">
                          {service.title}
                        </h3>
                        <p className="leading-relaxed text-gray-600">
                          {service.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : (
                <section
                  aria-labelledby="key-benefits-heading"
                  className="w-full"
                >
                  <SectionHeading id="key-benefits-heading">
                    Key Benefits
                  </SectionHeading>
                  <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {feature.keyBenefits.map((benefit, index) => {
                      const isLastOdd =
                        feature.keyBenefits.length % 2 === 1 &&
                        index === feature.keyBenefits.length - 1;

                      return (
                        <li
                          key={index}
                          className={`flex items-start gap-3 p-5 bg-white border border-gray-200 rounded-xl shadow-sm ${
                            isLastOdd ? "md:col-span-2" : ""
                          }`}
                        >
                          <Icon
                            icon="material-symbols:check-circle"
                            aria-hidden="true"
                            className="flex-shrink-0 w-6 h-6 mt-0.5 text-custom-green"
                          />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      );
                    })}
                  </ul>
                </section>
              )}

              {/* Challenges We Solve */}
              <section
                aria-labelledby="challenges-heading"
                className="w-full"
              >
                <SectionHeading id="challenges-heading">
                  Challenges We Solve
                </SectionHeading>
                <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                  {feature.challengesSolved}
                </p>
              </section>
            </div>

            {/* Back to Features Link - Still centered as a button, but flush left if you prefer */}
            <div className="flex justify-start mt-14 lg:mt-20">
              <Link
                to="/enhanced-features-section"
                className="inline-flex items-center px-6 py-3 font-semibold transition border rounded-full border-custom-green text-custom-green hover:bg-custom-green hover:bg-opacity-10 hover:text-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-custom-green"
              >
                ← Back to What Sets Us Apart
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatSetsUsApartDetail;