export default function About() {
  return (
    <div className="max-w-7xl mx-auto py-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">About Heart Lab AI</h1>
      
      <div className="prose lg:prose-xl max-w-none">
        <p className="text-lg text-gray-700 mb-6">
          Heart Lab AI is a cutting-edge platform that combines advanced artificial intelligence 
          with cardiac health monitoring to provide comprehensive analysis and insights.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To revolutionize cardiac health monitoring by making advanced AI analytics 
              accessible to healthcare providers and patients alike.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Technology</h2>
            <p className="text-gray-600">
              We use state-of-the-art machine learning algorithms to analyze cardiac data 
              and provide real-time insights and predictions.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">Key Features</h2>
        <ul className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            "Real-time heart rate monitoring",
            "Advanced ECG analysis",
            "Predictive health analytics",
            "Comprehensive reporting",
            "24/7 monitoring capabilities",
            "Secure data storage"
          ].map((feature, index) => (
            <li key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
              <span className="mr-2">•</span>
              {feature}
            </li>
          ))}
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Get Started</h2>
          <p className="text-gray-700 mb-4">
            Ready to experience the future of cardiac health monitoring? Contact us today 
            to learn more about how Heart Lab AI can benefit your practice.
          </p>
        </div>
      </div>
    </div>
  );
}