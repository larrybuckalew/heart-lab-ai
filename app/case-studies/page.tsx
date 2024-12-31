export default function CaseStudies() {
  const studies = [
    {
      title: 'Enterprise Voice Integration',
      company: 'Global Tech Solutions',
      results: [
        '45% reduction in response time',
        '98% accuracy in voice recognition',
        '$2M annual cost savings'
      ],
      description: 'Implementation of custom voice AI solution for customer service automation.',
      industry: 'Technology'
    },
    {
      title: 'Workflow Automation Project',
      company: 'Premier Manufacturing',
      results: [
        '60% increase in productivity',
        '75% reduction in manual tasks',
        '30% improvement in accuracy'
      ],
      description: 'End-to-end automation of manufacturing processes using AI.',
      industry: 'Manufacturing'
    },
    {
      title: 'Voice Assistant Integration',
      company: 'HealthCare Plus',
      results: [
        '40% faster patient processing',
        '90% patient satisfaction rate',
        '50% reduction in wait times'
      ],
      description: 'Custom voice assistant for healthcare workflow optimization.',
      industry: 'Healthcare'
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Case Studies
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {studies.map((study, index) => (
            <div key={index} className="bg-gray-800 bg-opacity-50 rounded-xl p-6 hover:bg-opacity-70 transition-all">
              <div className="text-sm text-blue-400 mb-2">{study.industry}</div>
              <h2 className="text-2xl font-bold mb-2">{study.title}</h2>
              <h3 className="text-lg text-gray-300 mb-4">{study.company}</h3>
              
              <p className="text-gray-400 mb-6">{study.description}</p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-400">Key Results:</h4>
                {study.results.map((result, idx) => (
                  <div key={idx} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    {result}
                  </div>
                ))}
              </div>

              <button className="mt-6 px-6 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
                View Full Case Study
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}