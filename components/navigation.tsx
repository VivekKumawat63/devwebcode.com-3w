"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold gradient-text">DevCodeWeb</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-white hover:text-blue-400 transition-colors duration-300">
                Home
              </Link>
              <Link href="/services" className="text-white hover:text-blue-400 transition-colors duration-300">
                Services
              </Link>
              <Link href="/portfolio" className="text-white hover:text-blue-400 transition-colors duration-300">
                Portfolio
              </Link>
              <Link href="/about" className="text-white hover:text-blue-400 transition-colors duration-300">
                About
              </Link>
              <Link href="/contact" className="text-white hover:text-blue-400 transition-colors duration-300">
                Contact
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/pricing">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-sm">
              <Link
                href="/"
                className="block px-3 py-2 text-white hover:text-blue-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-white hover:text-blue-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className="block px-3 py-2 text-white hover:text-blue-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-white hover:text-blue-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-white hover:text-blue-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <Link href="/pricing">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
