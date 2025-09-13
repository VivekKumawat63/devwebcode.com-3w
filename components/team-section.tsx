import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

const team = [
  {
    name: "Nikhil Kumawat",
    role: "CEO & Founder",
    bio: "Visionary CEO and founder driving innovation and strategic growth at DevCodeWeb. Expert in business development, technology leadership, and delivering exceptional web solutions that transform businesses.",
    image: "/ceo-portrait.png",
    skills: ["Leadership", "Strategy", "Innovation", "Business Development"],
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Vivek Kumawat",
    role: "Co-Founder & Lead Developer",
    bio: "Co-founder and full-stack developer with expertise in React, Next.js, and modern web technologies. Passionate about creating scalable solutions and leading technical innovation at DevCodeWeb.",
    image: "/co-founder-portrait.png",
    skills: ["React", "Next.js", "TypeScript", "Node.js"],
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
]

export function TeamSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Meet Our Leadership</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The visionary leaders behind DevCodeWeb's success and innovation in Jaipur's web development landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <Card
              key={member.name}
              className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl group"
            >
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={`${member.name} - ${member.role} at DevCodeWeb`}
                    width={300}
                    height={300}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-500/20 group-hover:border-blue-500/50 transition-colors duration-300"
                  />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {member.name}
                </h3>

                <p className="text-blue-400 font-medium mb-4">{member.role}</p>

                <p className="text-gray-400 leading-relaxed mb-6">{member.bio}</p>

                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {member.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-center space-x-4">
                  <a
                    href={member.social.github}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    aria-label={`${member.name}'s GitHub profile`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    aria-label={`${member.name}'s LinkedIn profile`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    aria-label={`${member.name}'s Twitter profile`}
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 backdrop-blur-sm border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-4">Why Choose DevCodeWeb?</h3>
            <p className="text-gray-300 mb-6">
              Led by experienced professionals, DevCodeWeb has established itself as Jaipur's premier web development
              company, delivering cutting-edge solutions that drive business growth and digital transformation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">100+</div>
                <div className="text-gray-300">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
