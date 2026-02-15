import React from 'react';
import './Brochures.css';

const BrochureCard = ({ doc, onDownload, onQuickView }) => {
    // Helper to determine badge color based on type
    const getBadgeClass = (type) => {
        switch (type) {
            case 'Product Brochure': return 'badge-brochure';
            case 'Technical Data Sheet': return 'badge-tds';
            case 'Safety Data Sheet': return 'badge-sds';
            case 'Application Guide': return 'badge-guide';
            default: return 'badge-default';
        }
    };

    return (
        <div className="brochure-card">
            <div className="card-thumbnail-container" onClick={() => onQuickView(doc)}>
                <img
                    src={doc.thumbnail}
                    alt={doc.title}
                    className="card-thumbnail"
                    loading="lazy"
                />
                <div className="card-overlay">
                    <button className="btn-quick-view">
                        <i className="fas fa-eye"></i> Quick View
                    </button>
                </div>
            </div>

            <div className="card-content">
                <span className={`card-badge ${getBadgeClass(doc.type)}`}>
                    {doc.type}
                </span>

                <h3 className="card-title" title={doc.title}>
                    {doc.title}
                </h3>

                <div className="card-meta">
                    <span className="meta-item">
                        <i className="far fa-file-pdf"></i> {doc.fileSize}
                    </span>
                    <span className="meta-separator">•</span>
                    <span className="meta-item">
                        {doc.language}
                    </span>
                    <span className="meta-separator">•</span>
                    <span className="meta-item">
                        {doc.version}
                    </span>
                </div>

                <p className="card-description">
                    {doc.description}
                </p>

                <div className="card-actions">
                    <button
                        className="btn-download"
                        onClick={() => onDownload(doc)}
                    >
                        <i className="fas fa-download"></i> Download
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BrochureCard;
