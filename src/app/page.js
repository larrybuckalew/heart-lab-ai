import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Heart Lab AI
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Advanced cardiac analysis powered by artificial intelligence
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center">
          <Link href="/dashboard" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Get Started
          </Link>
          <Link href="/about"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors">
            Learn More
          </Link>
        </div>
      </div>
      
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">AI-Powered Analysis</h3>
          <p className="text-gray-600">Advanced machine learning algorithms for accurate cardiac analysis</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">Real-time Monitoring</h3>
          <p className="text-gray-600">Continuous monitoring and instant alerts for critical conditions</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">Expert Insights</h3>
          <p className="text-gray-600">Detailed reports and recommendations from cardiac specialists</p>
        </div>
      </div>
    </div>
  );
}