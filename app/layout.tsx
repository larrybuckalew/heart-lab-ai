import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/ui/Navigation';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Heart Lab AI | Voice AI & Business Automation Solutions',
    template: '%s | Heart Lab AI'
  },
  description: 'Transform your business with AI-powered voice solutions, automation, and intelligent customer service. Seamless integration with GoHighLevel CRM.',
  keywords: ['Voice AI', 'Business Automation', 'AI Assistant', 'GoHighLevel Integration'],
  openGraph: {
    title: 'Heart Lab AI | Voice AI & Business Automation',
    description: 'Transform your business with AI-powered voice solutions and automation',
    url: 'https://heartlabai.com',
    siteName: 'Heart Lab AI',
    locale: 'en_US',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://heartlabai.com" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}