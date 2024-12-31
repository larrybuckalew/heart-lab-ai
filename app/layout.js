import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Heart Lab AI',
  description: 'Voice AI Technology & Automation Solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white">
          {children}
        </main>
      </body>
    </html>
  );
}