import Image from 'next/image';
import { ArrowDownCircleIcon, BeakerIcon, ChartBarIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Heart Lab AI</h1>
          <p className="text-xl mb-8">Advanced Cardiac Analysis Through Artificial Intelligence</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
            Learn More
          </button>
        </div>
        <ArrowDownCircleIcon className="absolute bottom-8 w-12 h-12 animate-bounce" />
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg shadow-lg">
              <BeakerIcon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">AI-Powered Analysis</h3>
              <p>Advanced cardiac image analysis using state-of-the-art AI models</p>
            </div>
            <div className="text-center p-6 rounded-lg shadow-lg">
              <ChartBarIcon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Real-time Monitoring</h3>
              <p>Continuous heart monitoring with instant alerts and analysis</p>
            </div>
            <div className="text-center p-6 rounded-lg shadow-lg">
              <UserGroupIcon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Expert Consultation</h3>
              <p>Direct access to cardiac specialists and AI researchers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Research</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Deep Learning in Cardiac Imaging</h3>
              <p className="mb-4">Advancing cardiac diagnosis through neural networks and computer vision</p>
              <a href="#" className="text-blue-600 hover:underline">Read More →</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Predictive Analytics in Cardiology</h3>
              <p className="mb-4">Early detection and risk assessment using machine learning</p>
              <a href="#" className="text-blue-600 hover:underline">Read More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Dr. Sarah Chen</h3>
              <p className="text-gray-600">Lead AI Researcher</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Dr. Michael Brown</h3>
              <p className="text-gray-600">Senior Cardiologist</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Dr. Emily Taylor</h3>
              <p className="text-gray-600">Data Science Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <p className="mb-8">Interested in our services or research? Contact us today.</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </main>
  );
}