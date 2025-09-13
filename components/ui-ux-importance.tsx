import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, MousePointer, Smartphone, TrendingUp, Users, Zap } from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    title: "Increased Conversions",
    description:
      "Well-designed interfaces can increase conversion rates by up to 200%. Every design decision is made with your business goals in mind.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Users,
    title: "Better User Engagement",
    description:
      "Intuitive designs keep users engaged longer, reducing bounce rates and increasing time spent on your website or app.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Eye,
    title: "Enhanced Brand Perception",
    description:
      "Professional design builds trust and credibility, making your brand appear more established and reliable.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Approach",
    description:
      "With 60% of web traffic from mobile devices, responsive design ensures optimal experience across all platforms.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: MousePointer,
    title: "Improved Usability",
    description:
      "Clear navigation and intuitive layouts make it easy for users to find what they need and complete desired actions.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Zap,
    title: "Competitive Advantage",
    description:
      "Stand out from competitors with unique, memorable designs that reflect your brand personality and values.",
    color: "from-yellow-500 to-orange-500",
  },
]

export function UIUXImportance() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Why UI/UX Design Matters</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Great design isn't just about aesthetics—it's about creating experiences that drive real business results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card
                key={benefit.title}
                className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <CardHeader>
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-r ${benefit.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 backdrop-blur-sm border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your User Experience?</h3>
            <p className="text-gray-300 mb-6">
              Let's create designs that not only look amazing but also drive real business results for your company.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Get Started Today
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-white rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
              >
                View Our Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
