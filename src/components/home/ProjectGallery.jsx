import React from 'react';
import { projectsData } from '../../data/homeData';
import './Home.css';

function ProjectGallery() {
    return (
        <section className="gallery-section">
            <div className="container">
                <div className="section-header">
                    <h2>Proven Success</h2>
                    <p className="section-subtitle">Real-world applications powering industries</p>
                </div>

                <div className="gallery-grid">
                    {projectsData.map((project) => (
                        <div key={project.id} className="project-card">
                            <img src={project.image} alt={project.title} loading="lazy" />
                            <div className="project-overlay">
                                <div className="project-info">
                                    <span>{project.category}</span>
                                    <h3>{project.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectGallery;
