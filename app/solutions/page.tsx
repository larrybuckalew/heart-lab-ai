import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'AI Solutions - Heart Lab AI',
  description: 'AI solutions for small businesses - transform your business with artificial intelligence',
  keywords: 'AI solutions, business transformation, small business AI, artificial intelligence',
};

const AIApplications = [
  {
    title: 'Customer Insights & Personalization',
    description: 'Leverage AI to understand customer behavior, predict preferences, and create personalized experiences.',
    benefits: [
      'Targeted marketing strategies',
      'Improved customer retention',
      'Personalized product recommendations'
    ],
    icon: '🎯'
  },
  {
    title: 'Operational Efficiency',
    description: 'Automate routine tasks, optimize workflows, and reduce operational costs through intelligent automation.',
    benefits: [
      'Streamlined business processes',
      'Reduced manual work',
      'Increased productivity'
    ],
    icon: '⚙️'
  },
  {
    title: 'Predictive Analytics',
    description: 'Make data-driven decisions with AI-powered insights into market trends, inventory, and business performance.',
    benefits: [
      'Accurate demand forecasting',
      'Inventory optimization',
      'Strategic planning support'
    ],
    icon: '📈'
  },
  {
    title: 'Customer Support Enhancement',
    description: 'Implement AI chatbots and intelligent support systems to provide 24/7 customer service.',
    benefits: [
      'Instant customer response',
      'Reduced support costs',
      'Consistent customer experience'
    ],
    icon: '💬'
  }
];

export default function Solutions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-extrabold text-indigo-900 mb-6">
          AI Solutions for Small Business Transformation
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We help small businesses leverage artificial intelligence to drive innovation, 
          improve efficiency, and create competitive advantages in today's digital marketplace.
        </p>
      </header>

      {/* AI Applications Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {AIApplications.map((application, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <div className="text-6xl mb-4">{application.icon}</div>
              <h2 className="text-2xl font-bold text-indigo-900 mb-4">
                {application.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {application.description}
              </p>
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">
                Key Benefits:
              </h3>
              <ul className="space-y-2 text-gray-700">
                {application.benefits.map((benefit, benefitIndex) => (
                  <li 
                    key={benefitIndex} 
                    className="flex items-center"
                  >
                    <svg 
                      className="w-5 h-5 mr-2 text-indigo-500" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="bg-indigo-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Tailored AI Solutions for Your Business
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Every business is unique. We work closely with you to develop 
            custom AI strategies that align perfectly with your specific goals and challenges.
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-indigo-900 px-8 py-4 rounded-lg text-xl hover:bg-indigo-50 transition"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}