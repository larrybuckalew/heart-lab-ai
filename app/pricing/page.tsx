import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Pricing - Heart Lab AI Solutions',
  description: 'Flexible AI solution pricing for every business size. From startups to enterprises, find the perfect plan for your AI transformation journey.',
  keywords: 'AI pricing, business AI solutions, enterprise AI, AI consultation pricing',
};

const PricingPlans = [
  {
    name: 'Starter',
    price: 99,
    description: 'Perfect for small businesses taking their first steps with AI',
    features: [
      'Basic AI Consultation',
      'Initial Process Analysis',
      'Standard Automation Tools',
      'Monthly Performance Report'
    ],
    recommended: false
  },
  {
    name: 'Professional',
    price: 299,
    description: 'Comprehensive AI integration for growing businesses',
    features: [
      'Advanced AI Strategy Session',
      'Custom Process Automation',
      'Predictive Analytics Dashboard',
      'Quarterly Business Insights',
      'Priority Support'
    ],
    recommended: true
  },
  {
    name: 'Enterprise',
    price: 599,
    description: 'Full-scale AI transformation for ambitious businesses',
    features: [
      'Dedicated AI Transformation Team',
      'End-to-End AI Implementation',
      'Advanced Machine Learning Models',
      'Continuous Optimization',
      'Dedicated Success Manager',
      'Custom AI Solution Development'
    ],
    recommended: false
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      {/* Pricing Header */}
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-extrabold text-indigo-900 mb-6">
          Flexible AI Solutions for Every Business
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Choose a plan that fits your business needs. From small startups to growing enterprises, 
          we have AI solutions to drive your success.
        </p>
      </header>

      {/* Pricing Plans */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {PricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`
                bg-white rounded-xl shadow-lg p-6 transform transition 
                ${plan.recommended ? 'border-4 border-indigo-500 scale-105' : 'hover:shadow-xl'}
              `}
            >
              {plan.recommended && (
                <div className="text-center bg-indigo-500 text-white py-2 -mt-6 -mx-6 mb-6 rounded-t-lg">
                  Most Popular
                </div>
              )}
              <h2 className="text-2xl font-bold text-indigo-900 mb-4">
                {plan.name}
              </h2>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-extrabold text-indigo-600">${plan.price}</span>
                <span className="text-gray-500 ml-2">/ month</span>
              </div>
              <p className="text-gray-600 mb-6">
                {plan.description}
              </p>
              <ul className="mb-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex} 
                    className="flex items-center text-gray-700"
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
                    {feature}
                  </li>
                ))}
              </ul>
              <Link 
                href="/contact" 
                className={`
                  w-full text-center py-3 rounded-lg transition
                  ${plan.recommended 
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                    : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
                  }
                `}
              >
                {plan.recommended ? 'Get Started' : 'Learn More'}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Enterprise Solutions */}
      <section className="bg-indigo-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Every business is unique. Our team can develop a completely tailored AI strategy 
            that precisely matches your specific business needs and goals.
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-indigo-900 px-8 py-4 rounded-lg text-xl hover:bg-indigo-50 transition"
          >
            Contact Our Experts
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-indigo-900 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              question: 'How quickly can AI be implemented in my business?',
              answer: 'Implementation time varies based on your business complexity, but our Starter and Professional plans can show initial results within 4-8 weeks.'
            },
            {
              question: 'Do I need technical expertise to use these AI solutions?',
              answer: 'No. Our solutions are designed to be user-friendly, and we provide comprehensive support and training to ensure smooth adoption.'
            },
            {
              question: 'Can I upgrade or change my plan later?',
              answer: 'Absolutely! We offer flexible plans that can be adjusted as your business grows and your AI needs evolve.'
            }
          ].map((faq, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-indigo-900 mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}