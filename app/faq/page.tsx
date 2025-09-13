import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FAQSection } from "@/components/faq-section"

export const metadata: Metadata = {
  title: "FAQ - DevCodeWeb | Frequently Asked Questions",
  description:
    "Find answers to common questions about DevCodeWeb's web development services, pricing, process, and more. Get expert insights from Jaipur's best developers.",
  keywords:
    "FAQ, web development questions, DevCodeWeb support, best developer Jaipur, web development process, pricing questions",
  openGraph: {
    title: "FAQ - DevCodeWeb",
    description: "Frequently asked questions about web development services",
    url: "https://devcodeweb.com/faq",
    siteName: "DevCodeWeb",
    type: "website",
  },
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
          <div className="relative max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Frequently Asked Questions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get answers to common questions about our web development services, process, and expertise
            </p>
          </div>
        </section>

        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
