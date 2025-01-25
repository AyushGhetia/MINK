import React from 'react';
import '../styles/Contact.css';  

const Contact = () => {
    return (
      <div className="contact-container">
        <div className="contact-left">
          <h1 className="contact-title">
            Let’s work <br /> <span className="highlight">together</span>
          </h1>
          <div className="contact-info">
            <p className="contact-phone">09876 543 210</p>
            <p className="contact-email">Info@Minkev.Co.Uk</p>
          </div>
          <div className="contact-locations">
            <div className="location">
              <h3>Worcester, UK</h3>
              <p>70 St.Philips Avenue</p>
              <p>Worcester Park, KT4 8LA</p>
            </div>
            <div className="location">
              <h3>Bengaluru, KA</h3>
              <p>Mini Forest JP Nagar</p>
              <p>Bengaluru, KA</p>
            </div>
          </div>
        </div>
  
        <div className="contact-right">
          <h2>Get In Touch</h2>
          <form className="contact-form">
            <input type="text" placeholder="Your Full Name *" required />
            <input type="email" placeholder="E-Mail Address *" required />
            <input type="tel" placeholder="Phone Number *" required />
            <select required>
              <option value="">Select Subject</option>
              <option value="general">General Inquiry</option>
              <option value="feedback">Feedback</option>
              <option value="other">Other</option>
            </select>
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit" className="contact-button">
              Send a message
            </button>
          </form>
        </div>
      </div>
    );
  };
  
export default Contact;