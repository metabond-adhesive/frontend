import React from 'react';
import './Footer.css';
import logoFooter from '../assets/logo_footer.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <Link to="/" className="logo" aria-label="Metabond home">
            <img src={logoFooter} alt="Metabond" className="logo-image" />
            <p className="tagline">Advanced Adhesive Solutions</p>
          </Link>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/products">Product Range</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="https://linkedin.com">LinkedIn</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
            <li><a href="https://facebook.com">Facebook</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Metabond. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
