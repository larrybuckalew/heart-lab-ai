'use client'

import React, { useState } from 'react'

type SearchResult = {
  title: string;
  link: string;
  snippet: string;
}

export default function SearchComponent() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])

  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
      const data = await response.json()
      setResults(data.results)
    } catch (error) {
      console.error('Search failed', error)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search AI solutions..."
          className="flex-grow px-4 py-2 border rounded-l-lg"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
        >
          Search
        </button>
      </div>
      <div className="mt-4">
        {results.map((result, index) => (
          <div key={index} className="mb-4 p-4 bg-white shadow rounded">
            <h3 className="text-lg font-semibold">{result.title}</h3>
            <p className="text-gray-600">{result.snippet}</p>
            <a href={result.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}