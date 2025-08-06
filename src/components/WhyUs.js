import { useState } from 'react';
import { Icon } from '@iconify/react';
import reasonsData from '../data/whyUs.json';

const WhyUs = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', fullDescription: '' });

  const openModal = (title, fullDescription) => {
    setModalContent({ title, fullDescription });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className="py-16 bg-white">
      <div className="grid items-center grid-cols-12 px-4 mx-auto">
        <div className="flex flex-col items-center col-span-10 col-start-2">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-800 md:text-4xl">
            WHY ZETSCORE
          </h2>
          <p className="mb-12 text-lg text-center text-gray-600 max-w-[600px] mx-auto">
            Discover what sets ZetScore apart in delivering exceptional value to our clients.
          </p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {reasonsData.map((reason, index) => (
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
                <button
                  onClick={() => openModal(reason.title, reason.fullDescription)}
                  className="font-medium transition-colors duration-200 text-custom-green hover:text-teal-700 focus:outline-none"
                >
                  Read more
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-600 bg-opacity-75">
          <div className="relative w-full max-w-lg p-6 bg-white rounded-lg shadow-xl">
            <h3 className="mb-4 text-2xl font-bold text-gray-800">
              {modalContent.title}
            </h3>
            <p className="mb-6 text-gray-700">{modalContent.fullDescription}</p>
            <button
              onClick={closeModal}
              className="absolute text-2xl text-gray-500 top-4 right-4 hover:text-gray-800"
              aria-label="Close modal"
            >
              &times;
            </button>
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="px-6 py-2 text-white transition-colors duration-200 rounded-md bg-custom-green hover:bg-teal-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WhyUs;