'use client';

import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-blue-900">
      <div className="text-center px-4">
        <h1 className="text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">404</h1>
        <p className="text-xl mb-8 text-gray-300">Oops! The page you're looking for doesn't exist.</p>
        <a 
          href="/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Return Home
        </a>
      </div>
    </div>
  );
}