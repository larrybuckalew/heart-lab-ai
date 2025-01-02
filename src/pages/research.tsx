import React from 'react';
import Link from 'next/link';

const ResearchPage: React.FC = () => {
  const researchAreas = [
    "Cardiac Disease Prediction",
    "Heart Rate Variability Analysis",
    "Machine Learning in Cardiology"
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">Research Areas</h1>
      <ul className="list-disc pl-5">
        {researchAreas.map((area, index) => (
          <li key={index} className="mb-2">{area}</li>
        ))}
      </ul>
      <Link href="/" className="text-blue-500 hover:underline mt-4 inline-block">Back to Home</Link>
    </div>
  );
};

export default ResearchPage;