import React from 'react';
import { services } from '../data/services';
import * as LucideIcons from 'lucide-react';

const Services: React.FC = () => {
  // Dynamic icon rendering from Lucide React
  const renderIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon className="h-12 w-12 text-blue-600" /> : null;
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">
            My <span className="text-blue-600">Services</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            I offer a comprehensive range of services to help businesses establish a strong online presence
            and achieve their digital goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-50 p-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-2"
            >
              <div className="mb-6">
                {renderIcon(service.icon)}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;