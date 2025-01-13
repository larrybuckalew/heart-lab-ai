export default function AccessibilityStatement() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Accessibility Statement</h1>
        <div className="bg-white shadow-lg rounded-xl p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Commitment</h2>
            <p className="text-gray-600">We are committed to providing an accessible digital experience.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Accessibility Features</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Keyboard navigation support</li>
              <li>Screen reader compatibility</li>
              <li>Color contrast compliance</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}