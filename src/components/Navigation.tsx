import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold">Heart Lab AI</Link>
          <div className="space-x-4">
            <Link href="/analysis" className="hover:text-blue-600">Analysis</Link>
            <Link href="/dashboard" className="hover:text-blue-600">Dashboard</Link>
            <Link href="/about" className="hover:text-blue-600">About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;