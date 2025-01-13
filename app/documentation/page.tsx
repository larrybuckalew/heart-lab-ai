export default function DocumentationPage() {
  const sections = [
    {
      title: 'Getting Started',
      content: 'Learn how to integrate Heart Lab AI solutions into your small business workflow.'
    },
    {
      title: 'Voice AI Setup',
      content: 'Configure and optimize voice AI to enhance customer communication and support.'
    },
    {
      title: 'Process Automation',
      content: 'Streamline your business processes with our intelligent automation tools.'
    },
    {
      title: 'Analytics Dashboard',
      content: 'Understand and leverage AI-driven insights for strategic decision-making.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Documentation</h1>
        
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div 
              key={index} 
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-all"
            >
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">{section.title}</h2>
              <p className="text-gray-600">{section.content}</p>
              <button className="mt-4 text-blue-500 hover:underline">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}