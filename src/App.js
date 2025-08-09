import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import KeyFeatures from './components/KeyFeatures';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import WhyUs from "./components/WhyUs";
import FAQSection from "./components/FAQSection";
import ContactUsPage from "./components/ContactUsPage";

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
              <KeyFeatures />
              <FAQSection />
            </>
          } />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;