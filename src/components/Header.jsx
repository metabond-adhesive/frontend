import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <img src="/path/to/logo.png" alt="Logo" className="logo-image" />
            <div>
              <h1>MetaBond</h1>
              <p className="tagline">Your tagline here</p>
            </div>
          </div>

          {/* Hamburger button - visible on mobile */}
          <button 
            className={`hamburger ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          {/* Desktop navigation - hidden on mobile */}
          <nav className="nav-menu">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Mobile side panel */}
      <div 
        className={`side-panel-backdrop ${isMenuOpen ? 'open' : ''}`}
        onClick={closeMenu}
        aria-hidden={!isMenuOpen}
      ></div>

      <div className={`side-panel ${isMenuOpen ? 'open' : ''}`}>
        <nav className="nav-menu">
          <ul>
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#services" onClick={closeMenu}>Services</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
