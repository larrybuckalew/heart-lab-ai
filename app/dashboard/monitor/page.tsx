import React from 'react';

const MonitorPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Real-time Monitor</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-600">Active Sessions</h3>
          <p className="text-3xl font-semibold mt-2">24</p>
          <div className="flex items-center mt-2">
            <span className="text-green-600 text-sm">●</span>
            <span className="text-sm text-gray-600 ml-2">All systems operational</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-600">Response Time</h3>
          <p className="text-3xl font-semibold mt-2">1.2s</p>
          <div className="flex items-center mt-2">
            <span className="text-green-600 text-sm">↓</span>
            <span className="text-sm text-gray-600 ml-2">0.3s below average</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-600">Queue Status</h3>
          <p className="text-3xl font-semibold mt-2">0</p>
          <div className="flex items-center mt-2">
            <span className="text-green-600 text-sm">✓</span>
            <span className="text-sm text-gray-600 ml-2">No pending requests</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Active Conversations</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between border-b pb-4">
                <div>
                  <p className="font-medium">Session #{i}</p>
                  <p className="text-sm text-gray-600">Duration: 2m 34s</p>
                </div>
                <span className="px-2 py-1 text-sm rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">System Health</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span>CPU Usage</span>
                <span>28%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 rounded-full h-2" style={{ width: '28%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span>Memory</span>
                <span>45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 rounded-full h-2" style={{ width: '45%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span>Network</span>
                <span>18%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 rounded-full h-2" style={{ width: '18%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonitorPage;