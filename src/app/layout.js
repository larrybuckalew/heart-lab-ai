import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Heart Lab AI',
  description: 'Advanced cardiac analysis powered by AI',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}