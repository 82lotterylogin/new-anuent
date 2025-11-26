import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Anuent - E-Commerce Platform',
  description: 'Your one-stop e-commerce solution',
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
