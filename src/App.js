import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
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

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <WhyUs />
              <DemoSection />
              <KeyFeatures />
              <FAQSection />
            </>
          } />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/customer-support" element={<CustomerSupport />} />
          <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<BlogPost />} />
        <Route path= "/events-and-webinars" element={<EventsandWebinars />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;