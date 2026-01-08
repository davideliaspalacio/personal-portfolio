import type React from "react"
import type { Metadata } from "next"
import { Patrick_Hand, Caveat, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SoundProvider } from "@/lib/sound-context"
import "./globals.css"

const patrickHand = Patrick_Hand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-patrick-hand",
})

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "David Palacio | Frontend & Web3 Developer",
  description: "Frontend & Web3 Developer from Colombia. Building modern, interactive web experiences with React, Next.js, and blockchain technologies.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className={`${patrickHand.variable} ${caveat.variable} ${geistMono.variable} font-sans antialiased`}>
        <SoundProvider>
          {children}
        </SoundProvider>
        <Analytics />
      </body>
    </html>
  )
}
