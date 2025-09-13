import { FolderOpen } from "lucide-react"

export function PortfolioHero() {
  return (
    <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full border border-blue-500/30 animate-glow">
            <FolderOpen className="w-8 h-8 text-blue-400" />
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold mb-6">
          <span className="gradient-text">Our Portfolio</span>
        </h1>

        <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
          Discover our latest projects and see how we transform ideas into powerful digital experiences. Each project
          showcases our commitment to quality, innovation, and client satisfaction.
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>50+ Projects Completed</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Modern Technologies</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span>Creative Solutions</span>
          </div>
        </div>
      </div>
    </section>
  )
}
