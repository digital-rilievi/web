import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Digital Rilievi',
  description: 'Digital Rilievi srl',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
          {/* <a href="https://www.iubenda.com/privacy-policy/24683312" className="iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe " title="Privacy Policy ">Privacy Policy</a><Script type="text/javascript" src="/iubenda-privacy.js"></Script>
          <a href="https://www.iubenda.com/privacy-policy/24683312/cookie-policy" className="iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe " title="Cookie Policy ">Cookie Policy</a><Script type="text/javascript" src="/iubenda-cookies.js"></Script>
         */}
        </footer>
      </body>
    </html>
  )
}
