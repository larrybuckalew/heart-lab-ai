import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          404
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Page not found
        </p>
        <Link 
          href="/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Return Home
        </Link>
      </div>
    </div>
  );
}