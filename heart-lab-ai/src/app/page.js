import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Empower Your Business with AI
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Heart Lab AI helps small businesses harness the power of artificial intelligence 
          to streamline operations, enhance customer experiences, and drive growth.
        </p>
        <div className="space-x-4">
          <Link href="/services" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Explore Services
          </Link>
          <Link href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Services Preview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">Voice AI Integration</h3>
          <p className="text-gray-600 mb-4">Enhance customer service and automate tasks with advanced voice AI solutions.</p>
          <Link href="/services#voice-ai" className="text-blue-600 hover:text-blue-800">Learn more →</Link>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">AI Process Automation</h3>
          <p className="text-gray-600 mb-4">Streamline your workflows and reduce manual tasks with intelligent automation.</p>
          <Link href="/services#automation" className="text-blue-600 hover:text-blue-800">Learn more →</Link>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">Custom AI Solutions</h3>
          <p className="text-gray-600 mb-4">Tailored AI implementations to meet your specific business needs.</p>
          <Link href="/services#custom" className="text-blue-600 hover:text-blue-800">Learn more →</Link>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-50 p-12 rounded-xl mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Heart Lab AI?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Small Business Focus</h3>
            <p className="text-gray-600">Specialized in helping small businesses grow with AI</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Affordable Solutions</h3>
            <p className="text-gray-600">Cost-effective AI integration tailored to your budget</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Expert Guidance</h3>
            <p className="text-gray-600">Dedicated support from AI implementation experts</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Proven Results</h3>
            <p className="text-gray-600">Track record of successful AI implementations</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-blue-600 text-white p-12 rounded-xl">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-xl mb-8">Schedule a free consultation to discover how AI can help your business grow.</p>
        <Link href="/contact"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Get Started
        </Link>
      </div>
    </div>
  );
}