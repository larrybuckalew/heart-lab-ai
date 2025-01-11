import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: '404 - Page Not Found | Heart Lab AI',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex items-center justify-center">
      <div className="text-center max-w-xl mx-auto">
        <Image 
          src="/404-illustration.png" 
          alt="Page Not Found" 
          width={400} 
          height={300} 
          className="mx-auto mb-8"
        />
        <h1 className="text-6xl font-extrabold text-indigo-900 mb-4">
          404
        </h1>
        <p className="text-2xl text-gray-700 mb-6">
          Oops! The page you're looking for seems to have gotten lost in the AI matrix.
        </p>
        <div className="space-x-4">
          <Link 
            href="/" 
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Return to Home
          </Link>
          <Link 
            href="/contact" 
            className="bg-white text-indigo-600 px-6 py-3 rounded-lg border border-indigo-600 hover:bg-indigo-50 transition"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}