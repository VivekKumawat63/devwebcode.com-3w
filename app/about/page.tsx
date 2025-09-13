import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { TeamSection } from "@/components/team-section"
import { ValuesSection } from "@/components/values-section"
import { StatsSection } from "@/components/stats-section"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "About Us - DevCodeWeb | Next-Generation Web Development Team",
  description:
    "Learn about DevCodeWeb's mission to deliver fast, modern, and scalable web development solutions. Meet our team led by CEO Nikhil Kumawat and Co-Founder Vivek Kumawat.",
  keywords: [
    "about devcodeweb",
    "web development team Jaipur",
    "company mission",
    "values",
    "Jaipur web developers",
    "Nikhil Kumawat CEO",
    "Vivek Kumawat Co-Founder",
    "best web development company Rajasthan",
  ],
  authors: [
    { name: "Nikhil Kumawat", url: "https://devcodeweb.com" },
    { name: "Vivek Kumawat", url: "https://devcodeweb.com" },
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us - DevCodeWeb | Next-Generation Web Development Team",
    description:
      "Learn about DevCodeWeb's mission and meet our expert team led by CEO Nikhil Kumawat and Co-Founder Vivek Kumawat.",
    url: "https://devcodeweb.com/about",
    siteName: "DevCodeWeb",
    type: "website",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "DevCodeWeb Team - About Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - DevCodeWeb | Next-Generation Web Development Team",
    description: "Learn about DevCodeWeb's mission and meet our expert team in Jaipur.",
    images: ["/og-about.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <AboutHero />
        <ValuesSection />
        <TeamSection />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
