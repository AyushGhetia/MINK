import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Problems from './components/Problems';
import Values from './components/Values';
import Features from './components/Features';
import Vision from './components/Vision';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <Problems />
                <Values />
                <Features />
                <Vision />
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <About />
                {/* <Footer /> */}
                <Contact />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
