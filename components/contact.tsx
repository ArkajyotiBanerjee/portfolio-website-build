"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Mail, Linkedin, Github, Instagram, FileText } from "lucide-react"

const socialLinks = [
  {
    name: "Email",
    value: "arkaban2006@gmail.com",
    href: "mailto:arkaban2006@gmail.com",
    icon: Mail,
  },
  {
    name: "LinkedIn",
    value: "in/arkajyoti-banerjee-1a3ab1337",
    href: "https://www.linkedin.com/in/arkajyoti-banerjee-1a3ab1337",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    value: "github.com/ArkajyotiBanerjee",
    href: "https://github.com/ArkajyotiBanerjee",
    icon: Github,
  },
  {
    name: "Resume",
    value: "View Resume (Google Drive)",
    href: "https://drive.google.com/file/d/1XkBClFSHSBQ1rwxw175otSS2RM-vWT7I/view?usp=sharing",
    icon: FileText,
  },
  {
    name: "Instagram",
    value: "@arkajyoti_banerjee",
    href: "https://www.instagram.com/arkajyoti_banerjee",
    icon: Instagram,
  },
]

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    })
    const element = document.getElementById("contact")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 px-6 max-w-6xl mx-auto">
      <div className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <h2 className="text-4xl font-bold mb-12 font-heading">Get in Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 font-heading">Let's connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm actively looking for Full Stack, Software Development, and AI-integrated engineering internship opportunities. Feel free to reach out directly through any of these channels!
              </p>
            </div>

            <div className="space-y-3">
              {socialLinks.map((link) => {
                const Icon = link.icon
                const isExternal = link.href.startsWith("http")
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex items-center gap-4 p-3.5 rounded-lg bg-muted/50 hover:bg-accent/15 hover:border-accent/40 border border-transparent hover:shadow-md transition-all duration-300 group transform hover:-translate-x-1"
                  >
                    <Icon className="w-5 h-5 text-accent group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                    <div className="overflow-hidden">
                      <p className="font-medium text-xs text-muted-foreground uppercase tracking-wide">{link.name}</p>
                      <p className="text-foreground group-hover:text-accent transition-colors duration-300 font-medium text-sm truncate">
                        {link.value}
                      </p>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 font-heading">Name</label>
              <input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 font-heading">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 font-heading">Message</label>
              <textarea
                placeholder="Your message here..."
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 transform"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
