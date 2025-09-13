import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { UIUXHero } from "@/components/ui-ux-hero"
import { UIUXImportance } from "@/components/ui-ux-importance"
import { UIUXProcess } from "@/components/ui-ux-process"
import { UIUXShowcase } from "@/components/ui-ux-showcase"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "UI/UX Design - DevCodeWeb | User Experience & Interface Design",
  description:
    "Professional UI/UX design services in Jaipur. Create intuitive, engaging user experiences that drive conversions and business growth with DevCodeWeb.",
  keywords:
    "UI/UX design, user experience, interface design, Jaipur UI designer, web design, mobile app design, user research",
  openGraph: {
    title: "UI/UX Design - DevCodeWeb",
    description: "Professional UI/UX design services that create exceptional user experiences",
    url: "https://devcodeweb.com/ui-ux",
    siteName: "DevCodeWeb",
    type: "website",
  },
}

export default function UIUXPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <UIUXHero />
        <UIUXImportance />
        <UIUXProcess />
        <UIUXShowcase />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
