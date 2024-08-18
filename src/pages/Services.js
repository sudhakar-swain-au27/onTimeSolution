import React from 'react';
import services from '../data/servicesData';

const Services = () => {
  return (
    <div className="py-12 px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Services</h2>
      <p className="text-lg text-gray-600 mb-12 text-center">
        We offer a range of services to help you manage and track your projects effectively.
      </p>
      <div className="space-y-8">
        {services.map((service) => (
          <div key={service.title} className="bg-white rounded-lg shadow-md p-6">
            <a
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-semibold text-blue-600 hover:underline mb-4 inline-block"
            >
              {service.title}
            </a>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {service.items.map((item) => (
                <div key={item.title} className="p-4 rounded-lg shadow-md border border-gray-200">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={item.imgSrc}
                      alt={item.title}
                      className="w-full h-32 object-cover rounded-lg border-2 border-gray-300 mb-4"
                    />
                    <h4 className="text-xl font-semibold text-gray-700 mb-2 hover:underline">
                      {item.title}
                    </h4>
                  </a>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
