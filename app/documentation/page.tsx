import React from 'react';
import Link from 'next/link';

const DocSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-12 p-6 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
    {children}
  </div>
);

export default function Documentation() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Documentation & Resources
          </h1>
          <p className="text-xl text-gray-600">
            Everything you need to know about our AI solutions and integrations
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { title: 'Getting Started', href: '#getting-started', icon: '🚀' },
            { title: 'API Reference', href: '#api-reference', icon: '🔌' },
            { title: 'Integration Guides', href: '#integrations', icon: '🔄' }
          ].map((link) => (
            <Link 
              key={link.href}
              href={link.href}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center"
            >
              <div className="text-3xl mb-2">{link.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">{link.title}</h3>
            </Link>
          ))}
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          <DocSection title="Getting Started" id="getting-started">
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4">Initial Setup</h3>
              <ol className="list-decimal pl-6 space-y-4">
                <li>Create your account via the admin portal</li>
                <li>Configure your AI preferences and requirements</li>
                <li>Set up your first integration</li>
                <li>Start analyzing your data</li>
              </ol>

              <h3 className="text-xl font-semibold mt-8 mb-4">System Requirements</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modern web browser (Chrome, Firefox, Safari, Edge)</li>
                <li>Stable internet connection</li>
                <li>Access to necessary data sources</li>
              </ul>
            </div>
          </DocSection>

          <DocSection title="API Reference" id="api-reference">
            <div className="prose max-w-none">
              <p className="mb-6">
                Our RESTful API allows you to integrate our AI capabilities directly into your applications.
              </p>

              <h3 className="text-xl font-semibold mb-4">Authentication</h3>
              <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
                <code>
                  Authorization: Bearer YOUR_API_KEY
                </code>
              </pre>

              <h3 className="text-xl font-semibold mt-8 mb-4">Base URL</h3>
              <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
                <code>
                  https://api.heartlabai.com/v1
                </code>
              </pre>
            </div>
          </DocSection>

          <DocSection title="Integration Guides" id="integrations">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Data Integration</h3>
                <ul className="space-y-3">
                  <li>CSV/Excel import</li>
                  <li>Database connections</li>
                  <li>Real-time data streaming</li>
                  <li>Custom data sources</li>
                </ul>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Third-party Tools</h3>
                <ul className="space-y-3">
                  <li>CRM systems</li>
                  <li>Analytics platforms</li>
                  <li>Business intelligence tools</li>
                  <li>Custom solutions</li>
                </ul>
              </div>
            </div>
          </DocSection>

          {/* Support Section */}
          <div className="bg-blue-700 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Additional Help?</h2>
            <p className="text-xl mb-6">
              Our support team is available to assist you with any questions.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}