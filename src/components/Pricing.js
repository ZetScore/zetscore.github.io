import { useState } from 'react';
import { Plus, Minus, X } from 'lucide-react';
import PricingFaqs from '../data/pricingfaq.json';
import { Link } from "react-router-dom";

const Pricing = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isPriceModalOpen, setIsPriceModalOpen] = useState(false);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const CheckIcon = () => (
    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );

  const compareFeatures = [
    { name: "Peer Review", business: true, enterprise: true },
    { name: "Assessment", business: true, enterprise: true },
    { name: "Personal Development", business: true, enterprise: true },
    { name: "Workforce Analytics", business: true, enterprise: true },
    { name: "Net Promoter Score (eNPS & cNPS)", business: false, enterprise: true },
    { name: "Employee Wellbeing", business: false, enterprise: true },
    { name: "Onboarding", business: true, enterprise: true },
    { name: "Background Check", business: false, enterprise: true },
    { name: "Work Authorisation", business: false, enterprise: true },
    { name: "Access to Training Course", business: false, enterprise: true },
    { name: "Custom Domain", business: "Default", enterprise: "Private Domain" },
    { name: "Custom Branding", business: "Default", enterprise: "Personal Branding" },
    { name: "Storage", business: "5 GB of storage", enterprise: "Unlimited Storage" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen bg-center bg-cover" style={{ backgroundImage: "url('/pricing-hero-section.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="grid h-full grid-cols-12 px-2 py-2 mx-auto">
          <div className="relative z-10 flex flex-col items-start justify-center col-span-10 col-start-2 text-white">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-left md:text-6xl">
              Fair pricing for faster growth
            </h1>
            <p className="mb-8 text-lg text-left md:text-xl max-w-[600px]">
              Flexible pricing plans to suit businesses of all sizes.
            </p>
            <div className="flex justify-start">
              <a
                href="https://forms.zohopublic.com/evolvizsoftwaresgroup/form/ZetScoreDemoRequest/formperma/Q7VIFiPZauUdJviXd8JnvwE8T27rF2wzbLvFBTWh4Vs"
                className="inline-block"
              >
                <button className="px-6 py-2 font-bold text-white transition duration-300 rounded-lg bg-custom-green hover:bg-opacity-90">
                  Get Started
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-16 bg-gray-100">
        <div className="grid grid-cols-12 px-2 mx-auto">
          <div className="col-span-10 col-start-2">
            <h2 className="mb-12 text-3xl font-bold text-left md:text-4xl">
              Flexible fees tailored to your business
            </h2>
            <div className="flex flex-col items-stretch justify-center gap-8 md:flex-row">
              {/* Business Plan */}
              <div className="flex flex-col justify-between flex-1 p-8 bg-white rounded-lg shadow-lg">
                <div>
                  <h3 className="mb-4 text-2xl font-bold text-left">Business</h3>
                  <p className="mb-6 text-left text-gray-600">
                    Standard pricing for growing businesses.
                  </p>
                  <h4 className="mb-4 text-lg font-semibold text-left">You get:</h4>
                  <ul className="mb-8 space-y-3">
                    <li className="flex items-center text-gray-700"><span className="inline-flex w-5 h-5 mr-2"><CheckIcon /></span>Peer Review</li>
                    <li className="flex items-center text-gray-700"><span className="inline-flex w-5 h-5 mr-2"><CheckIcon /></span>Assessment</li>
                    <li className="flex items-center text-gray-700"><span className="inline-flex w-5 h-5 mr-2"><CheckIcon /></span>Personal Development</li>
                    <li className="flex items-center text-gray-700"><span className="inline-flex w-5 h-5 mr-2"><CheckIcon /></span>Workforce Analytics</li>
                    <li className="flex items-center text-gray-700"><span className="inline-flex w-5 h-5 mr-2"><CheckIcon /></span>Onboarding</li>
                    <li className="flex items-center text-gray-700"><span className="inline-flex w-5 h-5 mr-2"><CheckIcon /></span>Local Business Hours Support</li>
                  </ul>
                </div>
                <div className="flex justify-start">
                  <button className="px-6 py-2 font-bold text-white transition duration-300 rounded-lg bg-custom-green hover:bg-opacity-90">
                    Get Started
                  </button>
                </div>
              </div>

              {/* Enterprise Plan */}
              <div className="flex flex-col justify-between flex-1 p-8 text-white bg-black rounded-lg shadow-lg">
                <div>
                  <h3 className="mb-4 text-2xl font-bold text-left">Enterprise</h3>
                  <p className="mb-6 text-left text-white">
                    Custom rates with dedicated support and advanced features.
                  </p>
                  <h4 className="mb-4 text-lg font-semibold text-left">Everything from Business, Plus:</h4>
                  <ul className="mb-8 space-y-3">
                    <li className="flex items-center text-white"><span className="inline-flex w-5 h-5 mr-2"><CheckIcon /></span>Net Promoter Score (eNPS & cNPS)</li>
                    <li className="flex items-center text-white"><span className="inline-flex w-5 h-5 mr-2"><CheckIcon /></span>Employee Wellbeing</li>
                    <li className="flex items-center text-white"><span className="inline-flex w-5 h-5 mr-2"><CheckIcon /></span>Background Check</li>
                    <li className="flex items-center text-white"><span className="inline-flex w-5 h-5 mr-2"><CheckIcon /></span>Work Authorisation</li>
                    <li className="flex items-center text-white"><span className="inline-flex w-5 h-5 mr-2"><CheckIcon /></span>Unlimited Storage</li>
                    <li className="flex items-center text-white"><span className="inline-flex w-5 h-5 mr-2"><CheckIcon /></span>Access to Training Course</li>
                    <li className="flex items-center text-white"><span className="inline-flex w-5 h-5 mr-2"><CheckIcon /></span>24/7 Enterprise Support</li>
                  </ul>
                </div>
                <div className="flex justify-start">
                  <button className="px-6 py-2 font-bold text-white transition duration-300 rounded-lg bg-custom-green hover:bg-opacity-90">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* View Our Price Section */}
      <section className="py-12 bg-white">
        <div className="grid grid-cols-12 px-2 mx-auto">
          <div className="flex justify-center col-span-10 col-start-2">
            <button
              onClick={() => setIsPriceModalOpen(true)}
              className="px-6 py-2 font-bold text-white transition duration-300 rounded-lg bg-custom-green hover:bg-opacity-90"
            >
              View Our Price
            </button>
          </div>
        </div>
      </section>

      {/* View Our Price Modal */}
      {isPriceModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="relative w-full max-w-[95vw] max-h-[95vh] overflow-y-auto bg-white rounded-lg shadow-lg">
            <button
              onClick={() => setIsPriceModalOpen(false)}
              className="absolute z-10 p-2 text-gray-500 bg-white rounded-full top-4 right-4 bg-opacity-80 hover:bg-gray-100"
              aria-label="Close"
            >
              <X className="w-7 h-7" />
            </button>
            <div className="p-6 md:p-10 text-center">
              <h1 className="mb-6 font-handwriting text-6xl md:text-7xl text-gray-900">
                You are not{' '}
                <span className="relative inline-block">
                  dreaming!
                  <svg
                    className="absolute left-0 w-full pointer-events-none -bottom-1"
                    height="10"
                    viewBox="0 0 200 10"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 6 C 50 2, 150 2, 198 6"
                      stroke="#F87171"
                      strokeWidth="6"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </span>
              </h1>
              <img
                src="/Pricing.png"
                alt="ZetScore pricing plans"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

      {/* Compare Features Section */}
      <section className="py-16 bg-white">
        <div className="grid grid-cols-12 px-2 mx-auto">
          <div className="col-span-10 col-start-2">
            <h2 className="mb-4 text-3xl font-bold text-left md:text-4xl">
              Compare features
            </h2>
            <p className="mb-12 text-left text-custom-green hover:underline">
              <a href="learn">Learn about features</a>
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="w-1/2 px-6 py-4 font-semibold text-left text-gray-600">Compare features</th>
                    <th className="w-1/4 px-6 py-4 font-semibold text-center text-gray-600">Business</th>
                    <th className="w-1/4 px-6 py-4 font-semibold text-center text-gray-600">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {compareFeatures.map((feature, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="px-6 py-4 text-left text-gray-700">{feature.name}</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center">
                          {typeof feature.business === 'boolean' ? (feature.business ? <CheckIcon /> : null) : feature.business}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center">
                          {typeof feature.enterprise === 'boolean' ? (feature.enterprise ? <CheckIcon /> : null) : feature.enterprise}
                        </div>
                      </td>
                    </tr>
                  ))}
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-4 text-left text-gray-700">Support</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center">Local Business Hours Support</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center">24/7 Enterprise Support</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-gray-50">
        <div className="grid grid-cols-12 px-2 mx-auto">
          <div className="col-span-10 col-start-2">
            <h2 className="mb-4 font-handwriting text-left text-gray-900 text-6xl md:text-7xl">
              Any{' '}
              <span className="relative inline-block">
                Questions
                <svg
                  className="absolute left-0 w-full pointer-events-none -bottom-2"
                  height="10"
                  viewBox="0 0 200 10"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 6 C 50 2, 150 2, 198 6"
                    stroke="#2196f3"
                    strokeWidth="6"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
              ?
            </h2>
            <p className="mt-6 mb-12 text-lg text-left text-gray-700">
              If the answer to your question is not on this page, please contact our{' '}
              <Link to ="/contact-us" className="font-semibold text-custom-green hover:underline">
                Account Managers
              </Link>
            </p>

            {/* General */}
            <div className="mb-10">
              <h3 className="mb-5 text-2xl font-bold text-gray-900">General</h3>
              <div className="overflow-hidden bg-white shadow-lg rounded-xl">
                {PricingFaqs.general.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-b-0">
                    <button
                      className="flex items-center justify-between w-full p-6 text-left transition-colors focus:outline-none hover:bg-gray-50"
                      onClick={() => toggleFAQ(`general-${index}`)}
                    >
                      <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                      {openIndex === `general-${index}` ? (
                        <Minus className="flex-shrink-0 w-6 h-6 text-gray-500" />
                      ) : (
                        <Plus className="flex-shrink-0 w-6 h-6 text-gray-500" />
                      )}
                    </button>
                    {openIndex === `general-${index}` && (
                      <div className="px-6 pb-6 text-gray-600">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Free Plan */}
            <div className="mb-10">
              <h3 className="mb-5 text-2xl font-bold text-gray-900">Free Plan Account</h3>
              <div className="overflow-hidden bg-white shadow-lg rounded-xl">
                {PricingFaqs.freePlan.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-b-0">
                    <button
                      className="flex items-center justify-between w-full p-6 text-left transition-colors focus:outline-none hover:bg-gray-50"
                      onClick={() => toggleFAQ(`freePlan-${index}`)}
                    >
                      <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                      {openIndex === `freePlan-${index}` ? (
                        <Minus className="flex-shrink-0 w-6 h-6 text-gray-500" />
                      ) : (
                        <Plus className="flex-shrink-0 w-6 h-6 text-gray-500" />
                      )}
                    </button>
                    {openIndex === `freePlan-${index}` && (
                      <div className="px-6 pb-6 text-gray-600">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Paid Plan */}
            <div className="mb-8">
              <h3 className="mb-5 text-2xl font-bold text-gray-900">Paid Plan Account</h3>
              <div className="overflow-hidden bg-white shadow-lg rounded-xl">
                {PricingFaqs.paidPlan.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-b-0">
                    <button
                      className="flex items-center justify-between w-full p-6 text-left transition-colors focus:outline-none hover:bg-gray-50"
                      onClick={() => toggleFAQ(`paidPlan-${index}`)}
                    >
                      <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                      {openIndex === `paidPlan-${index}` ? (
                        <Minus className="flex-shrink-0 w-6 h-6 text-gray-500" />
                      ) : (
                        <Plus className="flex-shrink-0 w-6 h-6 text-gray-500" />
                      )}
                    </button>
                    {openIndex === `paidPlan-${index}` && (
                      <div className="px-6 pb-6 text-gray-600">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;