import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { EnhancedHeroSection } from "@/components/enhanced-hero-section"
import { BenefitsSection } from "@/components/benefits-section"
import { AboutPreview } from "@/components/about-preview"
import { ServicesPreview } from "@/components/services-preview"
import { WhyChooseUs } from "@/components/why-choose-us"
import { PricingPreview } from "@/components/pricing-preview"
import { BlogPreview } from "@/components/blog-preview"
import { StatsSection } from "@/components/stats-section"
import { CTASection } from "@/components/cta-section"
import { StructuredData, organizationSchema, localBusinessSchema } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "DevCodeWeb - Best Web Developer in Jaipur | CEO Nikhil Kumawat",
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
  ],
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
    description: "Professional web development services led by CEO Nikhil Kumawat. Best web developer in Jaipur.",
    images: ["/og-image.png"],
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <StructuredData data={organizationSchema} />
      <StructuredData data={localBusinessSchema} />
      <Navigation />
      <main>
        <EnhancedHeroSection />
        <BenefitsSection />
        <AboutPreview />
        <ServicesPreview />
        <WhyChooseUs />
        <PricingPreview />
        <BlogPreview />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
