import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, getRelatedProducts } from '../data/productsData';
import './ProductDetail.css';
import Breadcrumb from '../components/Breadcrumb';

function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedImage, setSelectedImage] = useState(0);

  // Get product data from centralized data file
  const product = getProductById(parseInt(productId));
  const relatedProductsData = getRelatedProducts(parseInt(productId));

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="overview-content">
            <div className="product-description">
              <h3>About {product.name}</h3>
              <p>{product.description}</p>
            </div>

            <div className="features-grid">
              <h3>Key Features</h3>
              <div className="features-list">
                {product.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="applications-section">
              <h3>Typical Applications</h3>
              <div className="applications-grid">
                {product.applications.map((app, index) => (
                  <div key={index} className="application-card">
                    <div className="app-icon">🔧</div>
                    <p>{app}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'specifications':
        return (
          <div className="specifications-content">
            <h3>Technical Specifications</h3>
            <div className="specs-table">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="spec-row">
                  <div className="spec-label">{key}</div>
                  <div className="spec-value">{value}</div>
                </div>
              ))}
            </div>

            <div className="packaging-info">
              <h3>Available Packaging</h3>
              <div className="packaging-list">
                {product.packaging.map((pkg, index) => (
                  <div key={index} className="package-item">
                    <svg className="package-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                    </svg>
                    <span>{pkg}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'howtouse':
        return (
          <div className="howtouse-content">
            <h3>Application Instructions</h3>
            <p className="instruction-intro">Follow these steps for optimal bonding performance:</p>
            
            <div className="steps-container">
              {product.howToUse.map((step) => (
                <div key={step.step} className="step-card">
                  <div className="step-header">
                    <div className="step-number">Step {step.step}</div>
                    <h4>{step.title}</h4>
                  </div>
                  <div className="step-content">
                    <div className="step-image">
                      <img src={step.image} alt={step.title} />
                    </div>
                    <p className="step-description">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="safety-notice">
              <h4>⚠️ Safety Precautions</h4>
              <ul>
                <li>Always work in a well-ventilated area</li>
                <li>Wear appropriate personal protective equipment (PPE)</li>
                <li>Avoid skin and eye contact</li>
                <li>Keep away from heat sources and open flames</li>
                <li>Refer to SDS for detailed safety information</li>
              </ul>
            </div>
          </div>
        );

      case 'downloads':
        return (
          <div className="downloads-content">
            <h3>Technical Documentation</h3>
            <p>Download product information, safety data, and technical guides</p>
            
            <div className="downloads-grid">
              {product.downloads.map((doc, index) => (
                <div key={index} className="download-card">
                  <div className="download-icon">📄</div>
                  <div className="download-info">
                    <h4>{doc.name}</h4>
                    <p className="download-meta">{doc.type} • {doc.size}</p>
                  </div>
                  <button className="download-btn">
                    <svg className="download-svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="product-detail-page">
      {/* Breadcrumb Navigation */}
        <div className="breadcrumb-container">
          <Breadcrumb
            items={[
              { label: 'Home', path: '/' },
              { label: 'Products', path: '/products' },
              { label: product.name, path: `/product/${product.id}` }
            ]}
          />
        </div>

      {/* Product Hero Section */}
      <div className="product-hero">
        <div className="product-gallery">
          <div className="main-image">
            <img src={product.images[selectedImage]} alt={product.name} />
          </div>
          <div className="thumbnail-list">
            {product.images.map((img, index) => (
              <div
                key={index}
                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={img} alt={`${product.name} view ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="product-summary">
          <div className="product-category">{product.category}</div>
          <h1 className="product-title">{product.name}</h1>
          <p className="product-tagline">{product.tagline}</p>
          
          <div className="quick-specs">
            <div className="quick-spec-item">
              <span className="spec-icon">🌡️</span>
              <div>
                <div className="spec-label">Temperature Range</div>
                <div className="spec-value">{product.specifications['Temperature Range']}</div>
              </div>
            </div>
            <div className="quick-spec-item">
              <span className="spec-icon">⏱️</span>
              <div>
                <div className="spec-label">Pot Life</div>
                <div className="spec-value">{product.specifications['Pot Life']}</div>
              </div>
            </div>
            <div className="quick-spec-item">
              <span className="spec-icon">💪</span>
              <div>
                <div className="spec-label">Tensile Strength</div>
                <div className="spec-value">{product.specifications['Tensile Strength']}</div>
              </div>
            </div>
          </div>

          <div className="product-actions">
            <button className="btn-primary">Request Quote</button>
            <button className="btn-secondary">Contact Technical Support</button>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="product-tabs">
        <div className="tabs-header">
          <button
            className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            className={`tab-btn ${activeTab === 'specifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('specifications')}
          >
            Technical Specs
          </button>
          <button
            className={`tab-btn ${activeTab === 'howtouse' ? 'active' : ''}`}
            onClick={() => setActiveTab('howtouse')}
          >
            How to Use
          </button>
          <button
            className={`tab-btn ${activeTab === 'downloads' ? 'active' : ''}`}
            onClick={() => setActiveTab('downloads')}
          >
            Downloads
          </button>
        </div>

        <div className="tabs-content">
          {renderContent()}
        </div>
      </div>

      {/* Related Products */}
      <div className="related-products">
        <h3>Related Products</h3>
        <div className="related-grid">
          {relatedProductsData.map((relatedProd) => (
            <div
              key={relatedProd.id}
              className="related-card"
              onClick={() => navigate(`/product/${relatedProd.id}`)}
            >
              <div className="related-image">
                <img 
                  src={`https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&sig=${relatedProd.id}`} 
                  alt={relatedProd.name} 
                />
              </div>
              <h4>{relatedProd.name}</h4>
              <p>{relatedProd.tag}</p>
              <button className="view-btn">View Details →</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
