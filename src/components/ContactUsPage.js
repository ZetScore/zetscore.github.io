
const ContactUsPage = () => {
  const gradientClasses = 'bg-custom-green';
  const buttonColor = 'bg-custom-green';

  const microservices = [
    { country: 'Kenya', name: 'KRA', img: 'kra-logo.png' },
  ];

  return (
    <>
      <section className="min-h-screen py-16 bg-white lg:py-24">
        <div className="grid items-center grid-cols-12 px-2 mx-auto">
          <div className="col-span-10 col-start-2">
            <div className="flex flex-col md:flex-row">
              {/* Left Section: Gradient Background and Heading */}
              <div className={`${gradientClasses} md:w-1/2 flex flex-col justify-center items-center p-8 lg:p-12 text-white rounded-lg md:rounded-r-none`}>
                <div className="max-w-xl text-center md:text-left">
                  <h1 className="text-3xl font-extrabold leading-tight lg:text-5xl">
                    Talk to ZetScore to enhance your employee performance.
                  </h1>
                </div>
              </div>
              {/* Right Section: Form Container */}
              <div className="flex flex-col justify-center p-8 bg-white border rounded-lg border-secondary md:w-1/2 lg:p-12 md:rounded-l-none">
                <h2 className="mb-8 text-2xl font-bold text-gray-900">Contact Us</h2>

                <form className="space-y-6">
                  {/* Form Grid (Inputs) */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* First Name */}
                    <div>
                      <label htmlFor="first_name" className="sr-only">First Name*</label>
                      <input
                        type="text"
                        id="first_name"
                        placeholder="First Name*"
                        className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                        required
                      />
                    </div>

                    {/* Last Name */}
                    <div>
                      <label htmlFor="last_name" className="sr-only">Last Name*</label>
                      <input
                        type="text"
                        id="last_name"
                        placeholder="Last Name*"
                        className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="sr-only">Business Email*</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Business Email*"
                        className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                        required
                      />
                    </div>

                    {/* Job title */}
                    <div>
                      <label htmlFor="job_title" className="sr-only">Job Title*</label>
                      <input
                        type="text"
                        id="job_title"
                        placeholder="Job Title*"
                        className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                        required
                      />
                    </div>

                    {/* Work phone */}
                    <div>
                      <label htmlFor="work_phone" className="sr-only">Work Phone*</label>
                      <input
                        type="tel"
                        id="work_phone"
                        placeholder="Work Phone*"
                        className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                        required
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="sr-only">Company Name*</label>
                      <input
                        type="text"
                        id="company"
                        placeholder="Company Name*"
                        className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                        required
                      />
                    </div>

                    {/* Country (Dropdown) */}
                    <div>
                      <label htmlFor="country" className="sr-only">Country*</label>
                      <select
                        id="country"
                        className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                        required
                      >
                        <option value="" disabled selected className="text-gray-500">Country*</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="Bostwana">Bostwana</option>
                        <option value="Namibia">Namibia</option>
                        <option value="Cameroon">Cameroon</option>
                      </select>
                    </div>
                    {/* Job Level (Dropdown) */}
                    <div>
                      <label htmlFor="job_level" className="sr-only">Job Level*</label>
                      <select
                        id="job_level"
                        className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      >
                        <option value="" disabled selected className="text-gray-500">Job Level*</option>
                        <option value="c-level">C-Level</option>
                        <option value="vp">Vice President</option>
                        <option value="director">Director</option>
                        <option value="manager">Manager</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Functional Role (Dropdown) */}
                    <div>
                      <label htmlFor="help_needed" className="sr-only">Functional Role*</label>
                      <select
                        id="help_needed"
                        className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      >
                        <option value="" disabled selected className="text-gray-500">Functional Role*</option>
                        <option value="hr">Human Resource</option>
                        <option value="finance">Finance Management</option>
                        <option value="operator">Operator</option>
                        <option value="it">IT</option>
                      </select>
                    </div>
                  </div>

                  {/* Opt-in Checkbox */}
                  <div className="flex items-center text-sm text-gray-600">
                    <input
                      id="opt_in"
                      type="checkbox"
                      className="w-5 h-5 border-gray-300 rounded text-secondary focus:secondary"
                    />
                    <label htmlFor="opt_in" className="ml-3">
                      Opt in to ZetCollect tailored information such as industry news and reports, solution updates and events, via email and telephone
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className={`w-full md:w-auto px-10 py-3 text-white font-semibold rounded-full ${buttonColor} hover:opacity-90 transition duration-300 focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-50`}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Microservices Section */}
            <div className="px-8 py-12 mt-16 text-center text-white rounded-lg bg-custom-green">
              <h2 className="mb-8 text-3xl font-bold">
                Serving Microservices Across Africa
              </h2>
              <div className="grid items-center justify-center grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {microservices.map((service, index) => (
                  <div key={index} className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md">
                    <img 
                      src={service.img} 
                      alt={`${service.country} ${service.name} Logo`} 
                      className="object-contain h-20 mb-2"
                    />
                    <p className="text-sm font-semibold text-center text-gray-800">{service.country} - {service.name}</p>
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

export default ContactUsPage;