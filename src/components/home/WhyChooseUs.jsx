import React from 'react';
import { featuresData } from '../../data/homeData';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function WhyChooseUs() {
    const navigate = useNavigate();

    return (
        <section className="why-us-section">
            <div className="container">
                <div className="why-us-grid">
                    <div className="why-us-content">
                        <div className="section-header" style={{ textAlign: 'left', margin: 0 }}>
                            <h2>Why Partner with Metabond?</h2>
                            <p className="section-subtitle" style={{ textAlign: 'left' }}>
                                We don't just supply adhesives; we deliver integrated bonding solutions that drive your business forward.
                            </p>
                        </div>
                        <button className="cta-btn" onClick={() => navigate('/about')}>
                            About Our Company
                        </button>
                    </div>

                    <div className="features-list">
                        {featuresData.map((feature) => (
                            <div key={feature.id} className="feature-item">
                                <div className="feature-icon">
                                    {feature.icon}
                                </div>
                                <div className="feature-text">
                                    <h3>{feature.title}</h3>
                                    <p>{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;
