export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Cookie Policy</h1>
        <div className="bg-white shadow-lg rounded-xl p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Cookie Usage</h2>
            <p className="text-gray-600">We use cookies to enhance user experience and analyze site traffic.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Types of Cookies</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Essential cookies</li>
              <li>Performance cookies</li>
              <li>Analytics cookies</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}