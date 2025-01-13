import React from 'react'
import dynamic from 'next/dynamic'

// Dynamically import components to handle SSR
const SalesKPI = dynamic(() => import('./components/SalesKPI'), { ssr: false })
const AIAnalytics = dynamic(() => import('./components/AIAnalytics'), { ssr: false })
const Visualizations = dynamic(() => import('./components/Visualizations'), { ssr: false })

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