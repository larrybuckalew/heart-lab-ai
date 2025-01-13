import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

interface SalesKPIProps {
  data: any;
}

export default function SalesKPI({ data }: SalesKPIProps) {
  if (!data) return null;

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-sm font-semibold text-gray-600">Total Sales</h3>
          <div className="mt-2 flex justify-between items-end">
            <div className="text-2xl font-bold text-indigo-600">
              ${data.metrics.totalSales.toLocaleString()}
            </div>
            <div className="text-sm text-gray-500">
              Target: ${data.metrics.monthlyTarget.toLocaleString()}
            </div>
          </div>
          <div className="mt-2 h-2 bg-gray-200 rounded-full">
            <div 
              className="h-2 bg-indigo-600 rounded-full"
              style={{ width: `${(data.metrics.totalSales / data.metrics.monthlyTarget) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-sm font-semibold text-gray-600">Deals</h3>
          <div className="mt-2">
            <div className="text-2xl font-bold text-indigo-600">
              {data.metrics.deals.closed}
            </div>
            <div className="text-sm text-gray-500">
              {data.metrics.deals.pipeline} in pipeline
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-sm font-semibold text-gray-600">Conversion Rate</h3>
          <div className="text-2xl font-bold text-indigo-600">
            {data.metrics.deals.conversion}%
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-sm font-semibold text-gray-600">Growth Rate</h3>
          <div className="text-2xl font-bold text-green-600">
            +{data.forecasts.growthRate}%
          </div>
        </div>
      </div>

      {/* Revenue Trend */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Revenue Trend</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data.metrics.monthlyTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#4F46E5" name="Revenue" />
              <Line type="monotone" dataKey="deals" stroke="#059669" name="Deals" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Agents */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Top Performing Agents</h3>
          <div className="space-y-4">
            {data.metrics.topAgents.map((agent: any, index: number) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">{agent.name}</div>
                  <div className="text-sm text-gray-500">{agent.deals} deals</div>
                </div>
                <div className="text-lg font-bold text-indigo-600">
                  ${agent.sales.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Revenue by Product</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.metrics.revenueByProduct}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#4F46E5" />
                <Bar dataKey="growth" fill="#059669" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}