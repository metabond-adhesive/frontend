import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllProducts } from '../../data/productsData';
import '../Body.css';

function ProductCarousel() {
    const navigate = useNavigate();
    const products = getAllProducts();
    const [activeIndex, setActiveIndex] = useState(0);
    const itemRefs = useRef([]);
    const rowRef = useRef(null);
    const [isSmall, setIsSmall] = useState(
        typeof window !== 'undefined' ? window.innerWidth <= 600 : false
    );

    useEffect(() => {
        const el = itemRefs.current[activeIndex];
        if (el && typeof el.scrollIntoView === 'function') {
            el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
    }, [activeIndex]);

    useEffect(() => {
        const handleResize = () => setIsSmall(window.innerWidth <= 600);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const prev = () => setActiveIndex((i) => Math.max(0, i - 1));
    const next = () => setActiveIndex((i) => Math.min(products.length - 1, i + 1));

    const handleProductClick = (productId, event) => {
        event.stopPropagation();
        navigate(`/product/${productId}`);
    };

    return (
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
    );
}

export default ProductCarousel;
