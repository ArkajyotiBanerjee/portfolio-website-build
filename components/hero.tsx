"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-muted/20"
    >
      {/* Background decoration - warm red accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Profile Image Placeholder */}
          <div className="mb-8 flex justify-center">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center overflow-hidden ring-4 ring-accent/20 shadow-lg">
              <img src="/professional-developer-portrait.jpg" alt="Arkajyoti Banerjee" className="w-full h-full object-cover" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-balance font-heading">
            Tech Enthusiast
            <br />
            <span className="text-accent">Web Developer</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
            Building modern, responsive web experiences with passion for AI and clean code
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 transform"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 transform"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-muted-foreground" size={24} />
      </div>
    </section>
  )
}
