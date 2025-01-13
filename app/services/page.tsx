export default function ServicesPage() {
  const services = [
    {
      title: 'Voice AI Solutions',
      description: 'Intelligent communication technologies that transform customer interactions and internal workflows.',
      features: [
        'Automated customer support',
        'Voice-activated analytics',
        'Natural language processing'
      ]
    },
    {
      title: 'Process Automation',
      description: 'AI-driven workflow optimization to eliminate repetitive tasks and boost operational efficiency.',
      features: [
        'Workflow mapping',
        'Intelligent task routing',
        'Real-time performance tracking'
      ]
    },
    {
      title: 'Business Intelligence',
      description: 'Advanced data analytics providing actionable insights for strategic decision-making.',
      features: [
        'Predictive analytics',
        'Custom reporting',
        'Performance dashboards'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">AI Solutions for Small Businesses</h1>
        
        <div className="space-y-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white shadow-lg rounded-xl p-8 hover:shadow-xl transition-all"
            >
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="grid md:grid-cols-3 gap-4">
                {service.features.map((feature, featureIndex) => (
                  <div 
                    key={featureIndex} 
                    className="bg-gray-100 rounded-lg p-4 text-center"
                  >
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}