import React from 'react';
import './Header.css';
import logo from '../assets/logo.png';

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
            <li><a href="#product-range">Product Range</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#about">About Us</a></li>
            <li><button className="login-btn">Login/Sign Up</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
