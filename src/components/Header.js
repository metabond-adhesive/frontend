import React from 'react';
import './Header.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="Metabond" className="logo-image" />
          <p className="tagline">Advanced Adhesive Solutions</p>
        </div>
        <nav className="nav-menu">
          <ul>
            <li><Link to="/#product-range">Product Range</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
