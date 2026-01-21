import React from 'react';
import Button from '@/components/ui/Button';
import { Package, Droplets, Wrench } from 'lucide-react';

export default function ProductCategories() {
  const products = [
    {
      icon: Package,
      name: 'Structural Adhesives',
      usp: 'Maximum load-bearing capacity for heavy-duty industrial applications.',
      link: '/products/structural',
    },
    {
      icon: Droplets,
      name: 'Sealants & Encapsulants',
      usp: 'Waterproof protection with long-lasting flexibility and elasticity.',
      link: '/products/sealants',
    },
    {
      icon: Wrench,
      name: 'Application Specific',
      usp: 'Optimized formulations for wood, metal, concrete, and composite materials.',
      link: '/products/specialized',
    },
  ];

  return (
    <section id="products" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Product Categories</h2>
          <p className="text-lg text-gray-600">Discover our comprehensive adhesive solutions.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-8"
              >
                <div className="mb-6">
                  <Icon className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{product.usp}</p>
                <Button variant="outline" size="sm" onClick={() => (window.location.href = product.link)}>
                  Learn More →
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
