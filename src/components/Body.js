import React, { useState, useRef, useEffect } from 'react';
import './Body.css';

function Body() {
  // Product list (10 items)
  const products = [
    { id: 1, name: 'Metabond S1', tag: 'Structural epoxy', icon: '🧪', desc: 'High-strength bonding for critical applications' },
    { id: 2, name: 'Metabond S2', tag: 'High-temp adhesive', icon: '🔥', desc: 'Withstands extreme temperatures up to 250°C' },
    { id: 3, name: 'Metabond S3', tag: 'Fast cure adhesive', icon: '⚡', desc: '15-minute set time for rapid assembly' },
    { id: 4, name: 'Metabond S4', tag: 'Automotive grade', icon: '🚗', desc: 'OEM-approved for vehicle manufacturing' },
    { id: 5, name: 'Metabond S5', tag: 'Construction sealant', icon: '🏗️', desc: 'Weather-resistant for building exteriors' },
    { id: 6, name: 'Metabond S6', tag: 'Chemical resistant', icon: '🧴', desc: 'Protects against acids and solvents' },
    { id: 7, name: 'Metabond S7', tag: 'Electronics grade', icon: '🔌', desc: 'ESD-safe for sensitive components' },
    { id: 8, name: 'Metabond S8', tag: 'Marine adhesive', icon: '⚓', desc: 'Salt water and UV resistant' },
    { id: 9, name: 'Metabond S9', tag: 'Flexible bonding', icon: '🧵', desc: 'Maintains elasticity under stress' },
    { id: 10, name: 'Metabond S10', tag: 'Specialty formulation', icon: '🔬', desc: 'Custom chemistry for unique needs' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);
  const rowRef = useRef(null);

  useEffect(() => {
    const el = itemRefs.current[activeIndex];
    if (el && typeof el.scrollIntoView === 'function') {
      el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [activeIndex]);

  const prev = () => setActiveIndex((i) => Math.max(0, i - 1));
  const next = () => setActiveIndex((i) => Math.min(products.length - 1, i + 1));

  return (
    <main className="body">
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Leading the Future of <span>Adhesive Technology</span></h1>
          <p>Metabond delivers cutting-edge adhesive solutions for industries worldwide</p>
          <button className="cta-btn">Explore Our Products</button>
        </div>
      </section>

      <section className="features product-range-section" id="product-range" aria-label="Product range">
        <div className="full-width-container">
          <h2>Our Product Range</h2>
          <p className="section-subtitle">Innovative adhesives engineered for every application</p>

          <div className="product-range-wrapper">
            <button
              className="scroll-arrow left"
              onClick={prev}
              aria-label="Previous product"
              disabled={activeIndex === 0}
            >
              ‹
            </button>

            <div className="product-row" ref={rowRef} role="list">
              {products.map((p, idx) => (
                <div
                  key={p.id}
                  role="listitem"
                  ref={(el) => (itemRefs.current[idx] = el)}
                  className={`product-item ${idx === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(idx)}
                  tabIndex={0}
                >
                  <div className="product-media" aria-hidden="true">{p.icon}</div>
                  <div className="product-info">
                    <h3 className="product-name">{p.name}</h3>
                    <p className="product-tag">{p.tag}</p>
                    <p className="product-desc">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="scroll-arrow right"
              onClick={next}
              aria-label="Next product"
              disabled={activeIndex === products.length - 1}
            >
              ›
            </button>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-background"></div>
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
        <div className="contact-background"></div>
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
