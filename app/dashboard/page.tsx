"use client";

import React, { useState } from 'react';
import Link from 'next/link';

interface BusinessInsight {
  title: string;
  value: string | number;
  change: number;
  trend: 'up' | 'down' | 'neutral';
}

interface AIRecommendation {
  id: string;
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  category: string;
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [insights, setInsights] = useState<BusinessInsight[]>([
    {
      title: 'Process Efficiency',
      value: '87%',
      change: 12,
      trend: 'up'
    },
    {
      title: 'Cost Reduction',
      value: '$12,450',
      change: 8,
      trend: 'up'
    },
    {
      title: 'Time Saved',
      value: '128 hours',
      change: 15,
      trend: 'up'
    }
  ]);
  
  const [recommendations, setRecommendations] = useState<AIRecommendation[]>([
    {
      id: '1',
      title: 'Optimize Customer Service Workflow',
      description: 'Implement AI chatbot to handle routine inquiries',
      impact: 'high',
      category: 'automation'
    },
    {
      id: '2',
      title: 'Enhance Data Analysis',
      description: 'Utilize machine learning for predictive analytics',
      impact: 'medium',
      category: 'analytics'
    }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-indigo-800">
            AI Dashboard
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <Link 
            href="/logout"
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
          >
            Logout
          </Link>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-indigo-900 mb-6">Menu</h3>
            <div className="space-y-4">
              {[
                { id: 'overview', label: 'Overview', icon: '🏠' },
                { id: 'recommendations', label: 'AI Recommendations', icon: '💡' },
                { id: 'business-analysis', label: 'Business Analysis', icon: '📊' },
                { id: 'integrations', label: 'AI Integrations', icon: '🔗' }
              ].map((menu) => (
                <button
                  key={menu.id}
                  onClick={() => setActiveTab(menu.id)}
                  className={`
                    w-full text-left py-2 px-4 rounded-md transition
                    ${activeTab === menu.id 
                      ? 'bg-indigo-100 text-indigo-800' 
                      : 'hover:bg-indigo-50 text-gray-700'}
                  `}
                >
                  <span className="mr-2">{menu.icon}</span>
                  {menu.label}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3 bg-white rounded-xl shadow-md p-8">
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-3xl font-bold text-indigo-900 mb-6">
                  Business AI Performance Overview
                </h2>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {insights.map((insight, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-700 mb-2">
                        {insight.title}
                      </h3>
                      <div className="flex items-end justify-between">
                        <div className="text-2xl font-bold text-indigo-600">
                          {insight.value}
                        </div>
                        <div className={`flex items-center ${insight.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                          {insight.trend === 'up' ? '↑' : '↓'}
                          <span className="ml-1">{insight.change}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'recommendations' && (
              <div>
                <h2 className="text-3xl font-bold text-indigo-900 mb-6">
                  AI-Powered Recommendations
                </h2>
                <div className="space-y-6">
                  {recommendations.map((rec) => (
                    <div key={rec.id} className="bg-gray-50 rounded-lg p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold text-indigo-900">
                          {rec.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-sm ${rec.impact === 'high' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                          {rec.impact} impact
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{rec.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">{rec.category}</span>
                        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
                          Implement
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'business-analysis' && (
              <div>
                <h2 className="text-3xl font-bold text-indigo-900 mb-6">
                  Business Analysis
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-600 mb-4">
                    Detailed business analysis and AI insights will be displayed here.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'integrations' && (
              <div>
                <h2 className="text-3xl font-bold text-indigo-900 mb-6">
                  AI Integrations
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-600 mb-4">
                    Manage your AI integrations and workflows here.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}