import { Zap, Shield, Users, Lightbulb, Target, Heart } from "lucide-react"

const values = [
  {
    icon: Zap,
    title: "Performance First",
    description:
      "We optimize every line of code for speed and efficiency, ensuring your applications load instantly and perform flawlessly.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Security & Reliability",
    description:
      "Your data and users' privacy are paramount. We implement industry-best security practices in every project.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Users,
    title: "User-Centric Design",
    description:
      "Every interface we create is designed with the end user in mind, ensuring intuitive and engaging experiences.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Creativity",
    description: "We stay ahead of technology trends and bring creative solutions to complex challenges.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description:
      "Every project has clear objectives, and we measure success by how well we achieve your business goals.",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Heart,
    title: "Passion & Dedication",
    description:
      "We love what we do, and it shows in the quality of our work and the relationships we build with clients.",
    color: "from-pink-500 to-purple-500",
  },
]

export function ValuesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Values</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The principles that guide everything we do and shape how we work with our clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={value.title}
                className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 group"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${value.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {value.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
