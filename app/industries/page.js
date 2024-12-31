import { BuildingOffice2Icon, CircleStackIcon, BeakerIcon, CubeIcon } from '@heroicons/react/24/outline';

export default function Industries() {
  const industries = [
    {
      title: "Enterprise",
      icon: BuildingOffice2Icon,
      description: "Transform enterprise operations with AI-powered voice solutions and automation.",
      benefits: [
        "Streamlined Communication",
        "Enhanced Customer Service",
        "Improved Data Management",
        "Efficient Resource Allocation"
      ]
    },
    {
      title: "Small Business",
      icon: CircleStackIcon,
      description: "Affordable and scalable AI solutions designed for growing businesses.",
      benefits: [
        "Cost-effective Automation",
        "Quick Implementation",
        "Scalable Solutions",
        "Competitive Advantage"
      ]
    },
    {
      title: "Healthcare",
      icon: BeakerIcon,
      description: "Integrate voice AI and automation into healthcare workflows.",
      benefits: [
        "Automated Documentation",
        "Patient Engagement",
        "Workflow Optimization",
        "Compliance Management"
      ]
    },
    {
      title: "Manufacturing",
      icon: CubeIcon,
      description: "Optimize production processes with intelligent automation.",
      benefits: [
        "Quality Control",
        "Process Optimization",
        "Supply Chain Management",
        "Predictive Maintenance"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-12 text-center">Industries</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="relative bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-8 group hover:bg-opacity-70 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 opacity-20 rounded-full blur-xl group-hover:opacity-30 transition-opacity"></div>
              
              <industry.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h2 className="text-2xl font-bold mb-4">{industry.title}</h2>
              <p className="text-gray-300 mb-6">{industry.description}</p>
              
              <ul className="space-y-2">
                {industry.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="h-2 w-2 bg-purple-500 rounded-full mr-2"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-2 rounded-full transition-all">
                Explore Solutions
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}