"use client"

import { useEffect, useState } from "react"
import { Code2, Layout, Server, Database, Sparkles, Terminal } from "lucide-react"

const skillCategories = [
  {
    category: "Languages",
    icon: Code2,
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
  },
  {
    category: "Frontend",
    icon: Layout,
    skills: ["React", "Vite", "Bootstrap"],
  },
  {
    category: "Backend & APIs",
    icon: Server,
    skills: ["Node.js", "Express.js", "FastAPI", "REST APIs"],
  },
  {
    category: "Databases & Cloud",
    icon: Database,
    skills: ["SQLite", "Firebase", "Firestore", "Vercel", "Railway"],
  },
  {
    category: "AI & Speech",
    icon: Sparkles,
    skills: ["Groq API / Groq LLMs", "Whisper"],
  },
  {
    category: "Tools & Core Foundations",
    icon: Terminal,
    skills: ["Git", "GitHub", "GitHub Actions", "Data Structures & Algorithms", "Competitive Programming"],
  },
]

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    })
    const element = document.getElementById("skills")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto w-full">
      <div className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <h2 className="text-4xl font-bold mb-12 font-heading">Technical Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((group, index) => {
            const Icon = group.icon
            return (
              <div
                key={index}
                className="p-6 bg-muted/30 rounded-xl border border-border hover:border-accent/50 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold font-heading">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-background border border-border text-foreground font-medium text-xs hover:border-accent/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
