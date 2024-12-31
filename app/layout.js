import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Heart Lab AI',
  description: 'Advanced Voice AI & Automation Solutions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gradient-to-b from-gray-900 to-blue-900`}>
        {children}
      </body>
    </html>
  );
}