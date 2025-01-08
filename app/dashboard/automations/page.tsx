import React from 'react';

const AutomationsPage = () => {
  const automations = [
    {
      name: 'Customer Onboarding',
      status: 'Active',
      runs: 234,
      successRate: '98.2%'
    },
    {
      name: 'Email Follow-ups',
      status: 'Active', 
      runs: 567,
      successRate: '99.1%'
    }
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Automations</h1>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Active Automations</h2>
          {/* Table content */}
        </div>
      </div>
    </div>
  );
};