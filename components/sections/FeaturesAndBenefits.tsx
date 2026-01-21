import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function FeaturesAndBenefits() {
  const features = [
    {
      title: 'Universal Surface Compatibility',
      description: 'Bonds seamlessly to metals, ceramics, plastics, composites, and elastomers.',
      points: ['Metal substrates', 'Ceramic materials', 'Plastic compounds', 'Composite structures'],
      side: 'left',
    },
    {
      title: 'Fast Cure Technology',
      description: 'Rapid initial tack and full cure in hours, not days.',
      points: ['15-min initial set', '24-hour full cure', 'Temperature dependent', 'No clamping required'],
      side: 'right',
    },
    {
      title: 'User-Friendly Application',
      description: 'Engineered for easy application with minimal equipment.',
      points: ['Simple mixing', 'Long working time', 'Clean application', 'Low odor formula'],
      side: 'left',
    },
    {
      title: 'Safety & Compliance',
      description: 'Certified with top-tier safety standards and eco-conscious ingredients.',
      points: ['ISO 9001 certified', 'Low VOC compliant', 'ROHS approved', 'Non-toxic formula'],
      side: 'right',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Features & Benefits</h2>
          <p className="text-lg text-gray-600">Why choose Metabond for your bonding needs.</p>
        </div>

        <div className="space-y-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                feature.side === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
              } gap-8 md:gap-12 items-center`}
            >
              {/* Image Placeholder */}
              <div className="md:w-1/2 h-80 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">📦</div>
                  <p className="text-gray-500">Feature Visual</p>
                </div>
              </div>

              {/* Content */}
              <div className="md:w-1/2">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-lg text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
