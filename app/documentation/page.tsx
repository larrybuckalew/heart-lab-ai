import React from 'react';

export const metadata = {
  title: 'Documentation - Voice AI Integration Guide',
  description: 'Comprehensive guide for Heart Lab AI voice automation. Learn integration steps, best practices, and implementation guides.',
  keywords: ['Voice AI Documentation', 'AI Integration Guide', 'GoHighLevel Integration']
};

const DocumentationPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">Documentation</h1>
      <div className="prose lg:prose-lg mt-8">
        <h2>Getting Started</h2>
        <p>Learn how to integrate Heart Lab AI with your business systems:</p>
        
        <ul>
          <li>Account Setup</li>
          <li>Voice AI Configuration</li>
          <li>GoHighLevel Integration</li>
          <li>Testing & Validation</li>
        </ul>
      </div>
    </div>
  );
};

export default DocumentationPage;