export default function About() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">About HeartLab AI</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            HeartLab AI is dedicated to empowering small businesses to thrive in the age of artificial intelligence. 
            We provide innovative AI solutions, expert guidance, and transformative technologies that drive sustainable growth 
            and competitive advantage across diverse industries.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Founding</h3>
              <p className="text-gray-600">
                Founded in 2023, HeartLab AI emerged from a vision to democratize artificial intelligence 
                for businesses of all sizes. Our founders recognized the transformative potential of AI 
                and set out to make it accessible and actionable for small and medium enterprises.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Vision</h3>
              <p className="text-gray-600">
                We believe that AI should be a powerful tool for innovation, not a barrier. 
                Our goal is to bridge the technological gap, providing businesses with the 
                insights, tools, and support needed to leverage AI effectively.
              </p>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mb-4">
                <img 
                  src="/api/placeholder/200/200" 
                  alt="Founder" 
                  className="mx-auto rounded-full w-32 h-32 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Jane Doe</h3>
              <p className="text-gray-600">Co-Founder & CEO</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mb-4">
                <img 
                  src="/api/placeholder/200/200" 
                  alt="Co-Founder" 
                  className="mx-auto rounded-full w-32 h-32 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">John Smith</h3>
              <p className="text-gray-600">Co-Founder & CTO</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mb-4">
                <img 
                  src="/api/placeholder/200/200" 
                  alt="Head of AI" 
                  className="mx-auto rounded-full w-32 h-32 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Alex Rodriguez</h3>
              <p className="text-gray-600">Head of AI Research</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We constantly push the boundaries of what&apos;s possible with artificial intelligence.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
              <p className="text-gray-600">
                Making advanced AI technologies understandable and usable for businesses of all sizes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Ethical AI</h3>
              <p className="text-gray-600">
                Committed to developing AI solutions that are responsible, transparent, and fair.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-gray-600">
                Working closely with our clients to understand and meet their unique challenges.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}