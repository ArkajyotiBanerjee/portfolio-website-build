"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Mail, Linkedin, Github, Instagram } from "lucide-react"

const socialLinks = [
  {
    name: "Email",
    href: "mailto:arkajyoti@example.com",
    icon: Mail,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/arkajyoti-banerjee",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/arkajyoti-banerjee",
    icon: Github,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/arkajyoti",
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
                I'm always interested in hearing about new projects and opportunities. Feel free to reach out through
                any of these channels!
              </p>
            </div>

            <div className="space-y-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-accent/15 hover:border-accent/40 border border-transparent hover:shadow-lg transition-all duration-300 group transform hover:-translate-x-1"
                  >
                    <Icon className="w-6 h-6 text-accent group-hover:scale-125 transition-transform duration-300" />
                    <div>
                      <p className="font-medium text-xs text-muted-foreground uppercase tracking-wide">{link.name}</p>
                      <p className="text-foreground group-hover:text-accent transition-colors duration-300 font-medium">
                        {link.name === "Email" && "arkajyoti@example.com"}
                        {link.name === "LinkedIn" && "arkajyoti-banerjee"}
                        {link.name === "GitHub" && "arkajyoti-banerjee"}
                        {link.name === "Instagram" && "@arkajyoti"}
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
