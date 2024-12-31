import { Award, Sparkles, Target, Users } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Years Experience', value: '10+' },
    { label: 'Projects Completed', value: '200+' },
    { label: 'Team Members', value: '20+' },
    { label: 'Client Satisfaction', value: '98%' }
  ];

  const values = [
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'Pushing the boundaries of AI and automation technology.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Delivering high-quality solutions that exceed expectations.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with clients to achieve their goals.'
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'Maintaining the highest standards of professional conduct.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">About Heart Lab AI</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are pioneering the future of business automation through advanced AI and voice technology solutions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-300">
            To empower businesses with cutting-edge AI voice technology and automation solutions that drive efficiency, 
            innovation, and growth. We're committed to making advanced technology accessible and practical for organizations 
            of all sizes.
          </p>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-6">
              <value.icon className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}