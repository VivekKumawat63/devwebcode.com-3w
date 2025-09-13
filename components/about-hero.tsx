import { Users } from "lucide-react"

export function AboutHero() {
  return (
    <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full border border-blue-500/30 animate-glow">
            <Users className="w-8 h-8 text-blue-400" />
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold mb-6">
          <span className="gradient-text">About DevCodeWeb</span>
        </h1>

        <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
          We are a next-generation web development company based in Jaipur, dedicated to creating fast, modern, and
          scalable digital solutions that drive business growth and user engagement.
        </p>

        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            To empower businesses with cutting-edge web technologies that not only meet today's demands but are built to
            scale for tomorrow's opportunities. We believe in creating digital experiences that are fast, beautiful, and
            accessible to everyone.
          </p>
        </div>
      </div>
    </section>
  )
}
