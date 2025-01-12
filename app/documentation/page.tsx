import React from 'react';

// Define an extended interface that includes the 'id' prop
interface DocSectionProps {
  title: string;
  children: React.ReactNode;
  id?: string; // Make id optional to maintain flexibility
}

// Create the DocSection component with the new prop type
const DocSection: React.FC<DocSectionProps> = ({ title, children, id }) => {
  return (
    <div id={id}>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );
};

export default function Documentation() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">HeartLab AI Documentation</h1>
        
        {/* Now the id prop is type-safe */}
        <DocSection title="Getting Started" id="getting-started">
          <div className="prose max-w-none">
            <h3 className="text-xl font-semibold mb-4">Initial Setup</h3>
            <ol className="list-decimal pl-6 space-y-4">
              <li>Install the HeartLab AI SDK</li>
              <li>Configure your environment</li>
              <li>Initialize the AI model</li>
            </ol>
          </div>
        </DocSection>
      </div>
    </div>
  );
}