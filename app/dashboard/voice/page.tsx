import React from 'react';

const VoiceAnalyticsPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Voice Analytics</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-medium text-gray-600">Total Conversations</h3>
          <p className="text-3xl font-semibold mt-2">1,847</p>
          <p className="text-sm text-green-600 mt-1">+15.3% vs last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-medium text-gray-600">Resolution Rate</h3>
          <p className="text-3xl font-semibold mt-2">92%</p>
          <p className="text-sm text-green-600 mt-1">+3.5% vs last month</p>
        </div>
      </div>
    </div>
  );
};