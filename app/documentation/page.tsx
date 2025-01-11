export default function Documentation() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">HeartLab AI Documentation</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">API Reference</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive guide to our AI integration APIs and endpoints.
              </p>
              <a href="#" className="text-blue-600 hover:underline">View API Docs</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Quick Start Guide</h3>
              <p className="text-gray-600 mb-4">
                Step-by-step instructions to implement HeartLab AI solutions.
              </p>
              <a href="#" className="text-blue-600 hover:underline">Download Guide</a>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Tutorials</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">AI Integration</h3>
              <p className="text-gray-600">Learn how to integrate AI into your business workflow.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Data Analysis</h3>
              <p className="text-gray-600">Understand how to leverage AI for data-driven insights.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">AI Tools</h3>
              <p className="text-gray-600">Explore our AI-powered tools and platforms.</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Support</h2>
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-gray-600 mb-4">
              Need help? Our support team is available to assist you with any questions or challenges.
            </p>
            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Contact Support
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}