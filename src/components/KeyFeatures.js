import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import featuresData from '../data/features.json';
import peerReviewImage from "../assets/Peer_Review.png";
import assessmentImage from "../assets/Assessment.png";
import employeeWellbeingImage from "../assets/Employee-Wellbeing-Main.jpg";
import netPromoterSystemImage from "../assets/Net_Promoter_System.png";
import personalDevelopmentImage from "../assets/pesrsonal development plan.png";
import workforceAnalyticsImage from "../assets/statistics.png";

// Map image filenames to imported image references
const imageMap = {
  "Peer_Review.png": peerReviewImage,
  "Assessment.png": assessmentImage,
  "Employee-Wellbeing-Main.jpg": employeeWellbeingImage,
  "Net_Promoter_System.png": netPromoterSystemImage,
  "pesrsonal development plan.png": personalDevelopmentImage,
  "statistics.png": workforceAnalyticsImage
};

const KeyFeatures = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', fullDescription: '' });

  const openModal = (title, fullDescription) => {
    setModalContent({ title, fullDescription });
    setIsModalOpen(true);
  };

  return (
    <section id="features" className="py-16 bg-custom-green">
      <div className="grid items-center grid-cols-12 px-4 mx-auto">
        <div className="col-span-10 col-start-2">
          <h2 className="mb-6 text-6xl font-bold text-center text-white font-primary sm:text-4xl">
            KEY FEATURES
          </h2>
          <p className="mb-10 text-lg text-center text-white font-primary sm:text-xl">
            Discover how ZetScore drives employee success and simplifies performance management.
          </p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature, index) => {
              const imageSrc = imageMap[feature.image];
              if (!imageSrc) {
                console.warn(`Image not found for: ${feature.image}`);
              }
              return (
                <div
                  key={index}
                  className="p-6 text-justify transition-transform bg-white rounded-lg shadow-lg font-primary hover:scale-105 inter-character"
                >
                  {imageSrc ? (
                    <img
                      src={imageSrc}
                      alt={feature.title}
                      className="w-20 h-20 mx-auto mb-4"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-gray-200">
                      <span className="text-sm text-gray-500">No Image</span>
                    </div>
                  )}
                  <h3 className="mb-2 text-lg font-bold text-center text-custom-green">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-black-700">
                    {feature.title === "Workforce Analytics" && feature.fullDescription
                      ? feature.description.slice(0, 100) + "..."
                      : feature.description}
                  </p>
                  {feature.title === "Workforce Analytics" && feature.fullDescription && (
                    <button
                      onClick={() => openModal(feature.title, feature.fullDescription)}
                      className="mt-4 text-sm font-bold underline text-custom-green"
                    >
                      Read More
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-11/12 p-8 bg-white rounded-lg md:w-2/3 lg:w-1/3">
            <FaTimes
              onClick={() => setIsModalOpen(false)}
              className="absolute cursor-pointer top-4 right-4 text-black-600 hover:text-custom-green"
              size={24}
            />
            <h2 className="mb-6 text-2xl font-bold text-center text-custom-green">
              {modalContent.title}
            </h2>
            <p className="text-justify text-gray-700 inter-character">
              {modalContent.fullDescription}
            </p>
            <div className="mt-6 text-center">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2 font-bold text-white rounded-lg bg-custom-green"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default KeyFeatures;