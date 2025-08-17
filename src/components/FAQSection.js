import { useState } from 'react';
import faqsData from '../data/faqs.json';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-4 py-16 bg-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-4xl font-extrabold text-center text-gray-900 sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <p className="max-w-3xl mx-auto mb-12 text-lg text-center text-gray-700">
          Here are the answers to all your burning questions about ZetScore.
        </p>

        <div className="space-y-4">
          {faqsData.map((faq, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md bg-custom-green">
              <button
                className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-black">{faq.question}</span>
                <span className="text-2xl text-white">
                  {openIndex === index ? '-' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pt-2 pb-6 text-black">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;