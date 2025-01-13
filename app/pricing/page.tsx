export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: 99,
      features: [
        'Voice AI Basic',
        'Process Automation Essentials',
        'Monthly Analytics Report'
      ]
    },
    {
      name: 'Pro',
      price: 249,
      features: [
        'Advanced Voice AI',
        'Comprehensive Process Automation',
        'Weekly Performance Insights',
        'Custom Workflow Design'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'Full AI Suite',
        'Dedicated Support',
        'Advanced Analytics',
        'Custom Integration'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">AI Solutions Pricing</h1>
        
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className="bg-white shadow-lg rounded-xl p-6 transform transition-all hover:scale-105"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{plan.name}</h2>
              <div className="text-3xl font-bold text-blue-600 mb-6">
                {typeof plan.price === 'number' ? `$${plan.price}/mo` : plan.price}
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}