export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-blue-900">
      <div className="text-center px-4">
        <h1 className="text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">404</h1>
        <p className="text-xl mb-8 text-gray-300">The page you're looking for doesn't exist.</p>
        <a 
          href="/"
          className="px-6 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors text-white"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}