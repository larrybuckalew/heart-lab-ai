export default function Dashboard() {
  const dashboardStats = [
    {
      title: 'Total AI Interactions',
      value: '1,245',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z'
    },
    {
      title: 'Automation Efficiency',
      value: '87%',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      title: 'Monthly Revenue',
      value: '$45,230',
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Dashboard</h1>
        
        <div className="grid md:grid-cols-3 gap-6">
          {dashboardStats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-all"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl text-gray-600 mb-2">{stat.title}</h2>
                  <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
                </div>
                <svg 
                  className="w-10 h-10 text-blue-500 opacity-50" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d={stat.icon} 
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}