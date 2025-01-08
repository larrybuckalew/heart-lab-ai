import React from 'react';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      title: 'Early Detection Success: Preventing Cardiac Events',
      institution: 'Memorial Health Center',
      outcome: 'Reduced cardiac events by 45% through early detection',
      slug: 'early-detection-success'
    },
    {
      title: 'AI-Powered Diagnosis Accuracy Improvement',
      institution: 'Research Medical Institute',
      outcome: 'Increased diagnostic accuracy by 32%',
      slug: 'diagnosis-accuracy-improvement'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Case Studies</h1>
      <div className="space-y-8">
        {caseStudies.map((study) => (
          <div key={study.slug} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-2">
              <a href={`/case-studies/${study.slug}`} className="hover:text-blue-600 transition-colors">
                {study.title}
              </a>
            </h2>
            <p className="text-gray-600 mb-2">{study.institution}</p>
            <p className="text-green-600 font-medium mb-4">{study.outcome}</p>
            <a
              href={`/case-studies/${study.slug}`}
              className="inline-block text-blue-600 hover:text-blue-800 font-medium"
            >
              Read full case study →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesPage;