'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-10 bg-white rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Something went wrong</h1>
        <p className="text-gray-600 mb-6">
          We apologize for the inconvenience. Please try again or contact support.
        </p>
        <div className="flex justify-center space-x-4">
          <button 
            onClick={() => reset()} 
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition"
          >
            Try Again
          </button>
          <Link 
            href="/" 
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full hover:bg-gray-300 transition"
          >
            Return to Homepage
          </Link>
        </div>
        {error.digest && (
          <div className="mt-6 text-sm text-gray-500">
            Error ID: {error.digest}
          </div>
        )}
      </div>
    </div>
  );
}