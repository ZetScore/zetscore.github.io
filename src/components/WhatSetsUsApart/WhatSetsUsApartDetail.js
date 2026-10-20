import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useParams, Link } from "react-router-dom";
import WhatSetsUsApartData from "../../data/WhatSetsUsApart.json";
import { Icon } from "@iconify/react";
import PropTypes from "prop-types";

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

const serviceShape = PropTypes.shape({
  icon: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
});

/**
 * Service card. Grey by default, light green on hover.
 *
 * - With `service.image`: image sits on top, title + arrow underneath.
 * - Without an image: a solid icon badge sits top-left, the title is anchored
 *   to the bottom-left, and the arrow sits top-right. Cards stretch to the
 *   tallest card in their row, so sizing stays consistent.
 */
const ServiceCard = ({ service, onOpen }) => {
  const arrow = (
    <span className="flex items-center justify-center flex-shrink-0 w-9 h-9 text-gray-500 transition-all duration-300 bg-white rounded-full group-hover:bg-custom-green group-hover:text-white">
      <Icon
        icon="material-symbols:arrow-outward-rounded"
        aria-hidden="true"
        className="w-5 h-5"
      />
    </span>
  );

  return (
    <button
      type="button"
      onClick={() => onOpen(service)}
      aria-haspopup="dialog"
      aria-label={`View details: ${service.title}`}
      className="group flex flex-col w-full h-full p-6 text-left transition-all duration-300 bg-gray-200 min-h-[15rem] rounded-2xl hover:-translate-y-1 hover:bg-custom-green hover:bg-opacity-20 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-custom-green focus-visible:ring-offset-2"
    >
      {service.image ? (
        <>
          <div className="h-36 mb-5 overflow-hidden bg-white rounded-xl">
            <img
              src={service.image}
              alt=""
              loading="lazy"
              className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
          <div className="flex items-end justify-between gap-3 mt-auto">
            <h3 className="text-lg font-bold leading-snug text-gray-900">
              {service.title}
            </h3>
            {arrow}
          </div>
        </>
      ) : (
        <>
          <div className="flex items-start justify-between">
            <span className="flex items-center justify-center w-14 h-14 text-custom-green transition-all duration-300 bg-white shadow-sm rounded-2xl group-hover:bg-custom-green group-hover:text-white">
              <Icon
                icon={service.icon}
                aria-hidden="true"
                className="w-7 h-7"
              />
            </span>
            {arrow}
          </div>
          <h3 className="pt-10 mt-auto text-lg font-bold leading-snug text-gray-900">
            {service.title}
          </h3>
        </>
      )}
    </button>
  );
};

ServiceCard.propTypes = {
  service: serviceShape.isRequired,
  onOpen: PropTypes.func.isRequired,
};

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

// Modal shows the description only. The title is exposed to assistive tech
// through aria-label so the dialog is still announced correctly.
const ServiceModal = ({ service, onClose }) => {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;

    // Lock background scroll while the modal is open
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      // Keep keyboard focus inside the dialog
      if (event.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll(FOCUSABLE_SELECTOR);
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      // Return focus to the card that opened the modal
      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus();
      }
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={service.title}
    >
      {/* Backdrop: click anywhere outside the panel to close */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      <div
        ref={dialogRef}
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-white shadow-xl rounded-2xl"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute flex items-center justify-center w-9 h-9 text-gray-600 transition rounded-full top-3 right-3 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-custom-green"
        >
          <Icon
            icon="material-symbols:close-rounded"
            aria-hidden="true"
            className="w-5 h-5"
          />
        </button>

        <p className="p-6 pt-14 text-base leading-relaxed text-gray-700 sm:p-8 sm:pt-14 sm:text-lg">
          {service.description}
        </p>
      </div>
    </div>,
    document.body
  );
};

ServiceModal.propTypes = {
  service: serviceShape.isRequired,
  onClose: PropTypes.func.isRequired,
};

const WhatSetsUsApartDetail = () => {
  const { id } = useParams();
  const [activeService, setActiveService] = useState(null);

  const closeModal = useCallback(() => setActiveService(null), []);

  // Make sure a modal never carries over when navigating to another feature
  useEffect(() => {
    setActiveService(null);
  }, [id]);

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

                  {/* 1 column on mobile, 2 on tablet, 4 per row on desktop */}
                  <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
                    {services.map((service) => (
                      <li key={service.title} className="h-full">
                        <ServiceCard
                          service={service}
                          onOpen={setActiveService}
                        />
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

      {/* Service details modal */}
      {activeService && (
        <ServiceModal service={activeService} onClose={closeModal} />
      )}
    </>
  );
};

export default WhatSetsUsApartDetail;