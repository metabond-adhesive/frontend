import React from 'react';
import Button from '@/components/ui/Button';
import { FileText, Download, Video, BookOpen } from 'lucide-react';

export default function TechnicalResources() {
  const resources = [
    {
      icon: FileText,
      title: 'Product Brochures',
      description: 'Comprehensive product specifications and selection guides.',
      file: 'metabond-brochure.pdf',
    },
    {
      icon: BookOpen,
      title: 'Safety Data Sheets',
      description: 'Complete safety and handling information for all formulations.',
      file: 'safety-datasheets.pdf',
    },
    {
      icon: Video,
      title: 'Application Guides',
      description: 'Step-by-step tutorials and best practices for optimal results.',
      file: 'application-guide.pdf',
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Visual demonstrations of proper application techniques.',
      file: 'tutorial-videos',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Technical Resources</h2>
          <p className="text-lg text-gray-600">Access documentation, guides, and support materials.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="mb-4">
                  <Icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow">{resource.description}</p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(`/assets/${resource.file}`, '_blank')}
                  className="flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
