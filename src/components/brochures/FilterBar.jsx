import React from 'react';
import './Brochures.css';

const FilterBar = ({
    searchTerm,
    onSearchChange,
    selectedCategory,
    onCategoryChange,
    selectedType,
    onTypeChange,
    categories,
    types
}) => {
    return (
        <div className="filter-bar-container">
            <div className="brochures-container">
                <div className="filter-row">

                    {/* Search Input */}
                    <div className="search-wrapper">
                        <i className="fas fa-search"></i>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search brochures, TDS, guides..."
                            value={searchTerm}
                            onChange={(e) => onSearchChange(e.target.value)}
                        />
                    </div>

                    {/* Filter Controls */}
                    <div className="filter-controls">

                        <select
                            className="filter-select"
                            value={selectedCategory}
                            onChange={(e) => onCategoryChange(e.target.value)}
                        >
                            <option value="All">All Categories</option>
                            {categories.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>

                        <select
                            className="filter-select"
                            value={selectedType}
                            onChange={(e) => onTypeChange(e.target.value)}
                        >
                            <option value="All">All Document Types</option>
                            {types.map(type => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>

                        <select className="filter-select" defaultValue="recent">
                            <option value="recent">Sort: Recent</option>
                            <option value="az">Sort: A-Z</option>
                            <option value="popular">Sort: Popular</option>
                        </select>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterBar;
