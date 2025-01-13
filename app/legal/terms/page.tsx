export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Terms of Service</h1>
        <div className="bg-white shadow-lg rounded-xl p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Service Usage</h2>
            <p className="text-gray-600">Our AI services are provided with specific usage guidelines.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">User Responsibilities</h2>
            <p className="text-gray-600">Users must comply with our acceptable use policy.</p>
          </section>
        </div>
      </div>
    </div>
  )
}