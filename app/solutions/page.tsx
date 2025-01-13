import React from 'react'
import SearchComponent from './components/SearchComponent'

export default function SolutionsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">AI Solutions for Small Businesses</h1>
      <SearchComponent />
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Voice AI</h2>
          <p>Intelligent communication solutions for businesses</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Process Automation</h2>
          <p>Streamline workflows with AI-driven automation</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Business Intelligence</h2>
          <p>Data-driven insights for strategic decision making</p>
        </div>
      </div>
    </div>
  )
}