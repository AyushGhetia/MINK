import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  const handleVideoPlay = () => {
    const videoElement = document.getElementById('hero-video');
    if (videoElement) {
      videoElement.play();
    }
  };

  return (
    <div className="hero-section" id="home">
      <img src="/assets/Car_image.png" alt="Car" className="background-image" />
      <div className="overlay"></div>
      <div className="content">
        <h1 className="title">Changing the Future of Mobility</h1>
        <p className="subtitle">Next Generation Compact Car</p>
        <button className="play-button" onClick={handleVideoPlay}>
          ▶
        </button>
        <div className="nav-section">
          <div className="nav-box">
            <img src="/assets/logo.png" alt="Logo" className="nav-logo" />
            <ul className="nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="#product">Product</a></li>
              <li><a href="/about">About Us</a></li>
            </ul>
            <button className="reserve-now">Reserve Now</button>
          </div>
          <button className="invest-mink">Invest in Mink EV</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
