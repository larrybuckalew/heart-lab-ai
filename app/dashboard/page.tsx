export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Sales KPI</h2>
            <div className="space-y-2">
              <p className="text-gray-600">Total Revenue: <span className="font-bold text-green-600">$45,230</span></p>
              <p className="text-gray-600">Monthly Growth: <span className="font-bold text-blue-500">12.5%</span></p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-purple-600 mb-4">AI Analytics</h2>
            <div className="space-y-2">
              <p className="text-gray-600">AI Interactions: <span className="font-bold text-purple-500">1,245</span></p>
              <p className="text-gray-600">Automation Rate: <span className="font-bold text-green-600">87%</span></p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Business Insights</h2>
            <div className="space-y-2">
              <p className="text-gray-600">Active Workflows: <span className="font-bold text-teal-500">24</span></p>
              <p className="text-gray-600">Efficiency Gain: <span className="font-bold text-blue-500">45%</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}