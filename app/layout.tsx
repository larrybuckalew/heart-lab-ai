import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HeartLab AI',
  description: 'Intelligent Innovation for Every Business'
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