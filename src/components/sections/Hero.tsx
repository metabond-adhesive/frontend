import React from 'react';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50"
        style={{
          backgroundImage: `url('data:image/svg+xml,...')`, // Abstract pattern
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Metabond — Precision Adhesive for Reliable Industrial & Commercial Use
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Strong, versatile, eco-conscious bonding solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="primary"
            size="lg"
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Products
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => window.open('/assets/metabond-brochure.pdf', '_blank')}
          >
            Download Brochure
          </Button>
        </div>
      </div>
    </section>
  );
}