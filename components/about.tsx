"use client"

import { useEffect, useState } from "react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    })
    const element = document.getElementById("about")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
      <div className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <h2 className="text-4xl font-bold mb-12 font-heading">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am an Electrical and Electronics Engineering undergraduate at{" "}
              <span className="font-semibold text-foreground">VIT Chennai (Class of 2029)</span>. I primarily identify
              as a Full Stack Developer who learns and refines skills by engineering complete, functional, and deployed
              software.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My hands-on experience spans frontend engineering, backend and REST API design, database architectures,
              AI and LLM integrations, debugging, and cloud deployment. I prioritize practical problem solving and building
              software that delivers genuine real-world utility.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond project development, I actively participate in competitive programming and technical problem solving,
              consistently strengthening my foundation in data structures and algorithms.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="p-6 bg-gradient-to-br from-accent/5 to-transparent rounded-lg border border-accent/20 hover:border-accent/40 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="font-semibold text-lg mb-2 font-heading text-accent">Location</h3>
              <p className="text-muted-foreground">Kolkata, West Bengal</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-accent/5 to-transparent rounded-lg border border-accent/20 hover:border-accent/40 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="font-semibold text-lg mb-2 font-heading text-accent">Education</h3>
              <p className="text-muted-foreground">VIT Chennai (2025–2029) • GPA: 8.78/10</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-accent/5 to-transparent rounded-lg border border-accent/20 hover:border-accent/40 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="font-semibold text-lg mb-2 font-heading text-accent">Focus</h3>
              <p className="text-muted-foreground">Full Stack & AI-Integrated Systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
