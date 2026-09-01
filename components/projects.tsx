"use client"

import { useEffect, useState } from "react"
import { Github, ExternalLink, Sparkles } from "lucide-react"

const projectsData = [
  {
    title: "Aven.Better",
    type: "AI-Assisted Placement Preparation Platform",
    featured: true,
    description:
      "A full-stack placement preparation and assessment platform featuring resume-grounded adaptive AI interviews, role-aware question generation, contextual evaluation, and Whisper-based speech transcription with persistent interview storage.",
    architecture: "React/Vite frontend → FastAPI/Python backend → SQLite persistence → Groq LLMs & Whisper (Deployed on Vercel & Railway)",
    tags: ["React", "Vite", "Python", "FastAPI", "SQLite", "Groq LLMs", "Whisper", "Vercel", "Railway"],
    github: "https://github.com/ArkajyotiBanerjee/aven-better",
    demo: "https://aven-better.vercel.app",
  },
  {
    title: "NoLine — Smart Queue Management System",
    type: "Real-Time Digital Queue Management System",
    featured: false,
    description:
      "A deployed digital queue platform enabling remote queue discovery, token allocation, real-time position tracking via Firestore onSnapshot(), arrival confirmation, and 4-digit PIN verification with Google authentication and admin controls.",
    architecture: "React/Vite frontend → Firebase JavaScript SDK → Firebase Authentication → Cloud Firestore (Deployed on Vercel)",
    tags: ["React", "Vite", "JavaScript", "Firebase Auth", "Firestore", "Vercel"],
    github: "https://github.com/ArkajyotiBanerjee/NoLine",
    demo: "https://no-line-nine.vercel.app",
  },
  {
    title: "NagrikAI",
    type: "Multilingual Civic-Service Assistant",
    featured: false,
    description:
      "A frontend-focused civic-service MVP helping users navigate 12 government service scenarios through guided 5-stage workflows, dynamic document-readiness tracking, client-side intent matching, and browser voice/TTS support across 4 languages.",
    architecture: "React/TypeScript frontend → Motion & Lenis animations → Client-side Intent Matching (Deployed via GitHub Actions on GitHub Pages)",
    tags: ["React", "TypeScript", "Vite", "Motion", "Lenis", "GitHub Actions"],
    github: "https://github.com/ArkajyotiBanerjee/nagrikai",
    demo: "https://arkajyotibanerjee.github.io/nagrikai",
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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold font-heading mb-2">Featured Projects</h2>
            <p className="text-muted-foreground">
              Full-stack applications and software engineered with real-world functionality and live deployments.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-muted/30 rounded-xl border border-border p-6 hover:border-accent/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                project.featured ? "ring-1 ring-accent/30" : ""
              }`}
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                    {project.type}
                  </span>
                  {project.featured && (
                    <span className="flex items-center gap-1 text-xs font-medium bg-accent/15 text-accent px-2 py-0.5 rounded-full">
                      <Sparkles className="w-3 h-3" /> Featured
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors font-heading">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="mb-4 p-3 rounded-lg bg-background/60 border border-border text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">Stack & Architecture:</span> {project.architecture}
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 text-xs font-medium bg-accent/10 text-accent rounded-md border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative z-10 flex gap-3 pt-2 border-t border-border/50">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-background border border-border rounded-lg hover:border-accent hover:text-accent font-medium text-sm transition-all duration-300"
                >
                  <Github size={16} />
                  Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 font-medium text-sm shadow hover:shadow-md transition-all duration-300"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
