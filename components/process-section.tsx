import { CheckCircle, ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Discovery & Planning",
    description:
      "We analyze your requirements, target audience, and business goals to create a comprehensive project roadmap.",
    duration: "1-2 days",
  },
  {
    number: "02",
    title: "Design & Prototyping",
    description:
      "Our designers create wireframes and high-fidelity mockups that align with your brand and user expectations.",
    duration: "3-5 days",
  },
  {
    number: "03",
    title: "Development & Testing",
    description:
      "We build your application using modern technologies, ensuring performance, security, and scalability.",
    duration: "1-4 weeks",
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "We deploy your project and provide ongoing support, maintenance, and optimization services.",
    duration: "Ongoing",
  },
]

export function ProcessSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Process</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A streamlined approach that ensures quality delivery and client satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                    {step.number}
                  </div>
                  <div className="text-sm text-gray-500 bg-gray-800 px-2 py-1 rounded-full">{step.duration}</div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {step.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>

                <div className="mt-4 flex items-center text-blue-400">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Quality Assured</span>
                </div>
              </div>

              {/* Arrow connector for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-blue-500/50" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
