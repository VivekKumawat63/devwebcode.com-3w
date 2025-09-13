import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "DevCodeWeb - Best Web Developer in Jaipur | CEO Nikhil Kumawat",
    template: "%s | DevCodeWeb - Best Web Developer Jaipur",
  },
  description:
    "DevCodeWeb is the best web development company in Jaipur, Rajasthan. Led by CEO Nikhil Kumawat and Co-Founder Vivek Kumawat, we deliver professional web development, app development, UI/UX design, e-commerce solutions, and custom projects. Fast, modern, and scalable solutions.",
  keywords: [
    "best web developer Jaipur",
    "DevCodeWeb",
    "Nikhil Kumawat CEO",
    "Vivek Kumawat Co-Founder",
    "web development Jaipur",
    "app development Jaipur",
    "UI/UX design Jaipur",
    "e-commerce development",
    "custom web projects",
    "React development",
    "Next.js development",
    "TypeScript",
    "Rajasthan web developer",
    "best developer Jaipur",
    "professional web development",
    "mobile app development",
    "games development",
    "portfolio development",
  ],
  authors: [
    { name: "Nikhil Kumawat", url: "https://devcodeweb.com" },
    { name: "Vivek Kumawat", url: "https://devcodeweb.com" },
  ],
  creator: "DevCodeWeb - Nikhil Kumawat & Vivek Kumawat",
  publisher: "DevCodeWeb",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://devcodeweb.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DevCodeWeb - Best Web Developer in Jaipur | CEO Nikhil Kumawat",
    description:
      "Professional web development services led by CEO Nikhil Kumawat and Co-Founder Vivek Kumawat. Best web developer in Jaipur, Rajasthan.",
    url: "https://devcodeweb.com",
    siteName: "DevCodeWeb",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DevCodeWeb - Best Web Developer in Jaipur with CEO Nikhil Kumawat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevCodeWeb - Best Web Developer in Jaipur | CEO Nikhil Kumawat",
    description:
      "Professional web development services led by CEO Nikhil Kumawat. Best web developer in Jaipur, Rajasthan.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "technology",
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Jaipur",
    "geo.position": "26.9124;75.7873",
    ICBM: "26.9124, 75.7873",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>
          {children}
          <Analytics />
          <SpeedInsights />
        </Suspense>
      </body>
    </html>
  )
}
