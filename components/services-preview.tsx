"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Gamepad2, ShoppingCart, Palette, FolderOpen, Settings } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Gamepad2,
    title: "Games Development",
    description: "Interactive web games and gaming platforms with cutting-edge graphics and smooth performance.",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Full-featured online stores with payment integration, inventory management, and analytics.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Palette,
    title: "Advanced UI/UX",
    description: "Modern, intuitive interfaces that captivate users and drive engagement.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: FolderOpen,
    title: "Portfolio Development",
    description: "Professional portfolios that showcase your work and attract opportunities.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Settings,
    title: "Custom Projects",
    description: "Tailored solutions for unique business requirements and specialized needs.",
    color: "from-yellow-500 to-orange-500",
  },
]

export function ServicesPreview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We deliver comprehensive web development solutions that combine innovation with reliability
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div key={service.title} variants={itemVariants}>
                <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300 group h-full">
                  <CardHeader>
                    <motion.div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} p-3 mb-4`}
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href="/services">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
              >
                View All Services
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
