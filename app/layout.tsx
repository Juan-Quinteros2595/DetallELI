import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Lora, Parisienne } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
})

const parisienne = Parisienne({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cursive",
})

export const metadata: Metadata = {
  title: "Para Eli",
  description: "Una presentación especial para ti",
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#f2f2f2",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${lora.variable} ${parisienne.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
