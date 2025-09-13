import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, MessageCircle, Globe } from "lucide-react"

const contactDetails = [
  {
    icon: MapPin,
    title: "Location",
    details: ["Jaipur, Rajasthan", "India"],
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 9785343142", "Available 9 AM - 9 PM"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["vivekkumawat184563@gmail.com", "We reply within 24 hours"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Sat: 9:00 AM - 9:00 PM", "Sunday: By appointment"],
    color: "from-purple-500 to-pink-500",
  },
]

const quickStats = [
  { label: "Response Time", value: "< 24 hrs" },
  { label: "Project Success", value: "100%" },
  { label: "Client Satisfaction", value: "5/5 ⭐" },
  { label: "Years Experience", value: "5+" },
]

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <Card className="bg-gray-900/50 border-gray-800">
        <CardHeader>
          <CardTitle className="text-2xl text-white flex items-center">
            <MessageCircle className="w-6 h-6 mr-2 text-blue-400" />
            Contact Information
          </CardTitle>
          <p className="text-gray-400">Multiple ways to reach us. Choose what works best for you.</p>
        </CardHeader>
        <CardContent className="space-y-6">
          {contactDetails.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} p-3 flex-shrink-0`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  {item.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-400 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            )
          })}
        </CardContent>
      </Card>

      <Card className="bg-gray-900/50 border-gray-800">
        <CardHeader>
          <CardTitle className="text-xl text-white flex items-center">
            <Globe className="w-5 h-5 mr-2 text-blue-400" />
            Why Choose Us?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {quickStats.map((stat, index) => (
              <div key={stat.label} className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <div className="text-2xl font-bold text-blue-400 mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border-blue-500/20">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-white mb-3">Ready to Start Your Project?</h3>
          <p className="text-gray-300 mb-4">
            Get a free consultation and project estimate. We'll discuss your requirements and provide a detailed
            proposal.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Free Consultation</span>
            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Quick Turnaround</span>
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Competitive Pricing</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
