import Link from 'next/link'
import { HeartPulse, Brain, Shield } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Revolutionizing Cardiac Care with AI
          </h1>
          <p className="text-xl mb-10">
            Advanced machine learning solutions for precision heart health analysis
          </p>
          <div className="flex justify-center space-x-6">
            <Link 
              href="/solutions" 
              className="bg-white text-blue-800 px-8 py-3 rounded-full hover:bg-blue-100 transition"
            >
              Explore Solutions
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white px-8 py-3 rounded-full hover:bg-white hover:text-blue-800 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our AI-Powered Capabilities
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-100 rounded-lg">
              <HeartPulse className="mx-auto mb-4 text-blue-600" size={64} />
              <h3 className="text-xl font-semibold mb-4">
                Advanced Cardiac Analysis
              </h3>
              <p>
                Utilize cutting-edge machine learning to detect subtle cardiac patterns
              </p>
            </div>
            <div className="text-center p-6 bg-gray-100 rounded-lg">
              <Brain className="mx-auto mb-4 text-green-600" size={64} />
              <h3 className="text-xl font-semibold mb-4">
                Predictive Diagnostics
              </h3>
              <p>
                Leverage AI to predict potential heart health risks
              </p>
            </div>
            <div className="text-center p-6 bg-gray-100 rounded-lg">
              <Shield className="mx-auto mb-4 text-purple-600" size={64} />
              <h3 className="text-xl font-semibold mb-4">
                Secure Data Processing
              </h3>
              <p>
                Ensure patient data privacy with advanced security protocols
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}