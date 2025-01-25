import React from 'react';
import '../styles/About.css'; 

const About = () => {
  return (
    <div className="about-page">
      <div className="vision-container">
        <img src="/assets/vision.png" alt="Our Vision" className="vision-fullscreen-image" />
      </div>
      <div className="about-we">
        <img src="/assets/about02.png" alt="Why What How" className="about02-image" />
      </div>
      <div className='journey'>
        <img src="/assets/journey.jpg" alt="Our Journey" className="our journey-image" />
      </div>
      <div className='our-team'>
        <img src="/assets/team.jpg" alt="Our Team" className="team-image" />
      </div>
    </div>
  );
};

export default About;
