import { Stethoscope, Brain, Shield } from 'lucide-react';

export default function SolutionsPage() {
  const solutions = [
    {
      icon: Stethoscope,
      title: 'Advanced Cardiac Analysis',
      description: 'Utilize cutting-edge machine learning to detect subtle cardiac patterns and provide early risk assessments.',
      color: 'text-blue-600'
    },
    {
      icon: Brain,
      title: 'Predictive Diagnostics',
      description: 'Leverage AI algorithms to predict potential heart health risks with unprecedented accuracy.',
      color: 'text-green-600'
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Ensure patient data privacy with advanced encryption and secure processing protocols.',
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Our AI-Powered Solutions
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {solutions.map((solution, index) => (
          <div 
            key={index} 
            className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-all duration-300"
          >
            <solution.icon 
              className={`mx-auto mb-4 ${solution.color}`} 
              size={64} 
            />
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              {solution.title}
            </h2>
            <p className="text-gray-600">
              {solution.description}
            </p>
          </div>
        ))}
      </div>

      <section className="mt-16 bg-blue-50 p-8 rounded-lg text-center">
        <h3 className="text-3xl font-bold mb-6 text-gray-800">
          Ready to Transform Cardiac Care?
        </h3>
        <p className="text-xl text-gray-600 mb-8">
          Contact our team to learn how Heart Lab AI can revolutionize your healthcare approach.
        </p>
        <a 
          href="/contact" 
          className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </section>
    </div>
  );
}