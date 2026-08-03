import type { Metadata } from 'next'
import './globals.css'
import { ThemeController } from './components/ThemeController/ThemeController'
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
      <body>
        <ThemeController />

        {children}
      </body>
    </html>
  )
}
