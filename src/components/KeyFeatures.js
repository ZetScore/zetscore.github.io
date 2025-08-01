import { useState } from "react";
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
    <section id="features" className="py-16 bg-custom-green">
      <div className="grid items-center grid-cols-12 px-4 mx-auto">
        <div className="col-span-10 col-start-2">
          <h2 className="mb-6 text-6xl font-bold text-center text-white font-primary sm:text-4xl ">
            KEY FEATURES
          </h2>
          <p className="mb-10 text-lg text-center text-white font-primary sm:text-xl">
            Discover how ZetScore drives employee success and simplifies performance management.
          </p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 text-justify transition-transform bg-white rounded-lg shadow-lg font-primary hover:scale-105 inter-character"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="mb-2 text-lg font-bold text-center text-custom-green">
                  {feature.title}
                </h3>
                <p className="text-sm text-black-700">
                  {feature.title === "Workforce Analytics"
                    ? feature.description.slice(0, 100) + "..."
                    : feature.description}
                </p>
                {feature.title === "Workforce Analytics" && (
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="mt-4 text-sm font-bold underline text-custom-green"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-11/12 p-8 bg-white rounded-lg md:w-2/3 lg:w-1/3">

            <FaTimes
              onClick={() => setIsModalOpen(false)}
              className="absolute cursor-pointer top-4 right-4 text-black-600 hover:text-custom-green"
              size={24}
            />
          
            <h2 className="mb-6 text-2xl font-bold text-center text-custom-green">
              Workforce Analytics
            </h2>
        
            <p className="text-justify text-gray-700 inter-character">
  Our core analytics provides data-driven insights to evaluate employee performance, enhance productivity through tailored development plans, and empower executives with actionable insights to make data-driven decisions.
</p>
<p className="mt-4 text-justify text-gray-700 inter-character">
  Through this tailored strategies, we help employees grow through personalized growth plans and this drives productivity, and enable leadership to make informed decisions based on real-time data.
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
