export default function SolutionsPage() {
  const solutions = [
    {
      title: 'Voice AI',
      description: 'Intelligent communication solutions that transform customer interactions',
      icon: 'M19 9l-7 7-7-7',
      color: 'text-blue-500'
    },
    {
      title: 'Process Automation',
      description: 'Streamline workflows with AI-driven automation to boost efficiency',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      color: 'text-green-500'
    },
    {
      title: 'Business Intelligence',
      description: 'Data-driven insights to make strategic, informed decisions',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      color: 'text-purple-500'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">AI Solutions for Small Businesses</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center mb-4">
                <svg 
                  className={`w-8 h-8 ${solution.color} mr-4`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d={solution.icon} 
                  />
                </svg>
                <h2 className="text-2xl font-semibold text-gray-800">{solution.title}</h2>
              </div>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}