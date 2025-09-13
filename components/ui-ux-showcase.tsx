import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Star } from "lucide-react"
import Image from "next/image"

const showcaseProjects = [
  {
    title: "E-commerce Platform Redesign",
    description: "Complete UI/UX overhaul for a major e-commerce platform, resulting in 40% increase in conversions.",
    image: "/modern-ecommerce-website.png",
    tags: ["E-commerce", "Mobile-First", "Conversion Optimization"],
    metrics: {
      conversion: "+40%",
      engagement: "+65%",
      satisfaction: "4.8/5",
    },
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "SaaS Dashboard Interface",
    description: "Intuitive dashboard design for a B2B SaaS platform with complex data visualization needs.",
    image: "/modern-dashboard-interface-design.jpg",
    tags: ["SaaS", "Data Visualization", "B2B"],
    metrics: {
      usability: "+55%",
      efficiency: "+30%",
      satisfaction: "4.9/5",
    },
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Mobile Banking App",
    description: "Secure and user-friendly mobile banking application with focus on accessibility and trust.",
    image: "/mobile-banking-app.png",
    tags: ["Mobile App", "FinTech", "Security"],
    metrics: {
      adoption: "+75%",
      transactions: "+50%",
      satisfaction: "4.7/5",
    },
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Healthcare Portal",
    description: "Patient-centered healthcare portal design focusing on ease of use and information accessibility.",
    image: "/healthcare-patient-portal-design.jpg",
    tags: ["Healthcare", "Accessibility", "Patient Experience"],
    metrics: {
      usage: "+60%",
      satisfaction: "+45%",
      efficiency: "+35%",
    },
    color: "from-orange-500 to-red-500",
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    content:
      "DevCodeWeb transformed our user experience completely. The new design increased our conversion rates by 40% within the first month.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CEO at StartupXYZ",
    content:
      "The UI/UX team at DevCodeWeb understood our vision perfectly. They delivered a design that our users absolutely love.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    content:
      "Professional, creative, and results-driven. DevCodeWeb exceeded our expectations in every aspect of the project.",
    rating: 5,
  },
]

export function UIUXShowcase() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Portfolio Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Our UI/UX Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real projects, real results. See how our design expertise has transformed businesses across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {showcaseProjects.map((project, index) => (
            <Card
              key={project.title}
              className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300 group overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4">
                  <ExternalLink className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-800">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-blue-400">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">What Our Clients Say</span>
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our UI/UX design services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed italic">"{testimonial.content}"</p>

                <div className="border-t border-gray-800 pt-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 backdrop-blur-sm border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your User Experience?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join the ranks of successful businesses that have elevated their digital presence with our expert UI/UX
              design services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold"
              >
                Start Your Project Today
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-3 border border-gray-600 text-white rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
              >
                View Full Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
