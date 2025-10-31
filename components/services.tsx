"use client"

import { useEffect, useState } from "react"
import { Code2 } from "lucide-react"

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    })
    const element = document.getElementById("services")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="py-20 px-6 bg-muted/30 max-w-6xl mx-auto w-full">
      <div className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <h2 className="text-4xl font-bold mb-12">Services</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-background rounded-lg border border-border hover:border-accent/50 transition-colors group">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
              <Code2 className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Frontend Development</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Crafting clean, responsive, and modern website designs for individuals and student events. I specialize in
              creating engaging user interfaces that are both aesthetically pleasing and functionally robust.
            </p>
            <p className="text-accent font-medium text-sm">
              Currently open for small collaborations and learning projects
            </p>
          </div>

          <div className="p-8 bg-background rounded-lg border border-border hover:border-accent/50 transition-colors group">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
              <Code2 className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Web Development</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Building interactive web applications with modern technologies. From responsive layouts to dynamic user
              experiences, I deliver high-quality solutions that meet your needs.
            </p>
            <p className="text-accent font-medium text-sm">Available for project-based work and mentorship</p>
          </div>
        </div>
      </div>
    </section>
  )
}
