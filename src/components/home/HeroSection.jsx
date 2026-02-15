import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Body.css'; // Keeping original hero styles for now

function HeroSection() {
    const navigate = useNavigate();

    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1>Leading the Future of <span>Adhesive Technology</span></h1>
                <p>Metabond delivers cutting-edge adhesive solutions for industries worldwide</p>

                <div className="hero-cta-group">
                    <button className="cta-btn" onClick={() => navigate('/products')}>Explore Our Products</button>
                    <button className="cta2-btn">Download Tech Brochures</button>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
