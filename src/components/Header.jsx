import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((s) => !s);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    // lock body scroll when menu is open
    document.body.classList.toggle('menu-open', isMenuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [isMenuOpen]);

  return (
    <>
      <header className="header">
        <div className="header-container">
          <Link to="/" className="logo" aria-label="Metabond home" onClick={closeMenu}>
            <img src={logo} alt="Metabond" className="logo-image"/>
            <p className="tagline">Advanced Adhesive Solutions</p>
          </Link>

          {/* desktop nav */}
          <nav className="nav-menu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Product Range</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </nav>

          {/* hamburger for mobile */}
          <button
            className={`hamburger ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </header>

      {/* backdrop */}
      <div
        className={`side-panel-backdrop ${isMenuOpen ? 'open' : ''}`}
        onClick={closeMenu}
        aria-hidden={!isMenuOpen}
      ></div>

      {/* side panel */}
      <aside id="mobile-navigation" className={`side-panel ${isMenuOpen ? 'open' : ''}`} aria-hidden={!isMenuOpen}>
        <nav className="nav-menu">
          <ul>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/products" onClick={closeMenu}>Product Range</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Header;
