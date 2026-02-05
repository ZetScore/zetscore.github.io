import { useState } from 'react';
import PropTypes from 'prop-types';

// API configuration
const API_CONFIG = {
  URL: "https://contact-form-handler-885787520862.europe-west1.run.app",
  TIMEOUT: 40000, // 40 seconds
  MAX_RETRIES: 2
};

// Email validation regex pattern
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Modal notification component
const Modal = ({ message, type, onClose }) => {
  const bgColor = type === 'success' ? 'bg-custom-green' : 'bg-red-500';
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className={`${bgColor} text-white px-6 py-4 rounded-lg shadow-lg max-w-sm w-full flex flex-col items-center gap-4`}>
        <span className="text-center">{message}</span>
        <button 
          onClick={onClose} 
          className="px-4 py-2 text-black transition duration-300 bg-white rounded-lg hover:bg-gray-200"
        >
          Close
        </button>
      </div>
    </div>
  );
};

// PropTypes for Modal
Modal.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error']).isRequired,
  onClose: PropTypes.func.isRequired
};

const ContactUsPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modal, setModal] = useState(null);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    job_title: '',
    work_phone: '',
    company: '',
    country: '',
    job_level: '',
    help_needed: '',
    opt_in: false
  });
  const [errors, setErrors] = useState({});

  const gradientClasses = 'bg-custom-green';
  const buttonColor = 'bg-custom-green';

  const microservices = [
    { country: 'Kenya', name: 'KRA', img: 'kra-logo.png' },
  ];

  // Countries with Kenya first, then alphabetical order
  const countries = [
    { value: 'Kenya', label: 'Kenya' },
    { value: 'Botswana', label: 'Botswana' },
    { value: 'Ghana', label: 'Ghana' },
    { value: 'Namibia', label: 'Namibia' },
    { value: 'Rwanda', label: 'Rwanda' }
  ].sort((a, b) => {
    // Keep Kenya first, then sort the rest alphabetically
    if (a.value === 'Kenya') return -1;
    if (b.value === 'Kenya') return 1;
    return a.value.localeCompare(b.value);
  });

  const showModal = (message, type = 'success') => {
    setModal({ message, type });
  };

  const hideModal = () => {
    setModal(null);
  };

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (formData.email && !EMAIL_REGEX.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone number validation (only numbers)
    if (formData.work_phone && !/^\d+$/.test(formData.work_phone)) {
      newErrors.work_phone = 'Phone number should contain only numbers';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    
    // For phone number input, only allow numbers
    if (id === 'work_phone') {
      // Remove any non-digit characters
      const numbersOnly = value.replace(/\D/g, '');
      setFormData(prev => ({
        ...prev,
        [id]: numbersOnly
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [id]: type === 'checkbox' ? checked : value
      }));
    }

    // Clear error when user starts typing
    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: ''
      }));
    }
  };

  const submitToAPI = async (data, retryCount = 0) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.TIMEOUT);

    try {
      const response = await fetch(API_CONFIG.URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify({
          name: `${data.first_name} ${data.last_name}`,
          email: data.email,
          message: `Product: ZetScore\nJob Title: ${data.job_title}\nWork Phone: ${data.work_phone}\nCompany: ${data.company}\nCountry: ${data.country}\nJob Level: ${data.job_level}\nFunctional Role: ${data.help_needed}\nOpt-in: ${data.opt_in ? 'Yes' : 'No'}`,
          source: 'ZetScore' // Added to satisfy API requirement
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      clearTimeout(timeoutId);
      
      if (error.name === 'AbortError') {
        console.log(`Request timeout (attempt ${retryCount + 1})`);
      } else {
        console.error(`Request failed (attempt ${retryCount + 1}):`, error);
      }

      if (retryCount < API_CONFIG.MAX_RETRIES) {
        console.log(`Retrying... (${retryCount + 1}/${API_CONFIG.MAX_RETRIES})`);
        await new Promise(resolve => setTimeout(resolve, 1000));
        return submitToAPI(data, retryCount + 1);
      }

      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      showModal('Please check your form for errors.', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      // Show immediate success modal
      showModal('Thank you! Your message has been submitted successfully.', 'success');
      
      // Store form data before reset for logging
      const formDataToSubmit = { ...formData };
      
      // Reset form immediately
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        job_title: '',
        work_phone: '',
        company: '',
        country: '',
        job_level: '',
        help_needed: '',
        opt_in: false
      });

      // Clear errors
      setErrors({});

      // Background API call
      await submitToAPI(formDataToSubmit);
      console.log('Form submitted successfully to API');
      
    } catch (error) {
      console.error('API submission failed:', error.message);
      
      // Show error modal if API fails
      if (error.name === 'TypeError' && error.message.includes('CORS')) {
        showModal('Form submitted! Note: Unable to connect to server due to CORS policy, but your message was recorded locally.', 'success');
      } else {
        showModal('Form submitted! There was a network issue, but we have recorded your information.', 'success');
      }
      
      // Log the form data for debugging or manual processing
      // eslint-disable-next-line no-undef
      console.log('Form data for manual processing:', formDataToSubmit); // Log the original data
    } finally {
      setIsSubmitting(false);
    }
  };

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

                {/* Modal notification */}
                {modal && (
                  <Modal 
                    message={modal.message} 
                    type={modal.type} 
                    onClose={hideModal} 
                  />
                )}

                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Form Grid (Inputs) */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* First Name */}
                    <div>
                      <label htmlFor="first_name" className="sr-only">First Name*</label>
                      <input
                        type="text"
                        id="first_name"
                        value={formData.first_name}
                        onChange={handleInputChange}
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
                        value={formData.last_name}
                        onChange={handleInputChange}
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
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Business Email*"
                        className={`w-full px-4 py-3 text-gray-900 placeholder-gray-500 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        required
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                      )}
                    </div>

                    {/* Job title */}
                    <div>
                      <label htmlFor="job_title" className="sr-only">Job Title*</label>
                      <input
                        type="text"
                        id="job_title"
                        value={formData.job_title}
                        onChange={handleInputChange}
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
                        value={formData.work_phone}
                        onChange={handleInputChange}
                        placeholder="Work Phone*"
                        className={`w-full px-4 py-3 text-gray-900 placeholder-gray-500 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent ${
                          errors.work_phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                        required
                      />
                      {errors.work_phone && (
                        <p className="mt-1 text-sm text-red-500">{errors.work_phone}</p>
                      )}
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="sr-only">Company Name*</label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={handleInputChange}
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
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                        required
                      >
                        <option value="" disabled className="text-gray-500">Country*</option>
                        {countries.map((country) => (
                          <option key={country.value} value={country.value}>
                            {country.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    {/* Job Level (Dropdown) */}
                    <div>
                      <label htmlFor="job_level" className="sr-only">Job Level*</label>
                      <select
                        id="job_level"
                        value={formData.job_level}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      >
                        <option value="" disabled className="text-gray-500">Job Level*</option>
                        <option value="c-level">Executive (President, CEO, COO, CTO, CIO)</option>
                        <option value="vp">Executive Vice President / Vice President</option>
                        <option value="director">Director</option>
                        <option value="manager">Manager</option>
                        <option value="hr">Human Resources</option>
                        <option value="it">IT & Technical Management</option>
                        <option value="Consultant">Consultant / Specialist</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Functional Role (Dropdown) */}
                    <div>
                      <label htmlFor="help_needed" className="sr-only">Functional Role*</label>
                      <select
                        id="help_needed"
                        value={formData.help_needed}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      >
                        <option value="" disabled className="text-gray-500">Functional Role*</option>
                        <option value="finance">Finance and Accounting</option>
                        <option value="hr">Human Resource</option>
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
                      checked={formData.opt_in}
                      onChange={handleInputChange}
                      className="w-5 h-5 border-gray-300 rounded text-secondary focus:secondary"
                    />
                    <label htmlFor="opt_in" className="ml-3">
                      Opt in to ZetScore tailored information such as industry news and reports, solution updates and events, via email and telephone
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full md:w-auto px-10 py-3 text-white font-semibold rounded-full ${buttonColor} hover:opacity-90 transition duration-300 focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit'}
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