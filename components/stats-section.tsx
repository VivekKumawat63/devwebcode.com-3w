"use client"

import { useEffect, useState } from "react"

const stats = [
  { number: 50, suffix: "+", label: "Projects Completed" },
  { number: 100, suffix: "%", label: "Client Satisfaction" },
  { number: 24, suffix: "/7", label: "Support Available" },
  { number: 3, suffix: "s", label: "Average Load Time" },
]

export function StatsSection() {
  const [mounted, setMounted] = useState(false)
  const [counters, setCounters] = useState(stats.map(() => 0))

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setCounters((prev) => {
          const newCounters = [...prev]
          if (newCounters[index] < stat.number) {
            newCounters[index] = Math.min(newCounters[index] + Math.ceil(stat.number / 50), stat.number)
          }
          return newCounters
        })
      }, 50)
    })

    return () => intervals.forEach(clearInterval)
  }, [mounted])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Why Choose Us</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Numbers that speak for our commitment to excellence and innovation
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-gray-900/30 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-4xl sm:text-5xl font-bold mb-2">
                <span className="gradient-text">
                  {mounted ? counters[index] : 0}
                  {stat.suffix}
                </span>
              </div>
              <div className="text-gray-400 text-sm sm:text-base font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
