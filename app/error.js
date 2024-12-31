"use client";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold mb-4 text-white">Oops! Something went wrong</h1>
        <p className="text-xl mb-8 text-gray-300">{error.message || 'An error occurred'}</p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors text-white"
        >
          Try again
        </button>
      </div>
    </div>
  );
}