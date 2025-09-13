"use client"

import { motion } from "framer-motion"
import { Zap, Palette, DollarSign, Shield } from "lucide-react"

const benefits = [
  {
    icon: Zap,
    title: "Fastest Website Development in Jaipur",
    description: "Quick turnaround times without compromising quality",
  },
  {
    icon: Palette,
    title: "Professional UI/UX for Maximum Conversions",
    description: "Designs that convert visitors into customers",
  },
  {
    icon: DollarSign,
    title: "Affordable Packages for Small & Big Businesses",
    description: "Flexible pricing to suit every budget",
  },
  {
    icon: Shield,
    title: "Trusted by Clients Across Rajasthan & India",
    description: "Proven track record with satisfied customers",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-400 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
