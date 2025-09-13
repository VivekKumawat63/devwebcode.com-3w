import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, Palette, Code, TestTube, Rocket } from "lucide-react"

const processSteps = [
  {
    icon: Users,
    title: "Discovery & Research",
    description:
      "We start by understanding your users, business goals, and market landscape through comprehensive research and stakeholder interviews.",
    details: ["User interviews", "Competitor analysis", "Market research", "Requirements gathering"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Palette,
    title: "Design & Prototyping",
    description:
      "Create wireframes, mockups, and interactive prototypes that bring your vision to life with pixel-perfect precision.",
    details: ["Wireframing", "Visual design", "Interactive prototypes", "Design systems"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Code,
    title: "Development & Implementation",
    description:
      "Transform designs into responsive, performant web applications using modern technologies and best practices.",
    details: ["Frontend development", "Responsive coding", "Performance optimization", "Cross-browser testing"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: TestTube,
    title: "Testing & Refinement",
    description: "Rigorous testing ensures your application works flawlessly across all devices and user scenarios.",
    details: ["Usability testing", "A/B testing", "Performance testing", "Bug fixes"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Rocket,
    title: "Launch & Optimization",
    description: "Deploy your application and continuously monitor performance, making data-driven improvements.",
    details: ["Deployment", "Performance monitoring", "User feedback", "Continuous optimization"],
    color: "from-indigo-500 to-purple-500",
  },
]

export function UIUXProcess() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Design Process</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A proven methodology that ensures exceptional results from concept to launch
          </p>
        </div>

        <div className="space-y-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon
            const isEven = index % 2 === 0

            return (
              <div
                key={step.title}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="flex-1">
                  <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${step.color} p-3`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-blue-400">{String(index + 1).padStart(2, "0")}</span>
                          <div className="w-8 h-px bg-gradient-to-r from-blue-500 to-purple-500"></div>
                        </div>
                      </div>
                      <CardTitle className="text-2xl text-white">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-lg mb-6 leading-relaxed">{step.description}</p>
                      <div className="grid grid-cols-2 gap-3">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-400 text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex-shrink-0">
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${step.color} p-6 shadow-2xl`}>
                    <Icon className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 backdrop-blur-sm border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your UI/UX Project?</h3>
            <p className="text-gray-300 mb-6">
              Let's discuss your project and create a design strategy that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Start Your Project
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-white rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
