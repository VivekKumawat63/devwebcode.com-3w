"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutPreview() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">DevCodeWeb</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            We are Jaipur's leading web development company, specializing in creating stunning websites and applications
            that drive business growth. With years of experience and a passion for innovation, we transform your digital
            vision into reality.
          </p>
          <p className="text-gray-400 mb-8">
            Our team of expert developers and designers work closely with clients across Rajasthan and India to deliver
            exceptional digital solutions that exceed expectations.
          </p>
          <Button asChild className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
            <Link href="/about">Learn More</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
