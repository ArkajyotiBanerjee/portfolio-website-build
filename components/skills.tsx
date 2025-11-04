"use client"

import { useEffect, useState } from "react"

const skillsData = {
  technical: [
    { name: "Java", level: "Intermediate" },
    { name: "DSA", level: "Intermediate" },
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Advanced" },
    { name: "JavaScript", level: "Beginner" },
    { name: "React", level: "Beginner" },
  ],
  soft: [
    { name: "Leadership", level: "Advanced" },
    { name: "Creativity", level: "Advanced" },
    { name: "Public Speaking", level: "Intermediate" },
    { name: "Communication", level: "Advanced" },
  ],
}

const levelColors: { [key: string]: string } = {
  Beginner: "bg-accent/20 text-accent dark:bg-accent/30 border-accent/50",
  Intermediate: "bg-accent/20 text-accent dark:bg-accent/30 border-accent/50",
  Advanced: "bg-accent/40 text-accent dark:bg-accent/50 border-accent",
}

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

  const SkillBadge = ({ name, level }: { name: string; level: string }) => (
    <div
      className={`px-4 py-2 rounded-full border font-medium text-sm transition-all duration-300 hover:shadow-lg hover:scale-105 transform ${levelColors[level]}`}
    >
      {name}
      <span className="ml-2 text-xs opacity-75">• {level}</span>
    </div>
  )

  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto w-full">
      <div className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <h2 className="text-4xl font-bold mb-12 font-heading">Skills</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-8 font-heading">Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skillsData.technical.map((skill) => (
                <SkillBadge key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8 font-heading">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skillsData.soft.map((skill) => (
                <SkillBadge key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
