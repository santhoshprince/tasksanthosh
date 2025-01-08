import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from 'lucide-react';
import './header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get the current location

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="Logo.png" alt="Logo" className="logo-img" />
        </Link>
      </div>

      <button 
        className="hamburger-button"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <Menu size={24} />
      </button>

      <div 
        className={`overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={handleLinkClick}
      />

      <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
        <button 
          className="close-button"
          onClick={handleLinkClick}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        <ul className="nav-links">
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={handleLinkClick}>About Us</Link></li>
          <li><Link to="/machinery" className={location.pathname === '/machinery' ? 'active' : ''} onClick={handleLinkClick}>Machinery</Link></li>
          <li><Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''} onClick={handleLinkClick}>Gallery</Link></li>
          <li><Link to="/careers" className={location.pathname === '/careers' ? 'active' : ''} onClick={handleLinkClick}>Careers</Link></li>
        </ul>

        <div className="mobile-contact-button">
          <button className="btn btn-primary" onClick={handleLinkClick}>
            Contact Us
          </button>
        </div>
      </nav>

      <div className="contact-button">
        <button className="btn btn-primary">Contact Us</button>
      </div>
    </header>
  );
};

export default Header;
