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
    </main>
  );
}

export default Body;
