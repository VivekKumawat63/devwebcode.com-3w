"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Gamepad2, ShoppingCart, Palette, FolderOpen, Settings, Smartphone, Monitor } from "lucide-react"
import { useState } from "react"
import { QuoteModal } from "@/components/quote-modal"

const services = [
  {
    icon: Gamepad2,
    title: "Games Development",
    description: "Interactive web games and gaming platforms with cutting-edge graphics and smooth performance.",
    features: ["HTML5 Canvas Games", "WebGL 3D Graphics", "Real-time Multiplayer", "Mobile Optimization"],
    color: "from-red-500 to-orange-500",
    price: "Starting at ₹25,000",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Full-featured online stores with payment integration, inventory management, and analytics.",
    features: ["Payment Gateway Integration", "Inventory Management", "Order Tracking", "Admin Dashboard"],
    color: "from-green-500 to-emerald-500",
    price: "Starting at ₹35,000",
  },
  {
    icon: Palette,
    title: "Advanced UI/UX",
    description: "Modern, intuitive interfaces that captivate users and drive engagement.",
    features: ["Responsive Design", "User Research", "Prototyping", "Accessibility"],
    color: "from-purple-500 to-pink-500",
    price: "Starting at ₹20,000",
  },
  {
    icon: Monitor,
    title: "App Development",
    description:
      "Native and cross-platform mobile applications with seamless user experiences and robust functionality.",
    features: ["React Native Apps", "iOS & Android", "Cross-platform", "App Store Deployment"],
    color: "from-cyan-500 to-blue-500",
    price: "Starting at ₹40,000",
  },
  {
    icon: FolderOpen,
    title: "Portfolio Development",
    description: "Professional portfolios that showcase your work and attract opportunities.",
    features: ["Personal Branding", "SEO Optimization", "Fast Loading", "Mobile Responsive"],
    color: "from-blue-500 to-cyan-500",
    price: "Starting at ₹15,000",
  },
  {
    icon: Settings,
    title: "Custom Projects",
    description: "Tailored solutions for unique business requirements and specialized needs.",
    features: ["Custom Development", "API Integration", "Third-party Services", "Scalable Architecture"],
    color: "from-yellow-500 to-orange-500",
    price: "Quote on Request",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Development",
    description: "Progressive web apps and mobile-optimized experiences for all devices.",
    features: ["PWA Development", "Offline Functionality", "Push Notifications", "App Store Ready"],
    color: "from-indigo-500 to-purple-500",
    price: "Starting at ₹30,000",
  },
]

export function ServicesList() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="gradient-text">What We Offer</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive solutions tailored to your specific needs and business goals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={service.title}
                  className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl group"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} p-3 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Starting from</div>
                        <div className="text-lg font-bold text-blue-400">{service.price}</div>
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-white group-hover:text-blue-400 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400 text-base leading-relaxed mb-6">
                      {service.description}
                    </CardDescription>

                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      onClick={() => setIsQuoteModalOpen(true)}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300"
                    >
                      Get Quote
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </>
  )
}
