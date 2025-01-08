import React from 'react';

const DashboardPage = () => {
  const stats = [
    { label: 'Voice Interactions', value: '2,847', change: '+12.5%' },
    { label: 'Automated Tasks', value: '1,234', change: '+23.1%' },
    { label: 'Time Saved', value: '127 hrs', change: '+15.4%' },
    { label: 'Customer Satisfaction', value: '94%', change: '+2.3%' }
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-sm text-gray-600">{stat.label}</p>
            <p className="text-2xl font-semibold mt-2">{stat.value}</p>
            <p className={`text-sm mt-2 ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
              {stat.change} vs last month
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Recent Voice Interactions</h2>
          <div className="space-y-4">
            {/* Voice interaction components will go here */}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Automation Performance</h2>
          <div className="space-y-4">
            {/* Automation metrics will go here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;