export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Privacy Policy</h1>
        <div className="bg-white shadow-lg rounded-xl p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Information We Collect</h2>
            <p className="text-gray-600">We collect minimal necessary data to provide our AI services.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">How We Use Your Data</h2>
            <p className="text-gray-600">Your data is used solely to improve our services and user experience.</p>
          </section>
        </div>
      </div>
    </div>
  )
}