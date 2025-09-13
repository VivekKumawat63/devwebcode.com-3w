import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, User } from "lucide-react"
import NewsletterSubscription from "@/components/newsletter-subscription"

export const metadata: Metadata = {
  title: "Blog - DevCodeWeb | Web Development Insights from Jaipur",
  description:
    "Latest insights on web development, UI/UX design, and digital solutions from DevCodeWeb - Jaipur's leading web development company.",
  keywords: "web development blog, Jaipur web developer, UI/UX design, digital solutions, Rajasthan web development",
  openGraph: {
    title: "Blog - DevCodeWeb",
    description: "Latest insights on web development and digital solutions",
    url: "https://devcodeweb.com/blog",
    siteName: "DevCodeWeb",
    type: "website",
  },
}

const blogPosts = [
  {
    id: 1,
    title: "Why DevCodeWeb is the Best Web Developer in Jaipur",
    excerpt:
      "Discover what makes DevCodeWeb stand out as Jaipur's premier web development company, led by CEO Nikhil Kumawat and Co-Founder Vivek Kumawat.",
    content:
      "In the rapidly evolving digital landscape of Rajasthan, DevCodeWeb has emerged as the leading web development company in Jaipur...",
    author: "Nikhil Kumawat",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Company",
    tags: ["web development", "Jaipur", "best developer"],
    slug: "best-web-developer-jaipur",
  },
  {
    id: 2,
    title: "Modern Web Development Trends in 2024",
    excerpt:
      "Explore the latest web development trends that are shaping the digital landscape in India and how DevCodeWeb stays ahead.",
    content:
      "The web development industry continues to evolve at breakneck speed. At DevCodeWeb, we stay at the forefront of these changes...",
    author: "Vivek Kumawat",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Technology",
    tags: ["trends", "modern web", "development"],
    slug: "web-development-trends-2024",
  },
  {
    id: 3,
    title: "The Importance of UI/UX Design in Modern Websites",
    excerpt:
      "Learn why exceptional UI/UX design is crucial for business success and how DevCodeWeb creates user-centered experiences.",
    content:
      "User experience has become the cornerstone of successful digital products. At DevCodeWeb, we understand that great design...",
    author: "Nikhil Kumawat",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Design",
    tags: ["UI/UX", "design", "user experience"],
    slug: "importance-ui-ux-design",
  },
  {
    id: 4,
    title: "E-commerce Solutions for Rajasthan Businesses",
    excerpt:
      "How DevCodeWeb helps local businesses in Rajasthan establish powerful online presence with custom e-commerce solutions.",
    content:
      "The digital transformation of businesses in Rajasthan has accelerated significantly. DevCodeWeb specializes in creating...",
    author: "Vivek Kumawat",
    date: "2023-12-28",
    readTime: "8 min read",
    category: "E-commerce",
    tags: ["e-commerce", "Rajasthan", "business"],
    slug: "ecommerce-solutions-rajasthan",
  },
  {
    id: 5,
    title: "Mobile-First Development: Why It Matters",
    excerpt:
      "Understanding the mobile-first approach and how DevCodeWeb ensures your website performs perfectly on all devices.",
    content:
      "With mobile internet usage surpassing desktop in India, mobile-first development has become essential. DevCodeWeb...",
    author: "Nikhil Kumawat",
    date: "2023-12-20",
    readTime: "5 min read",
    category: "Mobile",
    tags: ["mobile-first", "responsive", "development"],
    slug: "mobile-first-development",
  },
  {
    id: 6,
    title: "Best Practices for SEO-Friendly Website Design in Rajasthan",
    excerpt:
      "Master SEO-friendly website design with proven strategies for Rajasthan businesses. Learn local SEO techniques, mobile optimization, and conversion-focused design principles.",
    content:
      "In today's digital landscape, having a beautiful website isn't enough – it needs to be discoverable. For businesses in Rajasthan, implementing SEO-friendly design practices is crucial...",
    author: "Vivek Kumawat",
    date: "2025-01-12",
    readTime: "10 min read",
    category: "SEO & Marketing",
    tags: ["SEO", "website design", "Rajasthan", "local SEO"],
    slug: "seo-friendly-website-design-rajasthan-best-practices",
  },
  {
    id: 7,
    title: "Complete Guide to Start Your E-commerce Business in Jaipur",
    excerpt:
      "Everything you need to know about starting a successful e-commerce business in Jaipur. From market research to digital marketing strategies.",
    content:
      "Starting an e-commerce business in Jaipur offers unique opportunities in one of India's most vibrant commercial centers. This comprehensive guide covers everything you need to know...",
    author: "Vivek Kumawat",
    date: "2025-01-08",
    readTime: "15 min read",
    category: "E-commerce",
    tags: ["e-commerce", "business", "Jaipur", "startup"],
    slug: "start-ecommerce-business-jaipur-guide",
  },
  {
    id: 8,
    title: "Top 5 Reasons to Build Your Website in Jaipur in 2025",
    excerpt:
      "Discover why Jaipur is becoming the preferred destination for website development. Learn about cost advantages, talent pool, and business opportunities.",
    content:
      "Jaipur has emerged as a leading destination for website development in India. With its growing tech ecosystem, skilled workforce, and business-friendly environment...",
    author: "Nikhil Kumawat",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "Web Development",
    tags: ["web development", "Jaipur", "business", "2025"],
    slug: "top-5-reasons-build-website-jaipur-2025",
  },
  {
    id: 9,
    title: "UI/UX Design Trends for Modern Businesses in 2025",
    excerpt:
      "Stay ahead with the latest UI/UX design trends that are shaping modern business websites. Learn about user-centered design principles and emerging technologies.",
    content:
      "The world of UI/UX design continues to evolve rapidly, with new trends emerging that reshape how users interact with digital products. In 2025, businesses need to stay ahead...",
    author: "Nikhil Kumawat",
    date: "2025-01-10",
    readTime: "12 min read",
    category: "Design & UX",
    tags: ["UI/UX", "design trends", "2025", "modern business"],
    slug: "ui-ux-trends-modern-businesses-2025",
  },
  {
    id: 10,
    title: "Why Choose DevCodeWeb for Your Next Project",
    excerpt:
      "Discover what makes DevCodeWeb the preferred choice for businesses in Jaipur and Rajasthan. Learn about our expertise, process, and commitment to excellence.",
    content:
      "Choosing the right web development partner is crucial for your business success. DevCodeWeb has established itself as the leading web development company in Jaipur...",
    author: "Nikhil Kumawat",
    date: "2025-01-05",
    readTime: "12 min read",
    category: "Company",
    tags: ["DevCodeWeb", "web development", "Jaipur", "services"],
    slug: "why-choose-devcodeweb-next-project",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">DevCodeWeb Blog</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, tutorials, and industry updates from Jaipur's leading web development experts
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300 group h-full"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-blue-600/20 text-blue-400">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-400 transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`} prefetch={true}>
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-gray-300 line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <CalendarDays className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs border-gray-600 text-gray-400">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <NewsletterSubscription />
    </div>
  )
}
