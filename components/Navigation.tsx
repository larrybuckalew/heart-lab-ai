import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">Heart Lab AI</Link>
        <div className="space-x-6">
          <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
          <Link href="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
          <Link href="/solutions" className="text-gray-700 hover:text-blue-600">Solutions</Link>
          <Link href="/pricing" className="text-gray-700 hover:text-blue-600">Pricing</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          <Link href="/docs" className="text-gray-700 hover:text-blue-600">Docs</Link>
          <Link href="/blog" className="text-gray-700 hover:text-blue-600">Blog</Link>
          <Link href="/login" className="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">Login</Link>
        </div>
      </div>
    </nav>
  )
}