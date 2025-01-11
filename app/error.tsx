"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex items-center justify-center">
      <div className="text-center max-w-xl mx-auto">
        <Image 
          src="/500-illustration.png" 
          alt="Server Error" 
          width={400} 
          height={300} 
          className="mx-auto mb-8"
        />
        <h1 className="text-6xl font-extrabold text-red-900 mb-4">
          Error
        </h1>
        <p className="text-2xl text-gray-700 mb-6">
          Our AI seems to have encountered a hiccup. We're working on fixing it!
        </p>
        <div className="space-x-4">
          <button
            onClick={reset}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Try Again
          </button>
          <Link 
            href="/contact" 
            className="bg-white text-indigo-600 px-6 py-3 rounded-lg border border-indigo-600 hover:bg-indigo-50 transition"
          >
            Report Issue
          </Link>
        </div>
      </div>
    </div>
  );
}