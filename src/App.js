import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import { useEffect } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import KeyFeatures from './components/KeyFeatures';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import WhyUs from "./components/WhyUs";
import FAQSection from "./components/FAQSection";
import ContactUsPage from "./components/ContactUsPage";
import FaqPage from "./components/FaqPage";
import CustomerSupport from "./components/CustomerSuport";
import Articles from "./components/articles/Articles";
import BlogPost from "./components/articles/BlogPost";
import EventsandWebinars from "./components/EventsandWebinars";
import DemoSection from "./components/DemoSection";
import WhatSetsUsApart from "./components/WhatSetsUsApart/WhatSetsUsApart";
import WhatSetsUsApartDetail  from "./components/WhatSetsUsApart/WhatSetsUsApartDetail";

// Homepage component
const Homepage = () => {
  return (
    <>
      <Hero />
      <WhyUs />
      <DemoSection />
      <KeyFeatures />
      <WhatSetsUsApart />
      <FAQSection />
    </>
  );
};

// Features page component - shows homepage but scrolls to features
const FeaturesPage = () => {
  useEffect(() => {
    setTimeout(() => {
      const featuresSection = document.getElementById('features');
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }, []);

  return (
    <>
      <Hero />
      <WhyUs />
      <DemoSection />
      <KeyFeatures />
      <WhatSetsUsApart />
      <FAQSection />
    </>
  );
};

// What Sets Us Apart page component - shows homepage but scrolls to what sets us apart
const WhatSetsUsApartScroll = () => {
  useEffect(() => {
    setTimeout(() => {
      const section = document.getElementById('enhanced-features');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }, []);

  return (
    <>
      <Hero />
      <WhyUs />
      <DemoSection />
      <KeyFeatures />
      <WhatSetsUsApart />
      <FAQSection />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/enhanced-features" element={<WhatSetsUsApart />} />
          <Route path="/enhanced-features-section" element={<WhatSetsUsApartScroll />} />
          <Route path="/enhanced-features/:id" element={<WhatSetsUsApartDetail />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/customer-support" element={<CustomerSupport />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<BlogPost />} />
          <Route path="/events-and-webinars" element={<EventsandWebinars />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};
export default App;