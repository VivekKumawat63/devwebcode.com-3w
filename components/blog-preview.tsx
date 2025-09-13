"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Suspense } from "react"

function BlogCardSkeleton() {
  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardHeader className="p-0">
        <div className="h-48 bg-gray-800 rounded-t-lg animate-pulse" />
      </CardHeader>
      <CardContent className="p-6">
        <div className="h-6 w-3/4 bg-gray-800 rounded mb-3 animate-pulse" />
        <div className="h-4 w-full bg-gray-800 rounded mb-2 animate-pulse" />
        <div className="h-4 w-2/3 bg-gray-800 rounded mb-4 animate-pulse" />
        <div className="h-10 w-24 bg-gray-800 rounded animate-pulse" />
      </CardContent>
    </Card>
  )
}

const blogPosts = [
  {
    title: "Top 5 Reasons to Build Your Website in Jaipur (2025 Guide)",
    description:
      "Discover why Jaipur is becoming the hub for web development and how local expertise can benefit your business.",
    image: "/jaipur-web-development-office-modern-technology.jpg",
    slug: "top-5-reasons-build-website-jaipur-2025",
  },
  {
    title: "Best Practices for SEO-Friendly Website Design in Rajasthan",
    description:
      "Learn the essential SEO strategies that help Rajasthan businesses rank higher on Google and attract more customers.",
    image: "/seo-optimization-dashboard-analytics-rajasthan.jpg",
    slug: "seo-friendly-website-design-rajasthan-best-practices",
  },
  {
    title: "UI/UX Trends Every Business Must Know in 2025",
    description:
      "Stay ahead with the latest UI/UX design trends that are shaping user experiences and driving conversions.",
    image: "/modern-ui-ux-design-trends-2025-interface.jpg",
    slug: "ui-ux-trends-modern-businesses-2025",
  },
  {
    title: "How to Start Your E-Commerce Business in Jaipur",
    description:
      "A complete guide to launching your online store in Jaipur, from planning to execution and marketing strategies.",
    image: "/ecommerce-business-jaipur-online-store-setup.jpg",
    slug: "start-ecommerce-business-jaipur-guide",
  },
  {
    title: "Why Choose devcodeweb.com for Your Next Project",
    description: "Explore what makes DevCodeWeb the preferred choice for businesses across Rajasthan and India.",
    image: "/devcodeweb-team-office-jaipur-web-development.jpg",
    slug: "why-choose-devcodeweb-next-project",
  },
]

export function BlogPreview() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Latest{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Insights</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights in web development, design, and digital marketing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.slice(0, 3).map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Suspense fallback={<BlogCardSkeleton />}>
                <Card className="bg-gray-900 border-gray-800 hover:border-cyan-500 transition-all duration-300 group h-full">
                  <CardHeader className="p-0">
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <CardTitle className="text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-gray-400 mb-4 line-clamp-3">{post.description}</CardDescription>
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white bg-transparent mt-auto"
                    >
                      <Link href={`/blog/${post.slug}`} prefetch={true}>
                        Read More
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </Suspense>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {blogPosts.slice(3, 5).map((post, index) => (
            <motion.div
              key={index + 3}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
            >
              <Suspense fallback={<BlogCardSkeleton />}>
                <Card className="bg-gray-900 border-gray-800 hover:border-cyan-500 transition-all duration-300 group h-full">
                  <CardHeader className="p-0">
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <CardTitle className="text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-gray-400 mb-4 line-clamp-3">{post.description}</CardDescription>
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white bg-transparent mt-auto"
                    >
                      <Link href={`/blog/${post.slug}`} prefetch={true}>
                        Read More
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </Suspense>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button asChild className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
            <Link href="/blog" prefetch={true}>
              View All Blogs
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
