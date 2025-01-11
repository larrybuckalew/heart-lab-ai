import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Our Services - Heart Lab AI',
  description: 'Empowering individuals with advanced AI-driven health insights and proactive cardiovascular care',
  keywords: 'AI services, health insights, cardiovascular care, predictive health',
};

const services = [
  {
    title: 'Cardiovascular Risk Assessment',
    description: 'Comprehensive AI-powered analysis of heart health risks',
    icon: '❤️',
    features: [
      'Personalized risk prediction',
      'Machine learning algorithms',
      'Detailed health insights'
    ]
  },
  {
    title: 'Predictive Health Modeling',
    description: 'Advanced forecasting of potential health trajectories',
    icon: '📈',
    features: [
      'Long-term health projection',
      'Lifestyle impact analysis',
      'Preventive recommendations'
    ]
  },
  {
    title: 'Continuous Health Monitoring',
    description: 'Real-time tracking and analysis of cardiovascular metrics',
    icon: '🩺',
    features: [
      'Integrated health tracking',
      'Automated risk alerts',
      'Personalized health dashboard'
    ]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-6">
          Our Comprehensive Services
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Empowering individuals with advanced AI-driven health insights and proactive cardiovascular care
        </p>
      </header>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6 text-center"
            >
              <div className="text-6xl mb-6 flex items-center justify-center">
                {service.icon}
              </div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <ul className="space-y-3 text-left pl-6 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex} 
                    className="flex items-center text-blue-700"
                  >
                    <svg 
                      className="w-5 h-5 mr-2 text-blue-500" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link 
                href="/contact" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Health?
          </h2>
          <p className="text-xl mb-8">
            Discover personalized insights with Heart Lab AI
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-blue-900 px-8 py-4 rounded-lg text-xl hover:bg-blue-50 transition"
          >
            Start Your Health Journey
          </Link>
        </div>
      </section>
    </div>
  );
}