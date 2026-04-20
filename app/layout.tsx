import type { Metadata } from 'next'
import { IBM_Plex_Mono, Manrope, Syne } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
})

const headingFont = Syne({
  subsets: ["latin"],
  variable: "--font-heading",
})

const monoFont = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-code",
})

export const metadata: Metadata = {
  title: 'Portfolio | Developer & Designer',
  description: 'I build accessible and pixel-perfect digital experiences for the web.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${bodyFont.variable} ${headingFont.variable} ${monoFont.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
