import type { Metadata, Viewport } from "next"
import { Manrope, Inter } from "next/font/google"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "AGURAFI Digital Marketing — Increase Your Reach. Elevate Your Brand. Drive More Sales",
  description:
    "Agurafi empowers brands to grow through creative visuals, strategic marketing, and data-driven solutions that deliver measurable results.",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#083731",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} bg-background`}>
      <body className="font-sans text-foreground antialiased">{children}</body>
    </html>
  )
}
