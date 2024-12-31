import { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Activity, Users, Clock, Zap } from 'lucide-react';

export default function Metrics() {
  const [timeframe, setTimeframe] = useState('week');

  const performanceData = {
    week: [
      { date: 'Mon', accuracy: 98, speed: 120, users: 450, load: 65 },
      { date: 'Tue', accuracy: 97, speed: 115, users: 480, load: 70 },
      { date: 'Wed', accuracy: 99, speed: 125, users: 520, load: 75 },
      { date: 'Thu', accuracy: 96, speed: 118, users: 490, load: 68 },
      { date: 'Fri', accuracy: 98, speed: 122, users: 510, load: 72 },
      { date: 'Sat', accuracy: 97, speed: 119, users: 430, load: 60 },
      { date: 'Sun', accuracy: 98, speed: 121, users: 400, load: 58 }
    ]
  };

  const stats = [
    { 
      title: 'Accuracy',
      value: '98%',
      change: '+2.4%',
      icon: Activity,
      color: 'text-green-500'
    },
    {
      title: 'Response Time',
      value: '120ms',
      change: '-15ms',
      icon: Clock,
      color: 'text-blue-500'
    },
    {
      title: 'Active Users',
      value: '2,847',
      change: '+12%',
      icon: Users,
      color: 'text-purple-500'
    },
    {
      title: 'System Load',
      value: '68%',
      change: '-5%',
      icon: Zap,
      color: 'text-yellow-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Performance Metrics</h1>
          <select 
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2"
          >
            <option value="day">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
          </select>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
                <span className={`text-sm ${
                  stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                }`}>
                  {stat.change}
                </span>
              </div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.title}</div>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Accuracy & Speed Chart */}
          <div className="bg-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-6">Accuracy & Response Time</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData[timeframe]}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="date" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                  labelStyle={{ color: '#9CA3AF' }}
                />
                <Legend />
                <Line type="monotone" dataKey="accuracy" stroke="#10B981" name="Accuracy %" />
                <Line type="monotone" dataKey="speed" stroke="#3B82F6" name="Response Time (ms)" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Users & Load Chart */}
          <div className="bg-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-6">Users & System Load</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performanceData[timeframe]}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="date" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                  labelStyle={{ color: '#9CA3AF' }}
                />
                <Legend />
                <Bar dataKey="users" fill="#8B5CF6" name="Active Users" />
                <Bar dataKey="load" fill="#FBBF24" name="System Load %" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}