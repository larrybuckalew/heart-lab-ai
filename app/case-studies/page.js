export default function CaseStudies() {
  const cases = [
    {
      id: 1,
      title: "Early Detection of Heart Disease",
      institution: "Memorial Hospital",
      outcome: "30% improvement in early diagnosis",
      description: "Implementation of AI-powered screening reduced diagnosis time and improved accuracy.",
      metrics: ["4,000+ patients screened", "98% accuracy rate", "45% reduction in false positives"]
    },
    {
      id: 2,
      title: "Automated ECG Analysis",
      institution: "City General Hospital",
      outcome: "50% reduction in analysis time",
      description: "Machine learning model successfully automated routine ECG interpretations.",
      metrics: ["10,000+ ECGs processed", "99% accuracy in rhythm detection", "60% time savings"]
    },
    {
      id: 3,
      title: "Predictive Care Model",
      institution: "Regional Medical Center",
      outcome: "25% reduction in cardiac events",
      description: "AI-based risk assessment model predicted potential cardiac events.",
      metrics: ["2,500 high-risk patients identified", "85% prediction accuracy", "40% cost reduction"]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Case Studies</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {cases.map((study) => (
          <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{study.title}</h2>
              <p className="text-blue-600 mb-4">{study.institution}</p>
              <p className="text-gray-600 mb-4">{study.description}</p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Key Metrics:</h3>
                <ul className="list-disc list-inside">
                  {study.metrics.map((metric, index) => (
                    <li key={index} className="text-gray-700">{metric}</li>
                  ))}
                </ul>
              </div>
              <p className="mt-4 text-green-600 font-semibold">Outcome: {study.outcome}</p>
              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                Read Full Study
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}