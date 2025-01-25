import React from "react";
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className="footer-page">
      <div className="trusted-companies">
        <img src="/assets/image.png" alt="Trusted by Greatest Companies" />
      </div>
      <footer>
        <div className="footer-content">
          <div className="logo">
            <img src="/assets/mink.png" alt="Company Logo" />
          </div>
          <div className="section">
            <h3>Company</h3>
            <br/><br/>
            <a href="#Product">Product</a>
            <br/><br/>
            <a href="About">About Us</a>
            <br/><br/>
            <a href="#Invest">Invest</a>
            <br/><br/>
            <a href="#Reserve">Reserve</a>
            <br/><br/>
          </div>
          <div className="section">
            <h3>Help</h3>
            <br/><br/>
            <a href="#Support">Customer Support</a>
            <br/><br/>
            <a href="#Terms">Terms & Conditions</a>
            <br/><br/>
            <a href="#Policy">Privacy Policy</a>
            <br/><br/>
          </div>
          <div className="newsletter">
            <h3>Subscribe to Newsletter</h3>
            <input type="email" placeholder="Enter email address" />
            <button>Join</button>
            <div className="social-links">
                <p>Follow us on
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/facebook.jpeg" alt="Facebook" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/twitter.jpeg" alt="Twitter" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/linkedin.jpeg" alt="LinkedIn" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/instagram.jpeg" alt="Instagram" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/youtube.jpeg" alt="YouTube" />
                </a>
                </p>
        </div>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <div className="ruler"><hr/></div>
          &copy; Copyright 2024, All Rights Reserved by MinkEv
        </div>
    </div>
  );
};

export default Footer;
