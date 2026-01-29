import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { DashboardLayout } from '@/components/dashboard-layout'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'PixelUp Labs',
  description: 'Demo Dashboard',
  icons: {
    icon: 'https://res.cloudinary.com/dnfv0h10u/image/upload/v1769595964/image_7_dv0mmf.svg',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <DashboardLayout>
          {children}
        </DashboardLayout>
        <Analytics />
      </body>
    </html>
  )
}
