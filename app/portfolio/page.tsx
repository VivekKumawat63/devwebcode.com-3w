import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PortfolioHero } from "@/components/portfolio-hero"
import { ProjectsGrid } from "@/components/projects-grid"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Portfolio - DevCodeWeb | Our Work & Projects",
  description:
    "Explore our portfolio of web development projects including games, e-commerce solutions, and custom applications built with modern technologies in Jaipur.",
  keywords: [
    "web development portfolio",
    "projects",
    "games development",
    "e-commerce",
    "React projects",
    "Next.js applications",
    "Jaipur web development work",
    "custom applications",
    "modern web projects",
    "professional portfolio",
  ],
  authors: [
    { name: "Nikhil Kumawat", url: "https://devcodeweb.com" },
    { name: "Vivek Kumawat", url: "https://devcodeweb.com" },
  ],
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Portfolio - DevCodeWeb | Our Work & Projects",
    description:
      "Explore our portfolio of web development projects including games, e-commerce, and custom applications.",
    url: "https://devcodeweb.com/portfolio",
    siteName: "DevCodeWeb",
    type: "website",
    images: [
      {
        url: "/og-portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "DevCodeWeb Portfolio - Our Web Development Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - DevCodeWeb | Our Work & Projects",
    description: "Explore our portfolio of web development projects and custom applications.",
    images: ["/og-portfolio.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <PortfolioHero />
        <ProjectsGrid />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
