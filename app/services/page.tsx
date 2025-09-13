import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services-hero"
import { ServicesList } from "@/components/services-list"
import { ProcessSection } from "@/components/process-section"
import { TechStack } from "@/components/tech-stack"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Services - DevCodeWeb | Professional Web Development Services",
  description:
    "Comprehensive web development services including games development, e-commerce solutions, advanced UI/UX design, portfolio development, and custom projects in Jaipur.",
  keywords: [
    "web development services",
    "games development",
    "e-commerce",
    "UI/UX design",
    "custom projects",
    "React development",
    "Next.js development",
    "mobile app development",
    "Jaipur web services",
    "professional web development",
  ],
  authors: [
    { name: "Nikhil Kumawat", url: "https://devcodeweb.com" },
    { name: "Vivek Kumawat", url: "https://devcodeweb.com" },
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services - DevCodeWeb | Professional Web Development Services",
    description:
      "Comprehensive web development services including games, e-commerce, UI/UX design, and custom projects in Jaipur.",
    url: "https://devcodeweb.com/services",
    siteName: "DevCodeWeb",
    type: "website",
    images: [
      {
        url: "/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "DevCodeWeb Services - Professional Web Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services - DevCodeWeb | Professional Web Development Services",
    description: "Comprehensive web development services in Jaipur including games, e-commerce, and UI/UX design.",
    images: ["/og-services.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <ServicesHero />
        <ServicesList />
        <ProcessSection />
        <TechStack />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
