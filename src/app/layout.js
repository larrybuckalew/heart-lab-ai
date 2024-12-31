import './globals.css'

export const metadata = {
  title: 'Heart Lab AI',
  description: 'Advanced cardiac analysis powered by AI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}