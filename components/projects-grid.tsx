import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Gamepad2, ShoppingCart, Palette, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "GameZone Pro",
    description: "Interactive gaming platform with real-time multiplayer capabilities and stunning 3D graphics.",
    image: "/gaming-platform-interface.jpg",
    category: "Games Development",
    technologies: ["React", "Three.js", "WebGL", "Socket.io"],
    icon: Gamepad2,
    color: "from-red-500 to-orange-500",
    status: "Live",
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "ShopSmart E-commerce",
    description: "Full-featured online store with payment integration, inventory management, and analytics dashboard.",
    image: "/modern-ecommerce-website.png",
    category: "E-commerce",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    icon: ShoppingCart,
    color: "from-green-500 to-emerald-500",
    status: "Live",
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "Creative Portfolio",
    description: "Stunning portfolio website for a digital artist with smooth animations and gallery features.",
    image: "/creative-portfolio-website.png",
    category: "Portfolio",
    technologies: ["React", "Framer Motion", "GSAP", "Sanity"],
    icon: Palette,
    color: "from-purple-500 to-pink-500",
    status: "Live",
    github: "#",
    live: "#",
  },
  {
    id: 4,
    title: "TechCorp Website",
    description: "Corporate website with advanced UI/UX design and seamless user experience.",
    image: "/modern-corporate-website.png",
    category: "Corporate",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    status: "Live",
    github: "#",
    live: "#",
  },
  {
    id: 5,
    title: "FoodDelivery App",
    description: "Mobile-first food delivery platform with real-time tracking and payment integration.",
    image: "/food-delivery-app-interface.png",
    category: "Mobile App",
    technologies: ["React Native", "Node.js", "MongoDB", "Stripe"],
    icon: Gamepad2,
    color: "from-yellow-500 to-orange-500",
    status: "In Development",
    github: "#",
    live: "#",
  },
  {
    id: 6,
    title: "Learning Management System",
    description: "Comprehensive LMS with course management, video streaming, and progress tracking.",
    image: "/learning-management-system.png",
    category: "Education",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "AWS"],
    icon: Globe,
    color: "from-indigo-500 to-purple-500",
    status: "Live",
    github: "#",
    live: "#",
  },
]

export function ProjectsGrid() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of our recent work across different industries and technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const Icon = project.icon
            return (
              <Card
                key={project.id}
                className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl group overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`bg-gradient-to-r ${project.color} text-white border-0`}>{project.status}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className={`p-2 bg-gradient-to-r ${project.color} rounded-lg`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="mb-2">
                    <Badge variant="outline" className="text-blue-400 border-blue-500/30">
                      {project.category}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs bg-gray-800 text-gray-300 border-0">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-blue-500/30 text-blue-400 hover:bg-blue-500/10 bg-transparent"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Want to see more projects or discuss your own?</p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full"
            >
              Get In Touch
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
