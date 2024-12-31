'use client';

import { useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-blue-900">
      <div className="text-center px-4">
        <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-4">Something went wrong!</h1>
        <p className="text-gray-300 mb-8">We apologize for the inconvenience.</p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}