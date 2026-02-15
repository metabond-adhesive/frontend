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

                <div className="hero-stats">
                    <div className="stat-pill">
                        <i className="far fa-file-alt"></i> 40+ Documents
                    </div>
                    <div className="stat-pill">
                        <i className="fas fa-box-open"></i> 10 Product Lines
                    </div>
                    <div className="stat-pill">
                        <i className="fas fa-check-circle"></i> Always Updated
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrochureHero;
