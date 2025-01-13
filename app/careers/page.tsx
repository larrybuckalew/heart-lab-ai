export default function CareersPage() {
  const openPositions = [
    {
      title: 'AI Engineer',
      description: 'Develop cutting-edge AI solutions for small businesses',
      location: 'Remote'
    },
    {
      title: 'Frontend Developer',
      description: 'Create intuitive user interfaces for AI platforms',
      location: 'Remote'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Join Heart Lab AI</h1>
        
        <section className="bg-white shadow-lg rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Culture</h2>
          <p className="text-gray-600 leading-relaxed">
            We're a dynamic team passionate about transforming small businesses through AI innovation. 
            Our collaborative environment encourages creativity, continuous learning, and making a real impact.
          </p>
        </section>

        <section className="bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Open Positions</h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div 
                key={index} 
                className="border-l-4 border-blue-500 pl-4 py-4 bg-gray-50 hover:bg-white transition-colors"
              >
                <h3 className="text-xl font-semibold text-gray-800">{position.title}</h3>
                <p className="text-gray-600 mb-2">{position.description}</p>
                <div className="flex items-center text-gray-500">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {position.location}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}