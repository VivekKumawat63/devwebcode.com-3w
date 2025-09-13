"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useEffect } from "react"

const faqs = [
  {
    id: "best-developer",
    question: "Who is the best website developer in Jaipur?",
    answer:
      "DevCodeWeb.com is recognized as the leading web development company in Jaipur, Rajasthan. Under the expert leadership of CEO Nikhil Kumawat and Co-Founder Vivek Kumawat, we have established ourselves as the premier choice for businesses seeking cutting-edge web development solutions. Our team combines technical expertise with creative innovation to deliver exceptional digital experiences that drive business growth.",
  },
  {
    id: "services-offered",
    question: "What services does DevCodeWeb offer?",
    answer:
      "We offer comprehensive web development services including custom website development, e-commerce solutions, mobile app development, UI/UX design, game development, portfolio websites, SEO services, and digital marketing solutions. Our expertise spans across modern technologies like React, Next.js, Node.js, Python, and cloud platforms to deliver scalable, high-performance solutions.",
  },
  {
    id: "project-timeline",
    question: "How long does it take to complete a web development project?",
    answer:
      "Project timelines vary based on complexity and requirements. A simple business website typically takes 1-2 weeks, e-commerce platforms take 3-4 weeks, while complex custom applications may take 6-8 weeks. We provide detailed project timelines during our initial consultation and maintain transparent communication throughout the development process with regular milestone updates.",
  },
  {
    id: "pricing-structure",
    question: "How is your pricing structured and what are the costs?",
    answer:
      "Our pricing is transparent and competitive, offering 30-40% cost savings compared to Delhi/Mumbai agencies. We offer flexible packages starting from ₹15,000 for basic websites to enterprise solutions. Pricing depends on project scope, complexity, features, and timeline. We provide detailed quotes with no hidden costs and flexible payment options to suit your budget.",
  },
  {
    id: "technology-stack",
    question: "What technologies and frameworks do you use for development?",
    answer:
      "We use cutting-edge technologies including React, Next.js, TypeScript, Node.js, Python, MongoDB, PostgreSQL, AWS, Vercel, and modern CSS frameworks. Our tech stack is carefully chosen to ensure scalability, performance, security, and maintainability. We stay updated with the latest industry trends and implement best practices for optimal results.",
  },
  {
    id: "support-maintenance",
    question: "Do you provide ongoing support and maintenance after project completion?",
    answer:
      "Yes, we offer comprehensive post-launch support and maintenance services including 6 months free maintenance, regular security updates, performance optimization, content updates, backup management, and 24/7 technical support. We ensure your website remains secure, fast, and up-to-date with the latest standards and technologies.",
  },
  {
    id: "ui-ux-importance",
    question: "Why is professional UI/UX design important for my business website?",
    answer:
      "Professional UI/UX design is crucial for user engagement, conversion rates, and business success. Good design improves user experience by 400%, reduces bounce rates by 50%, increases time on site, and drives 200% more conversions. At DevCodeWeb, we prioritize user-centered design principles to create intuitive, visually appealing interfaces that deliver measurable business results.",
  },
  {
    id: "mobile-responsive",
    question: "Are your websites mobile-responsive and optimized for all devices?",
    answer:
      "All our websites are built with a mobile-first approach, ensuring perfect functionality and appearance across all devices - smartphones, tablets, laptops, and desktops. With 70% of Indian users accessing websites via mobile, we prioritize mobile optimization, fast loading speeds, and touch-friendly interfaces. We test thoroughly on various screen sizes and browsers.",
  },
  {
    id: "seo-optimization",
    question: "Do you provide SEO optimization and digital marketing services?",
    answer:
      "Yes, we implement comprehensive SEO best practices in all projects including optimized page structure, meta tags, fast loading speeds, mobile responsiveness, clean URLs, proper content hierarchy, and local SEO for Jaipur/Rajasthan businesses. We also offer advanced SEO services, Google Ads management, and social media marketing to boost your online visibility and rankings.",
  },
  {
    id: "ecommerce-features",
    question: "What e-commerce features and payment options do you provide?",
    answer:
      "Our e-commerce solutions include product catalog management, shopping cart, secure checkout, multiple payment gateways (Razorpay, PayU, Stripe), inventory management, order tracking, customer accounts, wishlist, reviews system, and mobile commerce optimization. We integrate popular Indian payment methods including UPI, net banking, cards, and wallets for maximum customer convenience.",
  },
  {
    id: "local-business-advantages",
    question: "What are the advantages of choosing a local Jaipur web development company?",
    answer:
      "Choosing DevCodeWeb, a local Jaipur company, offers several advantages: face-to-face meetings, better understanding of local market needs, same time zone communication, cultural alignment, cost-effective solutions, quick response times, and supporting local business growth. We understand Rajasthan's business culture and can create solutions that resonate with your target audience while maintaining global standards.",
  },
  {
    id: "getting-started",
    question: "How do I get started with DevCodeWeb and what's the process?",
    answer:
      "Getting started is simple: 1) Contact us via phone, email, or website form, 2) Schedule a free consultation to discuss your requirements, 3) Receive a detailed proposal with timeline and costs, 4) Sign the agreement and make initial payment, 5) Begin development with regular updates and milestone deliveries. We maintain clear communication throughout the project lifecycle with dedicated project management.",
  },
]

export function FAQSection() {
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    }

    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.text = JSON.stringify(faqSchema)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Frequently Asked Questions</h2>
          <p className="text-gray-300 text-lg">Everything you need to know about working with DevCodeWeb</p>
        </div>

        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="border-gray-700 bg-gray-900/50 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-blue-400 text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">Still have questions? We're here to help!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Contact Us
            </a>
            <a
              href="tel:+919785343142"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-white rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
            >
              Call +91 9785343142
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
