"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-blue-900">
          <div className="text-center px-4">
            <h1 className="text-4xl font-bold mb-4 text-white">Something went wrong!</h1>
            <button
              onClick={() => reset()}
              className="px-6 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors text-white"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}