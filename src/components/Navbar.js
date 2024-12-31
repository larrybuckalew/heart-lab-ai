import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-white text-xl font-bold">Heart Lab AI</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/dashboard" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md">
                Dashboard
              </Link>
              <Link href="/analysis" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md">
                Analysis
              </Link>
              <Link href="/reports" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md">
                Reports
              </Link>
              <Link href="/login" className="text-white bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-md">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}