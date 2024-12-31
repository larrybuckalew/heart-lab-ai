import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Heart Lab AI',
  description: 'Advanced AI-powered cardiac analysis and research platform',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 min-h-screen flex flex-col`}>
        <header className="w-full bg-white shadow-md">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <img src="/logo.png" alt="Heart Lab AI Logo" className="h-10 mr-4"/>
              <h1 className="text-xl font-bold text-blue-800">Heart Lab AI</h1>
            </div>
            <ul className="flex space-x-6">
              <li><a href="/" className="text-gray-800 hover:text-blue-600">Home</a></li>
              <li><a href="/solutions" className="text-gray-800 hover:text-blue-600">Solutions</a></li>
              <li><a href="/about" className="text-gray-800 hover:text-blue-600">About</a></li>
              <li><a href="/contact" className="text-gray-800 hover:text-blue-600">Contact</a></li>
            </ul>
          </nav>
        </header>
        
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        
        <footer className="w-full bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4 flex justify-between">
            <div>
              <h3 className="font-bold mb-4">Heart Lab AI</h3>
              <p>&copy; 2024 All Rights Reserved</p>
            </div>
            <div className="flex space-x-4">
              <a href="/privacy" className="hover:text-blue-300">Privacy Policy</a>
              <a href="/terms" className="hover:text-blue-300">Terms of Service</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}