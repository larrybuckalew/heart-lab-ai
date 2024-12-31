import { ArrowDownCircle, Sparkles, Bot, Lightning, Server } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl font-bold mb-4">Heart Lab AI</h1>
          <p className="text-xl mb-8">Advanced Voice AI & Automation Solutions</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
            Get Started
          </button>
        </div>
        <ArrowDownCircle className="absolute bottom-8 w-12 h-12 animate-bounce" />
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl">
              <Sparkles className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Voice AI Technology</h3>
              <p className="text-gray-300">Advanced voice recognition and processing powered by cutting-edge AI</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <Bot className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Intelligent Automation</h3>
              <p className="text-gray-300">Streamline your workflows with smart automation solutions</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <Server className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Custom Solutions</h3>
              <p className="text-gray-300">Tailored AI integration for your specific needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the future of business automation with our cutting-edge AI solutions
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </main>
  );
}