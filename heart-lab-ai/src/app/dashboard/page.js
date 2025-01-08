export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto py-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Total Analyses</h3>
          <p className="text-3xl font-bold text-blue-600">128</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Recent Reports</h3>
          <p className="text-3xl font-bold text-green-600">24</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Active Monitors</h3>
          <p className="text-3xl font-bold text-purple-600">3</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[
            { id: 1, action: 'New analysis completed', time: '2 hours ago', status: 'completed' },
            { id: 2, action: 'Report generated', time: '4 hours ago', status: 'pending' },
            { id: 3, action: 'Monitor alert', time: '1 day ago', status: 'alert' },
          ].map((activity) => (
            <div key={activity.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">{activity.action}</p>
                <p className="text-sm text-gray-600">{activity.time}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                activity.status === 'completed' ? 'bg-green-100 text-green-800' :
                activity.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {activity.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}