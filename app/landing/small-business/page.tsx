export default function SmallBusinessLanding() {
  const keyBenefits = [
    {
      title: 'Scalable AI Solutions',
      description: 'Flexible tools that grow with your business'
    },
    {
      title: 'Cost-Effective Automation',
      description: 'Reduce operational expenses through intelligent processes'
    },
    {
      title: 'Data-Driven Insights',
      description: 'Make strategic decisions with real-time analytics'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">AI-Powered Growth for Small Businesses</h1>
          <p className="text-xl text-gray-600">
            Transform your operations with intelligent automation, voice AI, and strategic insights.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {keyBenefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <h3 className="font-semibold text-blue-600 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
          <div className="flex space-x-4">
            <a 
              href="/contact" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </a>
            <a 
              href="/solutions" 
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-white shadow-2xl rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Small Business Toolkit</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <svg className="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Voice AI Automation
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Process Automation
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Business Intelligence
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}