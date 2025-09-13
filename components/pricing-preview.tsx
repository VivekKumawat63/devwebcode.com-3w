"use client"

import { motion } from "framer-motion"
import { PricingPlans } from "@/components/pricing-plans"

export function PricingPreview() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Choose the Right{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Plan</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Choose the right plan for your website needs. Our pricing is transparent and affordable, designed to help
            businesses of all sizes succeed online.
          </p>
        </motion.div>
        <PricingPlans />
      </div>
    </section>
  )
}
