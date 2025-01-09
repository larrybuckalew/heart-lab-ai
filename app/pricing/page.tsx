import React from 'react';

const PricingPage = () => {
  const plans = [
    {
      name: 'Starter',
      price: '499',
      description: 'Perfect for small businesses getting started with AI voice automation',
      features: [
        'AI Voice Assistant',
        'Up to 500 conversations/month',
        'Business hours support',
        'Basic analytics',
        'GoHighLevel integration',
        'Email support'
      ],
      highlighted: false
    },
    {
      name: 'Professional',
      price: '999',
      description: 'Ideal for growing businesses with moderate call volumes',
      features: [
        'Everything in Starter, plus:',
        'Up to 2,000 conversations/month',
        'Advanced voice customization',
        'Priority support',
        'Advanced analytics',
        'Multi-language support'
      ],
      highlighted: true
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-xl text-gray-600">Choose the plan that fits your business needs</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div key={plan.name} 
            className={`bg-white rounded-lg shadow-md overflow-hidden ${
              plan.highlighted ? 'ring-2 ring-blue-600' : ''
            }`}
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
              <div className="mb-4">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-2 px-4 rounded-lg ${
                  plan.highlighted
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'border border-blue-600 text-blue-600 hover:bg-blue-50'
                }`}
              >
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;