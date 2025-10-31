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
              I'm a tech enthusiast driven to make a difference using technology—whether through AI-based solutions or
              impactful projects. I hail from Kolkata, West Bengal, and am currently pursuing{" "}
              <span className="font-semibold text-foreground">
                B.Tech in Electrical and Electronics Engineering with a Minor in Computer Science
              </span>{" "}
              at VIT Chennai.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My interests include AI, Generative AI, and exploring modern frameworks for web development. I have
              intermediate knowledge in Java (DSA) and frontend development, and I'm continuously learning new
              technologies to expand my skill set.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Outside the tech world, I love sports—especially cricket—and enjoy reading books that broaden my
              perspective on technology and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="p-6 bg-gradient-to-br from-accent/5 to-transparent rounded-lg border border-accent/20 hover:border-accent/40 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="font-semibold text-lg mb-2 font-heading text-accent">Location</h3>
              <p className="text-muted-foreground">Kolkata, West Bengal</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-accent/5 to-transparent rounded-lg border border-accent/20 hover:border-accent/40 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="font-semibold text-lg mb-2 font-heading text-accent">Currently</h3>
              <p className="text-muted-foreground">VIT Chennai (Class of 2029)</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-accent/5 to-transparent rounded-lg border border-accent/20 hover:border-accent/40 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="font-semibold text-lg mb-2 font-heading text-accent">Passion</h3>
              <p className="text-muted-foreground">AI, Web Dev & Cricket</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
