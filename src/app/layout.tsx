// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Barra Saint Journal',
  description: 'Personal blog by Eduarda Sena Barra - thoughts, experiences, and reflections',
  keywords: 'blog, personal, writing, thoughts, Eduarda Sena Barra',
  authors: [{ name: 'Eduarda Sena Barra' }],
  creator: 'Eduarda Sena Barra',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://barrasaintjournal.com',
    siteName: 'Barra Saint Journal',
    title: 'Barra Saint Journal',
    description: 'Personal blog by Eduarda Sena Barra - thoughts, experiences, and reflections',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Barra Saint Journal',
    description: 'Personal blog by Eduarda Sena Barra - thoughts, experiences, and reflections',
    creator: '@eduardasenabarra',
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" data-theme="light">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}