import React from 'react'

export default function AIAnalytics() {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">AI Analytics</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-medium">Voice AI Usage</h3>
          <p>Total Interactions: 1,245</p>
        </div>
        <div>
          <h3 className="font-medium">Automation Efficiency</h3>
          <p>Tasks Automated: 87%</p>
        </div>
      </div>
    </div>
  )
}