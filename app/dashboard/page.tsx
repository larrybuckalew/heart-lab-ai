import React from 'react'
import SalesKPI from './components/SalesKPI'
import AIAnalytics from './components/AIAnalytics'
import Visualizations from './components/Visualizations'

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SalesKPI />
        <AIAnalytics />
        <Visualizations />
      </div>
    </div>
  )
}