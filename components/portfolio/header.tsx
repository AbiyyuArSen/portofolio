"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Awards", href: "#achievements" },
  { name: "Contact", href: "#contact" },
]

const socialLinks = [
  { name: "Email", href: "mailto:abiyyuajh@gmail.com" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/abiyyu-aryasena-271425385/" },
  { name: "GitHub", href: "https://github.com" },
]

export function Header() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.slice(1))
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element))

    if (sectionElements.length === 0) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id)
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    )

    sectionElements.forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <header id="home" className="mb-10 md:mb-12">
      <section className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-[0_18px_50px_rgba(20,35,70,0.08)] md:p-8">
        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              Portfolio 2026
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[0.96] text-foreground md:text-6xl">
              Abiyyu Aryasena
            </h1>
            <p className="mt-3 text-lg text-primary md:text-xl">Creative Technologist</p>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Building digital products that are structurally solid, clearly communicated, and relevant to user needs.
              My current focus is AI integration, software engineering, and application security.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <Link
                href="#projects"
                className="rounded-full border border-primary bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary-foreground transition-opacity hover:opacity-90"
              >
                View Projects
              </Link>
              <Link
                href="#contact"
                className="rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Contact Me
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <div className="rounded-xl border border-border bg-background/90 p-3.5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Role</p>
              <p className="mt-1 text-sm font-semibold text-foreground">Creative Technologist</p>
            </div>
            <div className="rounded-xl border border-border bg-background/90 p-3.5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Location</p>
              <p className="mt-1 text-sm font-semibold text-foreground">Bogor, Indonesia</p>
            </div>
            <div className="rounded-xl border border-border bg-background/90 p-3.5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">GPA</p>
              <p className="mt-1 text-sm font-semibold text-foreground">3.9 / 4.0</p>
            </div>
          </div>
        </div>
      </section>

      <nav className="mt-6" aria-label="Section navigation">
        <ul className="flex flex-wrap gap-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={cn(
                  "inline-flex rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors",
                  activeSection === item.href.slice(1)
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2" aria-label="Social media">
        {socialLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              aria-label={link.name}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  )
}

