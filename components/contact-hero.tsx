import { Mail } from "lucide-react"

export function ContactHero() {
  return (
    <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full border border-blue-500/30 animate-glow">
            <Mail className="w-8 h-8 text-blue-400" />
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold mb-6">
          <span className="gradient-text">Get In Touch</span>
        </h1>

        <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
          Ready to start your next project? We'd love to hear from you. Send us a message and we'll respond as soon as
          possible.
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Quick Response</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Free Consultation</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span>Custom Solutions</span>
          </div>
        </div>
      </div>
    </section>
  )
}
