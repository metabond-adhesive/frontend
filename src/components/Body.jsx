import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllProducts } from '../data/productsData';
import './Body.css';

function Body() {
  const navigate = useNavigate();
  
  // Get products from centralized data
  const products = getAllProducts();

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

  const handleProductClick = (productId, event) => {
    event.stopPropagation();
    navigate(`/product/${productId}`);
  };

  const [isSmall, setIsSmall] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 600 : false
  );

  useEffect(() => {
    const handleResize = () => setIsSmall(window.innerWidth <= 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main className="body">
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Leading the Future of <span>Adhesive Technology</span></h1>
          <p>Metabond delivers cutting-edge adhesive solutions for industries worldwide</p>

          <div className="hero-cta-group">
            <button className="cta-btn">Explore Our Products</button>
            <button className="cta2-btn">Download Tech Brochures</button>
          </div>
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
                  onClick={(e) => handleProductClick(p.id, e)}
                  tabIndex={0}
                  style={{ cursor: 'pointer' }}
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
