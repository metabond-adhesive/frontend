import React from 'react';
import Hero from '@/components/sections/Hero';
import ValueProposition from '@/components/sections/ValueProposition';
import ProductCategories from '@/components/sections/ProductCategories';
import FeaturesAndBenefits from '@/components/sections/FeaturesAndBenefits';
import TechnicalResources from '@/components/sections/TechnicalResources';

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <ValueProposition />
      <ProductCategories />
      <FeaturesAndBenefits />
      <TechnicalResources />
    </main>
  );
}
