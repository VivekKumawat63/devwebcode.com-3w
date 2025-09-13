import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    price: "₹15,000",
    description: "Perfect for personal portfolios and small projects",
    features: [
      "Responsive Design",
      "Up to 5 Pages",
      "Basic SEO Setup",
      "Contact Form",
      "1 Month Support",
      "Mobile Optimized",
    ],
    popular: false,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Professional",
    price: "₹35,000",
    description: "Ideal for businesses and e-commerce solutions",
    features: [
      "Everything in Starter",
      "Up to 15 Pages",
      "E-commerce Integration",
      "Payment Gateway",
      "Admin Dashboard",
      "3 Months Support",
      "Advanced SEO",
      "Analytics Setup",
    ],
    popular: true,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Enterprise",
    price: "₹75,000+",
    description: "Custom solutions for complex requirements",
    features: [
      "Everything in Professional",
      "Unlimited Pages",
      "Custom Development",
      "API Integrations",
      "Advanced Features",
      "6 Months Support",
      "Performance Optimization",
      "Priority Support",
    ],
    popular: false,
    color: "from-orange-500 to-red-500",
  },
]

export function PricingPlans() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Choose Your Plan</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            All plans include modern design, responsive layout, and professional development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl group relative ${
                plan.popular ? "ring-2 ring-purple-500/50" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl text-white mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.name !== "Enterprise" && <span className="text-gray-400 ml-1">/ project</span>}
                </div>
                <CardDescription className="text-gray-400">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div
                        className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center flex-shrink-0`}
                      >
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact">
                  <Button
                    className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02]`}
                  >
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">Need something custom? Let's discuss your requirements.</p>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-500/50 text-blue-400 hover:bg-blue-500/10 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 bg-transparent"
            >
              Contact Us for Custom Quote
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
