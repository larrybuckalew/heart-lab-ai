import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            AI Solutions for Small Businesses
          </h1>
          <p className="text-xl text-gray-600">
            Empower your business with intelligent automation, voice AI, and strategic insights.
          </p>
          <div className="flex space-x-4">
            <a 
              href="/solutions" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Explore Solutions
            </a>
            <a 
              href="/contact" 
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-md">
            <Image 
              src="/images/ai-solutions.svg" 
              alt="AI Solutions Illustration" 
              width={500} 
              height={500} 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}