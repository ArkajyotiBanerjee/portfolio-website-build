"use client"

import { useEffect, useState } from "react"
import { Briefcase } from "lucide-react"

const experienceData = [
  {
    role: "Full Stack Developer",
    company: "CodeChef VIT-Chennai Student Chapter",
    period: "October 2025 – Present",
    description:
      "Independently developed a full-stack Game Arcade website, implementing its frontend and backend functionality. Contributed to the TetherX flagship hackathon platform through frontend development, authentication, and database-backed data storage.",
  },
  {
    role: "Competitive Programming Member",
    company: "CodeChef VIT-Chennai Student Chapter",
    period: "June 2026 – Present",
    description:
      "Participate in regular competitive programming contests and DSA-oriented technical activities as part of the Competitive Programming department.",
  },
]

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    })
    const element = document.getElementById("experience")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="py-20 px-6 max-w-6xl mx-auto">
      <div className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <h2 className="text-4xl font-bold mb-12">Experience</h2>

        <div className="space-y-6">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="flex gap-6 p-6 bg-muted/30 rounded-lg border border-border hover:border-accent/50 transition-colors group"
            >
              <div className="flex-shrink-0">
                <Briefcase className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-accent font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground mt-1 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
