import type { Metadata } from 'next'
import './globals.css'
import '@/styles/animations.css'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  keywords: [
    'blockchain security',
    'smart contract audit',
    'web3 security',
    'DeFi security',
    'solidity auditor',
    'ethereum security',
    'security researcher',
  ],
  authors: [{ name: SITE_CONFIG.author.name }],
  creator: SITE_CONFIG.author.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    creator: '@0x_Darkart',
    images: [SITE_CONFIG.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/logos/home-button.png',
    shortcut: '/images/logos/home-button.png',
    apple: '/images/logos/home-button.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" data-scroll-behavior="smooth">
      <body className="font-mono antialiased">
        <div className="relative min-h-screen bg-background">
          {/* Background Effects */}
          <div className="fixed inset-0 cyber-grid opacity-10 pointer-events-none" />
          <div className="fixed inset-0 bg-gradient-to-br from-background via-background to-muted/20 pointer-events-none" />

          {/* Main Content */}
          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  )
}
