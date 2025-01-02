import React from 'react';
import Link from 'next/link';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">About Heart Lab AI</h1>
      <p className="mb-4">Heart Lab AI is a cutting-edge machine learning project focused on cardiac analysis and research.</p>
      <Link href="/" className="text-blue-500 hover:underline">Back to Home</Link>
    </div>
  );
};

export default AboutPage;