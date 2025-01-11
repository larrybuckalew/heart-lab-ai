export default function About() {
  return (
    <main className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About HeartLab AI</h1>
        <p className="text-lg text-gray-600 mb-6">
          HeartLab AI is at the forefront of AI innovation, providing comprehensive AI solutions for businesses of all sizes.
        </p>
        <div className="grid gap-8 mt-12">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To empower businesses with intelligent AI solutions that drive growth and innovation.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be the leading provider of accessible, practical AI solutions for businesses across all sectors.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li className="mb-2">Innovation in everything we do</li>
              <li className="mb-2">Customer success as our priority</li>
              <li className="mb-2">Ethical AI development and implementation</li>
              <li>Continuous learning and improvement</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}