export default function Services() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">AI Solutions for Small Businesses</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Voice AI</h2>
          <p>Automate customer interactions and support with intelligent voice solutions</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Process Automation</h2>
          <p>Streamline business workflows with AI-driven automation tools</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Business Intelligence</h2>
          <p>Gain actionable insights through advanced AI analytics</p>
        </div>
      </div>
    </div>
  )
}