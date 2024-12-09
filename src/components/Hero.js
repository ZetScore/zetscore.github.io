import React from 'react';
import heroImage from '../assets/group-afro-americans-working-together.jpg';

function Hero() {
  return (
    <section id="home" className="bg-custom-green text-white py-16">
      <div className="mx-auto px-4 grid grid-cols-12 items-center">
        <div className="col-span-10 col-start-2 grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="font-primary text-center md:text-left md:pr-8 ">
            <h2 className="text-5xl font-bold mb-4 text-justify inter-character md:pr-8">Boost Team Performance with ZetScore</h2>
            <p className="text-lg mb-6 text-justify inter-character md:pr-8">
            ZetScore is an Employee Performance Management Software that equips your Organization with actionable, data-driven insights to enhance your employee performance.
            </p>
            <a
  href="https://forms.zohopublic.com/evolvizsoftwaresgroup/form/ZetScoreDemoRequest/formperma/Q7VIFiPZauUdJviXd8JnvwE8T27rF2wzbLvFBTWh4Vs"
  className="flex justify-start"
>
  <button className="bg-white font-primary text-custom-green py-3 px-6 font-bold rounded-lg border-2 border-transparent hover:bg-custom-green hover:text-white hover:border-white transition duration-300 mb-8">
    JOIN PRIORITY LIST
  </button>
</a>

          </div>

          <div>
            <img 
              src={heroImage} 
              alt="Team working" 
              className="rounded-lg shadow-xl mx-auto"
            />
          </div>
        
        </div>
      </div>
    </section>
  );
}

export default Hero;
