import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
              DevCodeWeb
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Next-generation web development company delivering fast, modern, and scalable solutions. We specialize in
              games development, e-commerce, and advanced UI/UX design.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin size={16} />
                <span>Jaipur, Rajasthan</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone size={16} />
                <span>+91 9785343142</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail size={16} />
                <span>vivekkumawat184563@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Home
              </Link>
              <Link href="/services" className="block text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Services
              </Link>
              <Link
                href="/portfolio"
                className="block text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                Portfolio
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-blue-400 transition-colors duration-300">
                About
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <div className="space-y-2">
              <div className="text-gray-400">Games Development</div>
              <div className="text-gray-400">E-commerce Solutions</div>
              <div className="text-gray-400">Advanced UI/UX</div>
              <div className="text-gray-400">Portfolio Development</div>
              <div className="text-gray-400">Custom Projects</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 DevCodeWeb. All rights reserved. Built with Next.js and TypeScript.</p>
        </div>
      </div>
    </footer>
  )
}
