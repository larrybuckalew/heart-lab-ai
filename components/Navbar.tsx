import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-xl text-blue-600">
            HeartLab AI
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition">
              About
            </Link>
            <Link href="/documentation" className="text-gray-600 hover:text-blue-600 transition">
              Documentation
            </Link>
            <Link href="/careers" className="text-gray-600 hover:text-blue-600 transition">
              Careers
            </Link>
          </div>

          <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}