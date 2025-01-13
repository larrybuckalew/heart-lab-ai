export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Larry Buckalew',
      role: 'Founder & CEO',
      description: 'AI innovation expert with a passion for small business transformation'
    },
    {
      name: 'Technical Lead',
      role: 'Chief Technology Officer',
      description: 'Driving cutting-edge AI solutions and technical strategy'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">About Heart Lab AI</h1>
        
        <section className="bg-white shadow-lg rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Heart Lab AI empowers small businesses to leverage artificial intelligence, 
            transforming complex technologies into simple, actionable solutions that drive growth 
            and efficiency.
          </p>
        </section>

        <section className="bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Team</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-200 rounded-full w-32 h-32 mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
                <p className="text-gray-500 mt-2">{member.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}