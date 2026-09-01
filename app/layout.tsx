import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Arkajyoti Banerjee - Full Stack Developer",
  description: "Portfolio of Arkajyoti Banerjee, Full Stack Developer and EEE student at VIT Chennai. Building real, deployed applications and AI-integrated software solutions.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Arkajyoti Banerjee - Full Stack Developer",
    description: "Full Stack Developer and EEE student at VIT Chennai. Building real, deployed applications and AI-integrated software solutions.",
    url: "https://portfolio-website-build-psi.vercel.app",
    siteName: "Arkajyoti Banerjee Portfolio",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
