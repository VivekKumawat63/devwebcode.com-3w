import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative">
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-3xl blur-3xl"></div>

          <div className="relative bg-gray-900/50 border border-gray-800 rounded-3xl p-12 backdrop-blur-sm">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full border border-blue-500/30">
                <Sparkles className="w-8 h-8 text-blue-400" />
              </div>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="gradient-text">Ready to Build Something Amazing?</span>
            </h2>

            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's transform your ideas into powerful web applications. Get started with a free consultation and see
              how we can accelerate your digital presence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-blue-500/50 text-blue-400 hover:bg-blue-500/10 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 bg-transparent"
                >
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
