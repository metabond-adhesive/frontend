import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function LeadGen() {
    const navigate = useNavigate();

    return (
        <section className="lead-gen-section">
            <div className="lead-gen-content">
                <h2>Ready to start your next project?</h2>
                <p>Get in touch with our experts to find the perfect bonding solution for your specific needs.</p>
                <button className="lead-gen-btn" onClick={() => navigate('/contact')}>
                    Request a Consultation
                </button>
            </div>
        </section>
    );
}

export default LeadGen;
