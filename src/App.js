import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import { useEffect } from 'react';
import PropTypes from 'prop-types';
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
import PreLoginPage from './components/PreLogin';

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

// Layout component with Navbar and Footer
const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

// PreLogin Layout without Navbar and Footer (clean page)
const PreLoginLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
};

PreLoginLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes with Navbar and Footer */}
        <Route path="/" element={
          <Layout>
            <Homepage />
          </Layout>
        } />
        <Route path="/features" element={
          <Layout>
            <FeaturesPage />
          </Layout>
        } />
        <Route path="/enhanced-features" element={
          <Layout>
            <WhatSetsUsApart />
          </Layout>
        } />
        <Route path="/enhanced-features-section" element={
          <Layout>
            <WhatSetsUsApartScroll />
          </Layout>
        } />
        <Route path="/enhanced-features/:id" element={
          <Layout>
            <WhatSetsUsApartDetail />
          </Layout>
        } />
        <Route path="/pricing" element={
          <Layout>
            <Pricing />
          </Layout>
        } />
        <Route path="/contact-us" element={
          <Layout>
            <ContactUsPage />
          </Layout>
        } />
        <Route path="/faq" element={
          <Layout>
            <FaqPage />
          </Layout>
        } />
        <Route path="/customer-support" element={
          <Layout>
            <CustomerSupport />
          </Layout>
        } />
        <Route path="/articles" element={
          <Layout>
            <Articles />
          </Layout>
        } />
        <Route path="/articles/:id" element={
          <Layout>
            <BlogPost />
          </Layout>
        } />
        <Route path="/events-and-webinars" element={
          <Layout>
            <EventsandWebinars />
          </Layout>
        } />
        
        {/* PreLogin route WITHOUT Navbar and Footer - full page */}
        <Route path="/login" element={
          <PreLoginLayout>
            <PreLoginPage />
          </PreLoginLayout>
        } />
      </Routes>
    </Router>
  );
};

export default App;