import './globals.css';

export const metadata = {
  title: 'Heart Lab AI',
  description: 'Advanced Voice AI & Automation Solutions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900">
          {children}
        </div>
      </body>
    </html>
  );
}