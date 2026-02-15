import React from 'react';
import './Brochures.css';

const BrochureHero = () => {
    return (
        <div className="brochure-hero">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1>
                    Technical Resources
                    <span>Brochures & Documentation</span>
                </h1>
                <p className="hero-subtitle">
                    Access comprehensive product information, safety documentation, and application guides for all Metabond solutions.
                </p>


            </div>
        </div>
    );
};

export default BrochureHero;
