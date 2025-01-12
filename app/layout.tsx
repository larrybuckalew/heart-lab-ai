import type { Metadata } from "next";
import { GeistSans } from 'next/font/google'
import { GeistMono } from 'next/font/google'
import "./globals.css";

const geistSans = GeistSans({ subsets: ['latin'] });
const geistMono = GeistMono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "HeartLab AI",
  description: "AI-powered cardiac health insights",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.className} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}