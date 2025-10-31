"use client"

import { useEffect, useState } from "react"
import { Github, ExternalLink } from "lucide-react"

const projectsData = [
  {
    title: "YouTube CSS Clone",
    description:
      "Built to practice CSS box models, responsiveness, and layout design. A fully responsive clone of YouTube interface.",
    tags: ["HTML", "CSS", "Responsive Design"],
    github: "https://github.com",
    demo: "#",
  },
  {
    title: "TickTrack - To-Do List Web App",
    description:
      "Feature-rich to-do application with user login, task creation, deletion, and completion tracking capabilities.",
    tags: ["HTML", "CSS", "JavaScript", "Web Storage"],
    github: "https://github.com",
    demo: "#",
  },
]

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    })
    const element = document.getElementById("projects")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <div className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <h2 className="text-4xl font-bold mb-12 font-heading">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="group relative bg-muted/30 rounded-xl border border-border p-6 hover:border-accent/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors font-heading">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-accent/15 text-accent rounded-full border border-accent/30 hover:bg-accent/25 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 bg-foreground/10 rounded-lg hover:bg-accent hover:text-accent-foreground hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
