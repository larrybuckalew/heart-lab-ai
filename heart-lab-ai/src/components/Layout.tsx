import React, { ReactNode } from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">Heart Lab AI</Link>
          <div className="space-x-4">
            <Link href="/" className="hover:text-blue-200">Home</Link>
            <Link href="/about" className="hover:text-blue-200">About</Link>
            <Link href="/research" className="hover:text-blue-200">Research</Link>
            <Link href="/contact" className="hover:text-blue-200">Contact</Link>
          </div>
        </div>
      </nav>
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-gray-200 p-4 text-center">
        <p>&copy; 2025 Heart Lab AI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;