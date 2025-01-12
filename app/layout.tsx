import type { Metadata } from "next";
import { Geist } from 'next/font/google'
import { Geist_Mono } from 'next/font/google'
import "./globals.css";

const geistSans = Geist({ subsets: ['latin'] });
const geistMono = Geist_Mono({ subsets: ['latin'] });

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