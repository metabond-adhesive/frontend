import React from 'react';
import './Body.css';

function Body() {
  return (
    <main className="body">
      <section className="hero">
        <div className="hero-content">
          <h1>Leading the Future of <span>Adhesive Technology</span></h1>
          <p>Metabond delivers cutting-edge adhesive solutions for industries worldwide</p>
          <button className="cta-btn">Explore Our Products</button>
        </div>
      </section>

      <section className="features" id="product-range">
        <div className="container">
          <h2>Our Product Range</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="icon">🔬</div>
              <h3>Industrial Adhesives</h3>
              <p>High-performance bonding solutions for manufacturing and assembly</p>
            </div>
            <div className="feature-card">
              <div className="icon">🏗️</div>
              <h3>Construction Solutions</h3>
              <p>Specialized adhesives for building and infrastructure projects</p>
            </div>
            <div className="feature-card">
              <div className="icon">⚙️</div>
              <h3>Automotive Grade</h3>
              <p>Precision adhesives engineered for the automotive industry</p>
            </div>
            <div className="feature-card">
              <div className="icon">💎</div>
              <h3>Specialty Chemicals</h3>
              <p>Custom formulations for unique bonding requirements</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="container">
          <h2>About Metabond</h2>
          <div className="about-content">
            <p>
              With over two decades of excellence in adhesive manufacturing, Metabond has established 
              itself as a trusted partner for industries demanding the highest quality bonding solutions.
            </p>
            <p>
              Our state-of-the-art research facilities and commitment to innovation enable us to 
              develop advanced adhesive technologies that meet the evolving needs of modern industry.
            </p>
            <div className="stats">
              <div className="stat">
                <h3>20+</h3>
                <p>Years of Excellence</p>
              </div>
              <div className="stat">
                <h3>500+</h3>
                <p>Products</p>
              </div>
              <div className="stat">
                <h3>50+</h3>
                <p>Countries Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <p className="contact-intro">
            Get in touch with our team to discuss your adhesive requirements
          </p>
          <div className="contact-info">
            <div className="info-item">
              <h4>📧 Email</h4>
              <p>info@metabond.com</p>
            </div>
            <div className="info-item">
              <h4>📞 Phone</h4>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="info-item">
              <h4>📍 Address</h4>
              <p>123 Industrial Park, Tech City, TC 12345</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Body;
