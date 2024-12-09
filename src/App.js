import React from 'react';
import { BrowserRouter as Router } from "react-router-dom"; 
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import KeyFeatures from './components/KeyFeatures';
import Hero from './components/Hero';


const App = () => {
  return (
    <Router> 
      <div>
        <Navbar />
        <Hero />
        <KeyFeatures />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
