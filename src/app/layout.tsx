import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Digital Rilievi',
  description: 'Rilievi digitali, con le tecniche più recenti e all\'avanguardia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // to hide console logs in production (remove this two lines to restore logs)

  console.warn = () => {}
  console.error = () => {}

  return (
    <html lang="en">
      <head>
        <Script type="text/javascript" src="/iubenda.js"></Script>
        <Script type="text/javascript" src="https://cs.iubenda.com/autoblocking/3452093.js"></Script>
        <Script type="text/javascript" src="//cdn.iubenda.com/cs/beta/iubenda_cs.js" charSet="UTF-8" async></Script>
      </head>
      <body className={inter.className}>
        <main>{children}</main>
        <Analytics />
        <SpeedInsights />
        <footer>
        </footer>
      </body>
    </html>
  )
}
