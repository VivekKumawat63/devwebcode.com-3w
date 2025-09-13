import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PricingHero } from "@/components/pricing-hero"
import { PricingPlans } from "@/components/pricing-plans"

export const metadata: Metadata = {
  title: "Pricing & Plans - DevCodeWeb | Affordable Web Development Services",
  description:
    "Transparent pricing for professional web development services in Jaipur. Choose from our flexible plans for games development, e-commerce, UI/UX, and custom projects.",
  keywords: [
    "web development pricing",
    "affordable web development",
    "development packages",
    "pricing plans",
    "jaipur web development",
    "cost-effective web solutions",
    "transparent pricing",
    "web development rates",
    "budget-friendly web services",
  ],
  authors: [
    { name: "Nikhil Kumawat", url: "https://devcodeweb.com" },
    { name: "Vivek Kumawat", url: "https://devcodeweb.com" },
  ],
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing & Plans - DevCodeWeb | Affordable Web Development Services",
    description: "Transparent pricing for professional web development services in Jaipur. Flexible plans available.",
    url: "https://devcodeweb.com/pricing",
    siteName: "DevCodeWeb",
    type: "website",
    images: [
      {
        url: "/og-pricing.jpg",
        width: 1200,
        height: 630,
        alt: "DevCodeWeb Pricing - Affordable Web Development Plans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing & Plans - DevCodeWeb | Affordable Web Development Services",
    description: "Transparent pricing for professional web development services in Jaipur.",
    images: ["/og-pricing.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <PricingHero />
        <PricingPlans />
      </main>
      <Footer />
    </div>
  )
}
