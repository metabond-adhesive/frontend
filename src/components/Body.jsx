import React from 'react';
import HeroSection from './home/HeroSection';
import StatsSection from './home/StatsSection';
import IndustrySolutions from './home/IndustrySolutions';
import ProductCarousel from './home/ProductCarousel';
import WhyChooseUs from './home/WhyChooseUs';
import ProjectGallery from './home/ProjectGallery';
import LeadGen from './home/LeadGen';
import './Body.css';

function Body() {
  return (
    <main className="body">
      <HeroSection />
      <StatsSection />
      <IndustrySolutions />
      <ProductCarousel />
      <WhyChooseUs />
      <ProjectGallery />
      <LeadGen />
    </main>
  );
}

export default Body;
