import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import pearReviewImage from "../assets/Peer_Review.png";
import assessmentImage from "../assets/Assessment.png";
import employeeWellbeingImage from "../assets/Employee-Wellbeing-Main.jpg";
import netPromoterSystemImage from "../assets/Net_Promoter_System.png";
import personalDevelopmentImage from "../assets/pesrsonal development plan.png";
import workforceAnalyticsImage from "../assets/statistics.png";

const KeyFeatures = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      title: "Peer Review",
      description:
        "Encourage growth with constructive feedback mechanism that highlights what an individual excels at and offers actionable suggestions for improvement.",
      image: pearReviewImage,
    },
    {
      title: "Assessment",
      description:
        "Assess employee performance using self-evaluation and manager evaluation to ensure fair and objective feedback based on defined categories.",
      image: assessmentImage,
    },
    {
      title: "Employee Wellbeing",
      description:
        "Cultivate a holistic work environment by focusing on health, job satisfaction, financial wellbeing, and fostering social connections within the workplace.",
      image: employeeWellbeingImage,
    },
    {
      title: "Net Promoter System",
      description:
        "Utilize eNPS and cNPS to gauge employee and customer engagement and satisfaction through insightful feedback metrics.",
      image: netPromoterSystemImage,
    },
    {
      title: "Personal Development",
      description:
        "Empower employees by highlighting key areas for their professional growth and career progression within the company.",
      image: personalDevelopmentImage,
    },
    {
      title: "Workforce Analytics",
      description:
        "Our core analytics provides data-driven insights to evaluate employee performance, enhance productivity through tailored development plans, and empower executives with actionable insights to make data-driven decisions.",
      image: workforceAnalyticsImage,
    },
  ];

  return (
    <section id="features" className="bg-custom-green py-16">
      <div className="mx-auto px-4 grid grid-cols-12 items-center">
        <div className="col-span-10 col-start-2">
          <h2 className="text-white font-primary text-6xl sm:text-4xl font-bold text-center mb-6 ">
            KEY FEATURES
          </h2>
          <p className="text-white font-primary text-lg sm:text-xl text-center mb-10">
            Discover how ZetScore drives employee success and simplifies performance management.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white font-primary shadow-lg rounded-lg p-6 transition-transform hover:scale-105 text-justify inter-character"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="text-lg font-bold text-custom-green mb-2 text-center">
                  {feature.title}
                </h3>
                <p className="text-black-700 text-sm">
                  {feature.title === "Workforce Analytics"
                    ? feature.description.slice(0, 100) + "..."
                    : feature.description}
                </p>
                {feature.title === "Workforce Analytics" && (
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="text-custom-green font-bold underline text-sm mt-4"
                  >
                    Read More
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-11/12 md:w-2/3 lg:w-1/3 relative">

            <FaTimes
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-black-600 cursor-pointer hover:text-custom-green"
              size={24}
            />
          
            <h2 className="text-2xl font-bold text-center text-custom-green mb-6">
              Workforce Analytics
            </h2>
        
            <p className="text-gray-700 text-justify inter-character">
  Our core analytics provides data-driven insights to evaluate employee performance, enhance productivity through tailored development plans, and empower executives with actionable insights to make data-driven decisions.
</p>
<p className="text-gray-700 text-justify inter-character mt-4">
  Through this tailored strategies, we help employees grow through personalized growth plans and this drives productivity, and enable leadership to make informed decisions based on real-time data.
</p>

          
            <div className="text-center mt-6">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-custom-green text-white font-bold px-6 py-2 rounded-lg"
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
