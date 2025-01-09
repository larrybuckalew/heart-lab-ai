import './globals.css'

export const metadata = {
  title: 'HeartLab AI',
  description: 'AI-powered cardiac risk assessment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='bg-gray-100'>{children}</body>
    </html>
  )
}