"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Zap, Rocket } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const words = ["Code.", "Create.", "Conquer."]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    if (!mounted) return

    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [mounted, words.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with coding theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('/placeholder-d4qri.png')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-pulse-glow"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-500 rounded-full animate-pulse-glow delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-cyan-500 rounded-full animate-pulse-glow delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-pink-500 rounded-full animate-pulse-glow delay-500"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-float">
          {/* Icon trio */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full border border-blue-500/30 animate-glow">
              <Code className="w-8 h-8 text-blue-400" />
            </div>
            <div className="p-4 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full border border-purple-500/30 animate-glow delay-300">
              <Zap className="w-8 h-8 text-purple-400" />
            </div>
            <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full border border-cyan-500/30 animate-glow delay-700">
              <Rocket className="w-8 h-8 text-cyan-400" />
            </div>
          </div>

          {/* Main heading with animated text */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">{mounted ? words[currentWordIndex] : "Code."}</span>
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-4 font-light">
            Next-Generation Web Development
          </p>

          <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            We craft lightning-fast, scalable web applications using cutting-edge technology. From games to e-commerce,
            we turn your vision into digital reality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/pricing">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
              >
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-blue-500/50 text-blue-400 hover:bg-blue-500/10 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 bg-transparent"
              >
                Explore Services
              </Button>
            </Link>
          </div>

          {/* Tech stack indicators */}
          <div className="mt-16 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>React & TypeScript</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Next.js & Node.js</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Advanced UI/UX</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span>Performance Optimized</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-500/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
