import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-indigo-600">
                HeartLab AI
              </Link>
            </div>
          </div>
          
          <div className="flex space-x-8 items-center">
            <Link href="/about" className="text-gray-700 hover:text-indigo-600">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-indigo-600">
              Services
            </Link>
            <Link href="/solutions" className="text-gray-700 hover:text-indigo-600">
              Solutions
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-indigo-600">
              Pricing
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-indigo-600">
              Contact
            </Link>
            <Link href="/documentation" className="text-gray-700 hover:text-indigo-600">
              Docs
            </Link>
            <Link href="/login" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}