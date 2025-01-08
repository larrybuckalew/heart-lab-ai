import React from 'react';

export const metadata = {
  title: 'About Heart Lab AI - Leading Voice AI Solutions Provider',
  description: 'Learn about our mission to transform business communication through voice AI technology.',
  keywords: ['Voice AI Company', 'AI Innovation', 'Business Automation']
};

const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">About Heart Lab AI</h1>
      
      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-600">
          We're transforming how businesses interact with customers through intelligent voice automation.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;