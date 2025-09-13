import { Button } from "@/components/ui/button"
import { Palette, Users, TrendingUp, Award } from "lucide-react"

export function UIUXHero() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">UI/UX Design</span>
              <br />
              <span className="text-white">That Converts</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Create exceptional user experiences that engage your audience, drive conversions, and grow your business.
              Our design-first approach ensures every pixel serves a purpose.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Start Your Project
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-white hover:border-blue-500 hover:text-blue-400 bg-transparent"
              >
                View Our Work
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">85%</div>
                <div className="text-sm text-gray-400">Conversion Boost</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">100+</div>
                <div className="text-sm text-gray-400">Designs Created</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">5★</div>
                <div className="text-sm text-gray-400">Average Rating</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl p-8 backdrop-blur-sm border border-gray-800">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  <div>
                    <div className="h-4 bg-gray-700 rounded w-32 mb-2"></div>
                    <div className="h-3 bg-gray-800 rounded w-24"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-700 rounded"></div>
                  <div className="h-4 bg-gray-800 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-800 rounded w-1/2"></div>
                </div>
                <div className="flex space-x-3">
                  <div className="h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded flex-1"></div>
                  <div className="h-10 bg-gray-800 rounded w-20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
