import heroImage from "../assets/group-afro-americans-working-together.jpg";
import { Link } from "react-router-dom";


function Hero() {
  return (
    <section id="home" className="py-16 text-white bg-custom-green">
      <div className="grid items-center grid-cols-12 px-4 mx-auto">
        <div className="grid items-center grid-cols-1 col-span-10 col-start-2 md:grid-cols-2">
          <div className="text-center font-primary md:text-left md:pr-8 ">
            <h2 className="mb-4 text-5xl font-bold text-justify inter-character md:pr-8">
              Boost Your Corporate Performance with ZetScore
            </h2>
            <p className="mb-6 text-lg text-justify inter-character md:pr-8">
              ZetScore is an Employee Performance Management Software that
              equips your Organization with actionable, data-driven insights to
              enhance your employee performance.
            </p>
            <Link to="/contact-us" className="flex justify-start"  >
              <button className="px-6 py-3 mb-8 font-bold transition duration-300 bg-white border-2 border-transparent rounded-lg font-primary text-custom-green hover:bg-custom-green hover:text-white hover:border-white">
                GET STARTED
              </button>
            </Link>
          </div>

          <div>
            <img
              src={heroImage}
              alt="Team working"
              className="mx-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
