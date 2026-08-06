import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = {
  title: 'Vinyl Collection',
  description: 'Our vinyl collection'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className=''>

        {children}
      </body>
    </html>
  )
}
