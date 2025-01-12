import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import { Roboto_Mono } from 'next/font/google'
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap'
});

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
    <html lang="en" className={`${inter.className} ${robotoMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}