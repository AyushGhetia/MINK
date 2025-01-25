import React from "react";
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/assets/image2.png" alt="Mink EV Logo" className="logo-image" />
      </div>
      <div className="menu-icon">
        <div className="menu-button">
          <div className="equal-line"></div>
          <div className="equal-line"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
