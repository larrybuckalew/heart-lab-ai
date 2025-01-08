export default function Services() {
  return (
    <div className="max-w-7xl mx-auto py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We offer comprehensive AI solutions designed specifically for small businesses, 
          helping you leverage cutting-edge technology to grow and succeed.
        </p>
      </div>

      {/* Main Services */}
      <div className="space-y-16">
        {/* Voice AI */}
        <div id="voice-ai" className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Voice AI Integration</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                Transform your customer service and operational efficiency with our advanced 
                voice AI solutions. From automated customer support to voice-controlled systems.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="mr-2">•</span>
                  24/7 AI Customer Support
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-2">•</span>
                  Voice-Activated Systems
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-2">•</span>
                  Multilingual Voice Support
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-2">•</span>
                  Custom Voice Commands
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Starting at $299/month</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span>
                  Basic Voice AI Implementation
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span>
                  Up to 1,000 Monthly Interactions
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span>
                  Basic Analytics Dashboard
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Process Automation */}
        <div id="automation" className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Process Automation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                Streamline your business operations with intelligent automation solutions 
                that reduce manual work and increase efficiency.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="mr-2">•</span>
                  Document Processing
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-2">•</span>
                  Workflow Automation
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-2">•</span>
                  Data Entry Automation
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-2">•</span>
                  Report Generation
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Starting at $499/month</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span>
                  Custom Automation Setup
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span>
                  Up to 5,000 Monthly Transactions
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span>
                  Performance Analytics
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Custom Solutions */}
        <div id="custom" className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Custom AI Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                Tailored AI solutions designed specifically for your business needs, 
                from customer analytics to predictive maintenance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="mr-2">•</span>
                  Custom AI Development
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-2">•</span>
                  Integration Services
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-2">•</span>
                  AI Consulting
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-2">•</span>
                  Maintenance & Support
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Custom Pricing</h3>
              <p className="text-gray-600 mb-4">Contact us for a personalized quote based on your specific needs.</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}