import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, CalendarDays, Clock, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Suspense } from "react"

function BlogPostSkeleton() {
  return (
    <div className="min-h-screen bg-black text-white">
      <article className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="h-6 w-32 bg-gray-800 rounded mb-8 animate-pulse" />
          <header className="mb-12">
            <div className="h-6 w-24 bg-gray-800 rounded mb-4 animate-pulse" />
            <div className="h-12 w-3/4 bg-gray-800 rounded mb-6 animate-pulse" />
            <div className="h-6 w-full bg-gray-800 rounded mb-8 animate-pulse" />
            <div className="flex gap-6 pb-6">
              <div className="h-4 w-24 bg-gray-800 rounded animate-pulse" />
              <div className="h-4 w-24 bg-gray-800 rounded animate-pulse" />
              <div className="h-4 w-24 bg-gray-800 rounded animate-pulse" />
            </div>
          </header>
          <div className="space-y-4">
            <div className="h-4 w-full bg-gray-800 rounded animate-pulse" />
            <div className="h-4 w-5/6 bg-gray-800 rounded animate-pulse" />
            <div className="h-4 w-4/5 bg-gray-800 rounded animate-pulse" />
          </div>
        </div>
      </article>
    </div>
  )
}

// This would typically come from a database or CMS
const blogPosts = [
  {
    id: 1,
    title: "Why DevCodeWeb is the Best Web Developer in Jaipur",
    excerpt:
      "Discover what makes DevCodeWeb stand out as Jaipur's premier web development company, led by CEO Nikhil Kumawat and Co-Founder Vivek Kumawat.",
    content: `
      <h2>Leading Web Development in Jaipur</h2>
      <p>In the rapidly evolving digital landscape of Rajasthan, DevCodeWeb has emerged as the leading web development company in Jaipur. Under the visionary leadership of CEO Nikhil Kumawat and Co-Founder Vivek Kumawat, we have consistently delivered exceptional digital solutions that drive business growth.</p>
      
      <h3>What Sets DevCodeWeb Apart</h3>
      <p>Our commitment to excellence, innovative approach, and deep understanding of local market needs make us the preferred choice for businesses across Jaipur and Rajasthan. We combine cutting-edge technology with creative design to deliver websites that not only look stunning but also perform exceptionally.</p>
      
      <h3>Our Expertise</h3>
      <ul>
        <li>Custom Web Development</li>
        <li>E-commerce Solutions</li>
        <li>Mobile App Development</li>
        <li>UI/UX Design</li>
        <li>Digital Marketing</li>
      </ul>
      
      <h3>Client Success Stories</h3>
      <p>Over the years, we have helped numerous businesses establish their online presence and achieve their digital goals. Our portfolio includes projects ranging from small business websites to large-scale enterprise applications.</p>
      
      <p>Choose DevCodeWeb for your next project and experience the difference that quality, expertise, and dedication can make.</p>
    `,
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
    content: `
      <h2>The Evolution of Web Development</h2>
      <p>The web development industry continues to evolve at breakneck speed. At DevCodeWeb, we stay at the forefront of these changes to deliver cutting-edge solutions for our clients in Jaipur and across Rajasthan.</p>
      
      <h3>Key Trends Shaping 2024</h3>
      <ul>
        <li>AI-Powered Development Tools</li>
        <li>Progressive Web Applications (PWAs)</li>
        <li>Serverless Architecture</li>
        <li>Voice User Interface Integration</li>
        <li>Advanced Security Protocols</li>
      </ul>
      
      <h3>How DevCodeWeb Implements These Trends</h3>
      <p>Our development team continuously updates their skills and tools to incorporate these modern trends into every project. This ensures our clients receive websites that are not just current but future-ready.</p>
      
      <p>Stay ahead of the competition with DevCodeWeb's modern web development solutions.</p>
    `,
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
    content: `
      <h2>User Experience: The Heart of Modern Web Design</h2>
      <p>User experience has become the cornerstone of successful digital products. At DevCodeWeb, we understand that great design goes beyond aesthetics – it's about creating meaningful interactions that drive business results.</p>
      
      <h3>Why UI/UX Matters</h3>
      <ul>
        <li>Increased User Engagement</li>
        <li>Higher Conversion Rates</li>
        <li>Improved Brand Perception</li>
        <li>Better Search Engine Rankings</li>
        <li>Reduced Development Costs</li>
      </ul>
      
      <h3>Our Design Process</h3>
      <p>Our UI/UX design process is user-centered and data-driven. We conduct thorough research, create detailed user personas, and test our designs extensively to ensure optimal user experience.</p>
      
      <p>Transform your digital presence with DevCodeWeb's expert UI/UX design services.</p>
    `,
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
    content: `
      <h2>Digital Transformation for Rajasthan Businesses</h2>
      <p>The digital transformation of businesses in Rajasthan has accelerated significantly. DevCodeWeb specializes in creating robust e-commerce solutions that help local businesses reach global markets while maintaining their unique cultural identity.</p>
      
      <h3>Our E-commerce Expertise</h3>
      <ul>
        <li>Custom E-commerce Development</li>
        <li>Payment Gateway Integration</li>
        <li>Inventory Management Systems</li>
        <li>Multi-language Support</li>
        <li>Mobile Commerce Solutions</li>
      </ul>
      
      <h3>Success Stories</h3>
      <p>We've helped numerous Rajasthan businesses, from traditional handicraft sellers to modern retailers, establish successful online stores that generate significant revenue and expand their customer base.</p>
      
      <p>Ready to take your business online? Contact DevCodeWeb for comprehensive e-commerce solutions.</p>
    `,
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
    content: `
      <h2>The Mobile Revolution in India</h2>
      <p>With mobile internet usage surpassing desktop in India, mobile-first development has become essential. DevCodeWeb ensures every website we create provides an exceptional mobile experience.</p>
      
      <h3>Mobile-First Benefits</h3>
      <ul>
        <li>Better Search Engine Rankings</li>
        <li>Improved User Experience</li>
        <li>Faster Loading Times</li>
        <li>Higher Conversion Rates</li>
        <li>Future-Proof Design</li>
      </ul>
      
      <h3>Our Mobile Development Process</h3>
      <p>We start every project with mobile design, ensuring optimal performance on smaller screens before scaling up to desktop. This approach results in cleaner, more efficient code and better user experiences across all devices.</p>
      
      <p>Ensure your website succeeds in the mobile-first world with DevCodeWeb's expert development services.</p>
    `,
    author: "Nikhil Kumawat",
    date: "2023-12-20",
    readTime: "5 min read",
    category: "Mobile",
    tags: ["mobile-first", "responsive", "development"],
    slug: "mobile-first-development",
  },
]

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return {
      title: "Post Not Found - DevCodeWeb",
    }
  }

  return {
    title: `${post.title} - DevCodeWeb Blog`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://devcodeweb.com/blog/${post.slug}`,
      siteName: "DevCodeWeb",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  // Now all blog posts render properly without redirects

  return (
    <Suspense fallback={<BlogPostSkeleton />}>
      <div className="min-h-screen bg-black text-white">
        <article className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            {/* Article Header */}
            <header className="mb-12">
              <Badge variant="secondary" className="bg-blue-600/20 text-blue-400 mb-4">
                {post.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">{post.title}</h1>
              <p className="text-xl text-gray-300 mb-8">{post.excerpt}</p>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 border-b border-gray-800 pb-6">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <CalendarDays className="w-4 h-4 mr-2" />
                  {new Date(post.date).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {post.readTime}
                </div>
              </div>
            </header>

            {/* Article Content */}
            <div
              className="prose prose-invert prose-lg prose-cyan max-w-none
                prose-headings:text-white prose-headings:font-bold
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                prose-ul:text-gray-300 prose-li:mb-2
                prose-strong:text-white prose-strong:font-semibold"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-800">
              <h3 className="text-lg font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="border-gray-600 text-gray-400">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </Suspense>
  )
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}
