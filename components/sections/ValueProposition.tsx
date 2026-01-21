import React from 'react';
import { Zap, Shield, Leaf } from 'lucide-react';

export default function ValueProposition() {
  const values = [
    {
      icon: Zap,
      title: 'Superior Strength',
      description: 'Engineered for maximum bonding power across diverse materials and applications.',
    },
    {
      icon: Shield,
      title: 'High Durability',
      description: 'Withstands extreme temperatures, moisture, and mechanical stress long-term.',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly & Safe',
      description: 'Low VOC formulations with certified safety ratings for workers and environment.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-blue-100 rounded-full">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
