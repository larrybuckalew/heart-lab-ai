import { Users, Award, Globe } from 'lucide-react';

export default function AboutPage() {
  const teamMembers = [
    { name: 'Dr. Emily Chen', role: 'Chief AI Scientist', image: '/team/emily.jpg' },
    { name: 'Dr. Michael Rodriguez', role: 'Lead Cardiologist', image: '/team/michael.jpg' },
    { name: 'Sarah Thompson', role: 'Data Science Lead', image: '/team/sarah.jpg' }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">
          Revolutionizing Cardiac Care with AI
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Heart Lab AI combines advanced machine learning with deep medical expertise to transform cardiac diagnostics and patient care.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6 bg-blue-50 rounded-lg">
          <Users className="mx-auto mb-4 text-blue-600" size={64} />
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To empower healthcare professionals with AI-driven insights for more precise cardiac diagnostics.
          </p>
        </div>
        <div className="text-center p-6 bg-green-50 rounded-lg">
          <Award className="mx-auto mb-4 text-green-600" size={64} />
          <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
          <p className="text-gray-600">
            Combining cutting-edge machine learning with deep medical research to push the boundaries of cardiac care.
          </p>
        </div>
        <div className="text-center p-6 bg-purple-50 rounded-lg">
          <Globe className="mx-auto mb-4 text-purple-600" size={64} />
          <h2 className="text-2xl font-semibold mb-4">Global Impact</h2>
          <p className="text-gray-600">
            Developing AI solutions that can be deployed worldwide to improve heart health outcomes.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Leadership Team
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white shadow-lg rounded-lg p-6 text-center"
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}