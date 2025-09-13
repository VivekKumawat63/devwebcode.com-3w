"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Zap, Rocket } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function EnhancedHeroSection() {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "backOut",
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black gpu-accelerated">
        <div className="absolute inset-0 bg-[url('/abstract-tech-pattern.png')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
      </div>

      <div className="absolute inset-0 will-change-transform">
        <motion.div
          className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-1 h-1 bg-purple-500 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-3 h-3 bg-cyan-500 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-2 h-2 bg-pink-500 rounded-full"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2.2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex justify-center space-x-8 mb-8" variants={itemVariants}>
          <motion.div
            className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full border border-blue-500/30"
            variants={iconVariants}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Code className="w-8 h-8 text-blue-400" />
          </motion.div>
          <motion.div
            className="p-4 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full border border-purple-500/30"
            variants={iconVariants}
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap className="w-8 h-8 text-purple-400" />
          </motion.div>
          <motion.div
            className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full border border-cyan-500/30"
            variants={iconVariants}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Rocket className="w-8 h-8 text-cyan-400" />
          </motion.div>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight will-change-transform"
          variants={itemVariants}
        >
          <motion.span
            className="gradient-text"
            key={currentWordIndex}
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            exit={{ opacity: 0, rotateX: 90 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {mounted ? words[currentWordIndex] : "Code."}
          </motion.span>
        </motion.h1>

        <motion.p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-4 font-light" variants={itemVariants}>
          Next-Generation Web Development
        </motion.p>

        <motion.p
          className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          We craft lightning-fast, scalable web applications using cutting-edge technology. From games to e-commerce, we
          turn your vision into digital reality.
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" variants={itemVariants}>
          <Link href="/pricing">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 group"
              >
                Get Started Now
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Button>
            </motion.div>
          </Link>
          <Link href="/services">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-blue-500/50 text-blue-400 hover:bg-blue-500/10 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 bg-transparent"
              >
                Explore Services
              </Button>
            </motion.div>
          </Link>
        </motion.div>

        <motion.div className="mt-16 flex flex-wrap justify-center gap-6 text-sm text-gray-500" variants={itemVariants}>
          {[
            { label: "React & TypeScript", color: "blue" },
            { label: "Next.js & Node.js", color: "green" },
            { label: "Advanced UI/UX", color: "purple" },
            { label: "Performance Optimized", color: "orange" },
          ].map((tech, index) => (
            <motion.div
              key={tech.label}
              className={`flex items-center space-x-2 hover:text-${tech.color}-400 transition-colors duration-300`}
              whileHover={{ scale: 1.1 }}
              variants={floatingVariants}
              animate="animate"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <motion.div
                className={`w-2 h-2 bg-${tech.color}-500 rounded-full`}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.2,
                }}
              />
              <span>{tech.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-blue-500/50 rounded-full flex justify-center hover:border-blue-400 transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            className="w-1 h-3 bg-blue-500 rounded-full mt-2"
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
