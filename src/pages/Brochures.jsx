import React, { useState, useMemo } from 'react';
import BrochureHero from '../components/brochures/BrochureHero';
import FilterBar from '../components/brochures/FilterBar';
import BrochureCard from '../components/brochures/BrochureCard';
import Breadcrumb from '../components/Breadcrumb';
import { brochuresData } from '../data/brochuresData';
import '../components/brochures/Brochures.css';

const Brochures = () => {
    // State for filters
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedType, setSelectedType] = useState('All');

    // Extract unique categories and types for dropdowns
    const categories = [...new Set(brochuresData.map(d => d.category))].sort();
    const types = [...new Set(brochuresData.map(d => d.type))].sort();

    // Filter Logic
    const filteredDocuments = useMemo(() => {
        return brochuresData.filter(doc => {
            const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                doc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                doc.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

            const matchesCategory = selectedCategory === 'All' || doc.category === selectedCategory;
            const matchesType = selectedType === 'All' || doc.type === selectedType;

            return matchesSearch && matchesCategory && matchesType;
        });
    }, [searchTerm, selectedCategory, selectedType]);

    // Handlers
    const handleDownload = (doc) => {
        // In a real app, this would trigger a file download
        alert(`Downloading: ${doc.title}\n(${doc.fileSize})`);
        console.log(`Downloading file from: ${doc.downloadUrl}`);
    };

    const handleQuickView = (doc) => {
        alert(`Quick View for: ${doc.title}\nDescription: ${doc.description}`);
    };

    return (
        <div className="brochures-page fade-in">
            {/* Breadcrumb */}
            <div className="breadcrumb-container" style={{ maxWidth: '90%', margin: '0 auto', padding: 'clamp(0.75rem, 2vw, 1.5rem) clamp(1rem, 4vw, 4rem) 0' }}>
                <Breadcrumb items={[
                    { label: 'Home', path: '/' },
                    { label: 'Technical Brochures', path: '/brochures' }
                ]} />
            </div>

            <BrochureHero />

            <FilterBar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                selectedType={selectedType}
                onTypeChange={setSelectedType}
                categories={categories}
                types={types}
            />

            <div className="brochures-container">
                <div className="results-count">
                    Showing {filteredDocuments.length} document{filteredDocuments.length !== 1 ? 's' : ''}
                </div>

                {filteredDocuments.length > 0 ? (
                    <div className="brochure-grid">
                        {filteredDocuments.map(doc => (
                            <BrochureCard
                                key={doc.id}
                                doc={doc}
                                onDownload={handleDownload}
                                onQuickView={handleQuickView}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="no-results">
                        <i className="far fa-frown fa-3x"></i>
                        <h3>No documents found</h3>
                        <p>Try adjusting your search or filters.</p>
                        <button
                            className="btn-reset"
                            onClick={() => {
                                setSearchTerm('');
                                setSelectedCategory('All');
                                setSelectedType('All');
                            }}
                        >
                            Reset Filters
                        </button>
                    </div>
                )}
            </div>

        </div>
    );
};

export default Brochures;
