import React from 'react';
import './header.css';
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <header className="header">
      {/* Logo Section */}
      <div className="logo">
        <Link to="/">
        <img src="Logo.png" alt="Logo" className="logo-img" />
        </Link>
       
      </div>

      {/* Navigation Links */}
      <nav className="nav">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#machinery">Machinery</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#careers">Careers</a></li>
        </ul>
      </nav>

      {/* Contact Button */}
      <div className="contact-button">
        <button className="btn btn-primary">Contact</button>
      </div>
    </header>
  );
};

export default Header;
