import { useState } from 'react';
import { Icon } from '@iconify/react';
import GetPricingModal from './GetPricingModal';

const ZetScoreBanner = () => {
  const [isGetPricingModalOpen, setIsGetPricingModalOpen] = useState(false);

  return (
    <section className="py-16 bg-black">
      <div className="grid items-center grid-cols-12 px-4 mx-auto">
        <div className="flex flex-col items-center col-span-10 col-start-2 gap-8 md:flex-row md:justify-between">
          <div className="flex items-center gap-6">
            <Icon
              icon="mdi:chart-line"
              className="flex-shrink-0 hidden w-24 h-24 text-custom-green sm:block"
            />
            <div className="text-center md:text-left">
              <h2 className="mb-2 text-2xl font-bold text-white md:text-4xl">
                Getting started with ZetScore is easy.
                <br className="hidden md:block" />
                Sign up today and get{' '}
                <span className="font-bold text-custom-green">3 months FREE</span>.
              </h2>
              <p className="text-sm text-gray-300">
                See the <a href="/pricing" className="underline hover:text-white">terms and conditions</a>
              </p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <button
              onClick={() => setIsGetPricingModalOpen(true)}
              className="px-8 py-3 font-bold text-black transition duration-300 bg-white rounded-lg hover:bg-gray-100"
            >
              Get Pricing
            </button>
          </div>
        </div>
      </div>

      {isGetPricingModalOpen && (
        <GetPricingModal onClose={() => setIsGetPricingModalOpen(false)} />
      )}
    </section>
  );
};

export default ZetScoreBanner;