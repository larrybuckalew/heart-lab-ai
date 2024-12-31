export default function Solutions() {
  const solutions = [
    {
      title: "Voice AI Technology",
      description: "Advanced voice recognition and processing systems that transform how businesses interact with customers and manage operations.",
      features: [
        "Natural Language Processing",
        "Multi-language Support",
        "Real-time Voice Analytics",
        "Custom Voice Models"
      ]
    },
    {
      title: "Process Automation",
      description: "End-to-end automation solutions that streamline workflows and boost operational efficiency.",
      features: [
        "Workflow Optimization",
        "Task Automation",
        "Integration Services",
        "Custom Automation Pipelines"
      ]
    },
    {
      title: "ML/AI Integration",
      description: "Seamless integration of machine learning and AI capabilities into existing business systems.",
      features: [
        "Predictive Analytics",
        "Pattern Recognition",
        "Automated Decision Making",
        "Scalable AI Solutions"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-8 text-center">Solutions</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-6 hover:transform hover:scale-105 transition-all">
              <h2 className="text-2xl font-bold mb-4">{solution.title}</h2>
              <p className="text-gray-300 mb-6">{solution.description}</p>
              <ul className="space-y-2">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}