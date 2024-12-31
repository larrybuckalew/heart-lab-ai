export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Heart Lab AI
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Advanced voice technology and automation solutions
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-all">
            Get Started
          </button>
          <button className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all">
            Learn More
          </button>
        </div>
      </div>
    </main>
  );
}