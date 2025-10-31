"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Moon, Sun } from "lucide-react"

export default function Header() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  const toggleDarkMode = () => {
    const html = document.documentElement
    html.classList.toggle("dark")
    setIsDark(!isDark)
  }

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="#home"
          className="text-2xl font-bold tracking-tight text-accent hover:text-accent/80 transition-colors duration-300"
        >
          arkajyoti.
        </Link>

        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground relative group transition-colors duration-300"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {mounted && (
          <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-lg hover:bg-muted transition-colors duration-300 hover:scale-110 transform"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        )}
      </div>
    </header>
  )
}
