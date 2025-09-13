import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"

export const metadata: Metadata = {
  title: "Contact Us - DevCodeWeb | Get In Touch for Web Development",
  description:
    "Contact DevCodeWeb for professional web development services in Jaipur. Call +91 9785343142 or email vivekkumawat184563@gmail.com for free consultation.",
  keywords: [
    "contact devcodeweb",
    "web development jaipur",
    "get quote",
    "contact form",
    "phone number",
    "email",
    "free consultation",
    "web development services",
    "Jaipur contact",
  ],
  authors: [
    { name: "Nikhil Kumawat", url: "https://devcodeweb.com" },
    { name: "Vivek Kumawat", url: "https://devcodeweb.com" },
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us - DevCodeWeb | Get In Touch for Web Development",
    description: "Contact DevCodeWeb for professional web development services in Jaipur. Free consultation available.",
    url: "https://devcodeweb.com/contact",
    siteName: "DevCodeWeb",
    type: "website",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact DevCodeWeb - Web Development Services Jaipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - DevCodeWeb | Get In Touch for Web Development",
    description: "Contact DevCodeWeb for professional web development services in Jaipur.",
    images: ["/og-contact.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <ContactHero />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <ContactForm />
          <ContactInfo />
        </div>
      </main>
      <Footer />
    </div>
  )
}
