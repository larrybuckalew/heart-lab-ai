import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">AI Solutions for Business</h1>
        <p className="text-xl text-gray-600 mb-8">Empowering businesses with intelligent AI solutions</p>
        <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </Link>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">AI Consulting</h3>
              <p className="text-gray-600">Strategic guidance for implementing AI solutions in your business</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Custom Development</h3>
              <p className="text-gray-600">Tailored AI solutions designed for your specific needs</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Training & Education</h3>
              <p className="text-gray-600">Comprehensive AI training programs for your team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Retail & E-commerce</h3>
              <p className="text-gray-600">Smart solutions for modern retail challenges</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Healthcare & Wellness</h3>
              <p className="text-gray-600">Advanced analytics for better patient care</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Finance & Banking</h3>
              <p className="text-gray-600">AI-powered financial solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="mb-8">Let's discuss how AI can drive your success</p>
          <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}