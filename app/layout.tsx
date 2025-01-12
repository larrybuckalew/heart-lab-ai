import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import { Roboto_Mono } from 'next/font/google'
import "./globals.css";
import Navigation from "../components/Navigation";
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono'
});

export const metadata: Metadata = {
  title: "HeartLab AI",
  description: "AI-powered business solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} ${robotoMono.className}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J3R5PM89DD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J3R5PM89DD');
          `}
        </Script>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}