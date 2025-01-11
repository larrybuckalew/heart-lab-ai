import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HeartLab AI - Intelligent Innovation',
  description: 'Empowering small businesses with AI solutions and expert guidance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}