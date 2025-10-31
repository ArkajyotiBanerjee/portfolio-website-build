"use client"

import { useEffect, useState } from "react"
import { GraduationCap } from "lucide-react"

const educationData = [
  {
    school: "Kalyani Central Model School",
    board: "ICSE",
    year: "2023",
  },
  {
    school: "Kalyani Central Model School",
    board: "CBSE",
    year: "2025",
  },
  {
    school: "VIT Chennai",
    degree: "B.Tech in Electrical and Electronics Engineering",
    specialization: "Minor in Computer Science",
    year: "Expected 2029",
  },
]

export default function Education() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    })
    const element = document.getElementById("education")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="education" className="py-20 px-6 bg-muted/30 max-w-6xl mx-auto w-full">
      <div className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <h2 className="text-4xl font-bold mb-12">Education</h2>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="flex gap-6 p-6 bg-background rounded-lg border border-border hover:border-accent/50 transition-colors group"
            >
              <div className="flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1">{edu.school}</h3>
                {edu.degree && <p className="text-muted-foreground mb-1">{edu.degree}</p>}
                {edu.specialization && <p className="text-sm text-accent font-medium">{edu.specialization}</p>}
                {edu.board && <p className="text-muted-foreground">{edu.board}</p>}
                <p className="text-sm text-muted-foreground mt-2">{edu.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
