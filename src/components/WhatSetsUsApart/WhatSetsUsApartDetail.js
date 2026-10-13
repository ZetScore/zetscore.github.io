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

// Shared section title: every section on the page uses this so titles match.
const SectionHeading = ({ id, children }) => (
  <div className="mb-8 text-center lg:mb-10">
    <h2
      id={id}
      className="text-3xl font-extrabold text-custom-green sm:text-4xl"
    >
      {children}
    </h2>
    <div className="w-16 h-1 mx-auto mt-4 rounded-full bg-custom-green"></div>
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

  // Keeps long-form text readable inside the wider page container
  const textWidth = "max-w-4xl mx-auto";

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

        {/* Content Section */}
        <div className="px-4 py-14 mx-auto max-w-6xl sm:px-8 lg:px-16 lg:py-20">
          {/* Logo, Author, Reading Time and Date */}
          <div className="flex flex-col items-center mb-14 text-center lg:mb-20">
            <img
              src="/ZetScore_Icon.png"
              alt="ZetScore Logo"
              className="w-auto h-16"
            />
            <p className="mt-4 text-sm font-medium text-gray-600">
              By {feature.author}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-4 text-sm">
              <span className="px-4 py-1 font-medium text-gray-700 rounded-full bg-custom-green bg-opacity-10">
                {feature.readingTime}
              </span>
              <span className="px-4 py-1 font-medium text-gray-700 rounded-full bg-custom-green bg-opacity-10">
                {feature.date}
              </span>
            </div>
          </div>

          {/* Feature Content */}
          <div className="space-y-16 lg:space-y-20">
            {/* Overview */}
            <section aria-labelledby="overview-heading" className={textWidth}>
              <SectionHeading id="overview-heading">Overview</SectionHeading>
              <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                {feature.overview}
              </p>
            </section>

            {/* Full Description */}
            <section
              aria-labelledby="description-heading"
              className={textWidth}
            >
              <SectionHeading id="description-heading">
                Detailed Description
              </SectionHeading>
              <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                {feature.fullDescription}
              </p>
            </section>

            {/* Verification Services (card grid) or Key Benefits (list) */}
            {hasServices ? (
              <section aria-labelledby="verification-services-heading">
                <SectionHeading id="verification-services-heading">
                  {feature.servicesHeading || feature.title}
                </SectionHeading>

                <ul className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 sm:gap-6 sm:p-6 lg:p-8 rounded-2xl bg-custom-green bg-opacity-5">
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
                className={textWidth}
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
              className={textWidth}
            >
              <SectionHeading id="challenges-heading">
                Challenges We Solve
              </SectionHeading>
              <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                {feature.challengesSolved}
              </p>
            </section>
          </div>

          {/* Back to Features Link */}
          <div className="flex justify-center mt-14 lg:mt-20">
            <Link
              to="/enhanced-features-section"
              className="inline-flex items-center px-6 py-3 font-semibold transition border rounded-full border-custom-green text-custom-green hover:bg-custom-green hover:bg-opacity-10 hover:text-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-custom-green"
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