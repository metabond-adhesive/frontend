import React from 'react';
import { Link } from 'react-router-dom';
import { industriesData } from '../../data/homeData';
import { ArrowRight } from 'lucide-react';
import './Home.css';

function IndustrySolutions() {
    return (
        <section className="industry-section">
            <div className="container">
                <div className="section-header">
                    <h2>Solutions by Industry</h2>
                    <p className="section-subtitle">Engineered for performance across every sector</p>
                </div>

                <div className="industry-grid">
                    {industriesData.map((item) => (
                        <Link to={item.link} key={item.id} className="industry-card">
                            <div className="industry-image">
                                <img src={item.image} alt={item.title} loading="lazy" />
                                <div className="industry-overlay"></div>
                            </div>
                            <div className="industry-content">
                                <div className="industry-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                                <span className="learn-more">
                                    Learn more <ArrowRight size={16} />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default IndustrySolutions;
