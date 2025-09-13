"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const reasons = [
  "Lightning-Fast Websites with 99.9% Uptime Guarantee",
  "Award-Winning UI/UX Design That Converts Visitors to Customers",
  "Affordable Pricing - 40% Less Than Delhi/Mumbai Agencies",
  "Jaipur's #1 Web Development Team with 200+ Happy Clients",
  "Local Rajasthan Market Expertise with Global Standards",
  "24/7 Support & Free Maintenance for First 6 Months",
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">DevCodeWeb</span>
            ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-3 group"
              >
                <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <p className="text-gray-300 group-hover:text-white transition-colors">{reason}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
