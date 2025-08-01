import { useState } from 'react';
import { Icon } from '@iconify/react';

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

  // Define the reasons to choose us with new titles and Iconify icons
  const reasons = [
    {
      icon: <Icon icon="fluent-mdl2:review-solid" className="w-8 h-8 text-custom-green" />,
      title: "Peer Review",
      description:
        "Facilitate constructive feedback among team members to foster growth and and enhance overall team dynamics.",
      fullDescription:
        "Our Peer Review tool empowers your team with a structured and anonymous way to provide and receive feedback. This fosters a culture of continuous improvement, enhances collaboration, and helps identify areas for individual and team development, leading to overall performance enhancement.",
    },
    {
      icon: <Icon icon="fluent-mdl2:assessment-group-template" className="w-8 h-8 text-custom-green" />,
      title: "Assessment",
      description:
        "Streamline evaluation processes and track progress effectively across your organization to identify strengths and areas for improvement.",
      fullDescription:
        "Our Assessment capabilities provide comprehensive tools for evaluating performance, skills, and knowledge within your workforce. Conduct various types of assessments, track individual and team progress, and gain insights to make informed decisions about training and development.",
    },
    {
      icon: <Icon icon="material-symbols-light:digital-wellbeing-outline-rounded" className="w-8 h-8 text-custom-green" />,
      title: "Employee Well-Being",
      description:
        "Prioritize the health and happiness of your workforce with dedicated wellbeing features, fostering a supportive work environment.",
      fullDescription:
        "Zetcollect recognizes the critical role of employee well-being in productivity and retention. Our platform includes features designed to support the mental and physical health of your team, from stress management resources to work-life balance monitoring. A happy workforce is a productive workforce.",
    },
    {
      icon: <Icon icon="mdi:poll-box-outline" className="w-8 h-8 text-custom-green" />,
      title: "Net Promoter System",
      description:
        "Measure customer loyalty and satisfaction to drive business growth and identify advocates for your brand.",
      fullDescription:
        "Understand your customer's voice with our integrated Net Promoter System (NPS). This powerful tool allows you to gauge customer loyalty and satisfaction, identify promoters and detractors, and gain actionable insights to improve your services and foster a stronger customer base.",
    },
    {
      icon: <Icon icon="mdi:chart-timeline-variant-shimmer" className="w-8 h-8 text-custom-green" />,
      title: "Workforce Analytics",
      description:
        "Gain deep insights into your workforce performance, engagement, and productivity through comprehensive data analysis.",
      fullDescription:
        "Make data-driven decisions with Zetcollect's Workforce Analytics. Our platform provides comprehensive dashboards and reports on key HR metrics, employee engagement, productivity trends, and more. Understand your workforce dynamics better and optimize your strategies for maximum efficiency.",
    },
  ];

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
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-8 text-center bg-white border border-gray-100 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-custom-green/20 hover:scale-[1.02]"
              >
                <div className="flex items-center justify-center w-20 h-20 mb-6 bg-gray-100 rounded-full">
                  {reason.icon}
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