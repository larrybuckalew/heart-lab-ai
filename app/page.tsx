export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="hero bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Intelligent Innovation for Every Business</h1>
          <p className="text-xl mb-10">
            Empowering small businesses to thrive in the age of artificial intelligence 
            with custom solutions and expert guidance.
          </p>
          <div className="space-x-4">
            <a 
              href="/services" 
              className="bg-white text-blue-600 hover:bg-blue-100 px-6 py-3 rounded-full font-semibold transition duration-300"
            >
              Our Services
            </a>
            <a 
              href="/contact" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-full font-semibold transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section className="services py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Comprehensive AI Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold mb-4">AI Consulting</h3>
              <p className="text-gray-600">
                Expert guidance on AI strategy, implementation, and integration.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold mb-4">Custom Development</h3>
              <p className="text-gray-600">
                Tailored AI solutions addressing specific business challenges.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold mb-4">Training & Education</h3>
              <p className="text-gray-600">
                Comprehensive workshops to leverage AI effectively.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold mb-4">AI Tools & Platforms</h3>
              <p className="text-gray-600">
                Innovative solutions from chatbots to analytics platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="industries py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Industries We Serve</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Retail & E-commerce</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Customer behavior analysis</li>
                <li>Inventory optimization</li>
                <li>Personalized recommendations</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Healthcare & Wellness</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Patient data analysis</li>
                <li>Resource management</li>
                <li>Treatment optimization</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Finance & Banking</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Risk assessment</li>
                <li>Fraud detection</li>
                <li>Process automation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cta bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Transform Your Business with AI</h2>
          <p className="text-xl mb-10">
            Join innovative businesses leveraging AI for sustainable growth.
          </p>
          <a 
            href="/contact" 
            className="bg-white text-blue-600 hover:bg-blue-100 px-8 py-4 rounded-full font-semibold text-xl transition duration-300"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}