import { Badge } from "@/components/ui/badge"

const technologies = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
  Backend: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "Redis"],
  Mobile: ["React Native", "PWA", "Ionic", "Flutter", "Expo", "Capacitor"],
  "Cloud & DevOps": ["Vercel", "AWS", "Docker", "GitHub Actions", "Cloudflare", "Supabase"],
  "Tools & Others": ["Figma", "Git", "Webpack", "Vite", "Jest", "Cypress"],
}

export function TechStack() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Technology Stack</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We use cutting-edge technologies to build fast, scalable, and maintainable applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(technologies).map(([category, techs]) => (
            <div
              key={category}
              className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <h3 className="text-xl font-bold text-white mb-4 text-center">{category}</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {techs.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 transition-colors duration-300"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
