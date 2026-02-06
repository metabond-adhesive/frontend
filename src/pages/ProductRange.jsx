import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllProducts } from '../data/productsData';
import Breadcrumb from '../components/Breadcrumb';
import './ProductRange.css';
import './ProductRange.css';

function ProductRange() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const allProducts = getAllProducts();

  // Define product categories
  const categories = [
    { id: 'all', name: 'All Products', icon: '📦' },
    { id: 'structural', name: 'Structural Adhesives', icon: '🏗️' },
    { id: 'specialty', name: 'Specialty Formulations', icon: '🔬' },
    { id: 'industrial', name: 'Industrial Solutions', icon: '🏭' },
    { id: 'construction', name: 'Construction & Sealants', icon: '🧱' },
  ];

  // Categorize products
  const productCategories = {
    structural: [1, 2, 3], // S1 (Structural), S2 (High-temp), S3 (Fast cure)
    specialty: [7, 10], // S7 (Electronics), S10 (Specialty)
    industrial: [4, 6, 8], // S4 (Automotive), S6 (Chemical resistant), S8 (Marine)
    construction: [5, 9], // S5 (Construction sealant), S9 (Flexible bonding)
  };

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'all' 
    ? allProducts 
    : allProducts.filter(p => productCategories[selectedCategory]?.includes(p.id));

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Product Range', path: '/products' }
  ];

  return (
    <div className="product-range-page">
      {/* Breadcrumb */}
      <div className="breadcrumb-container" style={{ maxWidth: '90%', margin: '0 auto', padding: 'clamp(0.75rem, 2vw, 1.5rem) clamp(1rem, 4vw, 4rem) 0' }}>
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* Hero Section */}
      <section className="products-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Our Product Range
            <span className="hero-subtitle">Advanced Adhesive Solutions</span>
          </h1>
          <p className="hero-description">
            Comprehensive solutions engineered for every industrial application
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="products-container">

        {/* Category Filter */}
        <div className="category-filter">
          <h2>Browse by Category</h2>
          <div className="category-buttons">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span className="cat-icon">{cat.icon}</span>
                <span className="cat-name">{cat.name}</span>
                <span className="cat-count">
                  ({cat.id === 'all' ? allProducts.length : (productCategories[cat.id]?.length || 0)})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="products-grid-section">
          <div className="section-header">
            <h3>
              {selectedCategory === 'all' 
                ? `All Products (${filteredProducts.length})` 
                : `${categories.find(c => c.id === selectedCategory)?.name} (${filteredProducts.length})`}
            </h3>
          </div>

          <div className="products-grid">
            {filteredProducts.map(product => (
              <div 
                key={product.id} 
                className="product-card"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <div className="product-card-icon">{product.icon}</div>
                <div className="product-card-content">
                  <h4 className="product-card-name">{product.name}</h4>
                  <p className="product-card-tag">{product.tag}</p>
                  <p className="product-card-desc">{product.desc}</p>
                  <button className="view-details-btn">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="no-products">
              <p>No products found in this category.</p>
            </div>
          )}
        </div>

        {/* Product Features */}
        <section className="product-features">
          <h2>Why Choose Metabond?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🏆</div>
              <h3>Premium Quality</h3>
              <p>Industry-leading formulations tested to the highest standards</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔬</div>
              <h3>Advanced Technology</h3>
              <p>Cutting-edge chemistry backed by extensive R&D</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🌍</div>
              <h3>Global Standards</h3>
              <p>Compliant with international quality and safety regulations</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🤝</div>
              <h3>Technical Support</h3>
              <p>Expert guidance for application and troubleshooting</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProductRange;
