"use client"

import { useEffect, useState } from "react"
import { GraduationCap, Award, BookOpen } from "lucide-react"

const coursework = [
  "Data Structures & Algorithms",
  "Software Engineering",
  "Artificial Intelligence",
  "Database & Programming Fundamentals",
  "Digital Electronics",
  "Circuit Analysis",
  "Electrical Systems",
]

const certifications = [
  {
    title: "DSA with Java",
    issuer: "Apna College",
    date: "July 2026",
    description:
      "Covered core data structures and algorithms with Java, focusing on problem-solving and implementation.",
  },
  {
    title: "Generative AI Program",
    issuer: "Finlatics",
    date: "November 2025",
    description:
      "Explored and built projects using generative AI concepts, applications, and practical use cases.",
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
        <h2 className="text-4xl font-bold mb-12 font-heading">Education & Certifications</h2>

        <div className="space-y-8">
          {/* Degree Card */}
          <div className="p-6 bg-background rounded-lg border border-border hover:border-accent/50 transition-colors group">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 mt-1">
                <GraduationCap className="w-7 h-7 text-accent group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-2xl font-bold font-heading">Vellore Institute of Technology, Chennai</h3>
                    <p className="text-accent font-medium text-lg">Bachelor of Technology in Electrical and Electronics Engineering</p>
                  </div>
                  <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                    2025 – 2029
                  </span>
                </div>
                <p className="text-foreground font-semibold mb-4">
                  Current Cumulative GPA: <span className="text-accent">8.78 / 10</span>
                </p>

                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide flex items-center gap-2 mb-2">
                    <BookOpen className="w-4 h-4 text-accent" /> Relevant Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {coursework.map((course, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium bg-muted rounded-md text-foreground border border-border"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications Subsection */}
          <div>
            <h3 className="text-2xl font-bold mb-6 font-heading flex items-center gap-2">
              <Award className="w-6 h-6 text-accent" /> Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-6 bg-background rounded-lg border border-border hover:border-accent/50 transition-colors group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold font-heading group-hover:text-accent transition-colors">
                      {cert.title}
                    </h4>
                    <span className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                      {cert.date}
                    </span>
                  </div>
                  <p className="text-accent font-medium text-sm mb-2">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
