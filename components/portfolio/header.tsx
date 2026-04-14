"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Tentang", href: "#about" },
  { name: "Pengalaman", href: "#experience" },
  { name: "Proyek", href: "#projects" },
  { name: "Achievement", href: "#achievements" },
  { name: "Kontak", href: "#contact" },
]

const socialLinks = [
  { name: "GitHub", href: "https://github.com", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/abiyyu-aryasena-271425385/", icon: Linkedin },
  { name: "Email", href: "mailto:abiyyuajh@gmail.com", icon: Mail },
]

export function Header() {
  const [activeSection, setActiveSection] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed left-0 top-0 z-50 w-full lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[46%] lg:flex-col lg:justify-between lg:py-24">
      <div className="relative flex items-center justify-between bg-background/80 p-6 backdrop-blur-sm lg:block lg:overflow-visible lg:rounded-3xl lg:border lg:border-border/70 lg:bg-background/35 lg:p-6 lg:shadow-[0_20px_80px_rgba(0,0,0,0.35)] lg:backdrop-blur-xl">
        <div className="pointer-events-none absolute -left-16 -top-16 hidden h-52 w-52 rounded-full bg-primary/20 blur-3xl lg:block" />
        <div className="pointer-events-none absolute -right-16 top-24 hidden h-44 w-44 rounded-full bg-cyan-500/10 blur-3xl lg:block" />

        <div className="relative z-10">
          <div className="flex items-start gap-5">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-3xl border border-border bg-secondary/50 lg:h-24 lg:w-24">
              <Image
                src="/placeholder-user.jpg"
                alt="Foto profil"
                fill
                sizes="(max-width: 1024px) 80px, 96px"
                className="object-cover"
                priority
              />
            </div>

            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
                <Link href="/" className="transition-colors hover:text-primary">
                  Abiyyu Aryasena
                </Link>
              </h1>

              <h2 className="mt-3 flex items-center gap-3 text-lg font-medium tracking-tight text-primary lg:text-xl">
                Mahasiswa
                <span className="flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Open to Work
                </span>
              </h2>
            </div>
          </div>

          <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
            Membangun solusi digital yang{" "}
            <span className="text-foreground">fungsional</span>,
            {" "}
            <span className="text-foreground">aman</span>,
            dan berpusat pada{" "}<span className="text-foreground">kenyamanan</span> pengguna.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href="https://maps.app.goo.gl/3ab9NFZ7xWScnX1N7"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/40 px-3 py-1.5 text-xs font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary"
            >
              <MapPin className="h-3.5 w-3.5" />
              Bogor
            </Link>
            <Link
              href="#contact"
              className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary shadow-[0_0_18px_rgba(100,200,180,0.25)] transition-all hover:-translate-y-0.5 hover:bg-primary/20"
            >
              Hire Me
            </Link>
            <Link
              href="/resume.pdf"
              className="rounded-full border border-border bg-background/40 px-3 py-1.5 text-xs font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary"
            >
              Download CV
            </Link>
          </div>
        </div>

        <div className="mt-5 grid gap-2 sm:grid-cols-3 lg:grid-cols-3">
          <div className="rounded-2xl border border-border/70 bg-secondary/25 px-3 py-2.5 transition-all hover:-translate-y-0.5 hover:border-primary/35 hover:bg-secondary/40">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              Lokasi
            </div>
            <p className="mt-1 text-sm font-medium text-foreground">Bogor, Indonesia</p>
          </div>

          <div className="rounded-2xl border border-border/70 bg-secondary/25 px-3 py-2.5 transition-all hover:-translate-y-0.5 hover:border-primary/35 hover:bg-secondary/40">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Fokus
            </div>
            <p className="mt-1 text-sm font-medium text-foreground">AI, Web, & Cybersecurity</p>
          </div>

          <div className="rounded-2xl border border-border/70 bg-secondary/25 px-3 py-2.5 transition-all hover:-translate-y-0.5 hover:border-primary/35 hover:bg-secondary/40">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Status
            </div>
            <p className="mt-1 text-sm font-medium text-foreground">Open for collaboration</p>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={cn(
              "block h-0.5 w-6 bg-foreground transition-all",
              mobileMenuOpen && "translate-y-2 rotate-45"
            )} />
            <span className={cn(
              "block h-0.5 w-6 bg-foreground transition-all",
              mobileMenuOpen && "opacity-0"
            )} />
            <span className={cn(
              "block h-0.5 w-6 bg-foreground transition-all",
              mobileMenuOpen && "-translate-y-2 -rotate-45"
            )} />
          </div>
        </button>
      </div>

      {/* Navigation */}
      <nav
        className={cn(
          "absolute left-0 top-full w-full bg-background/95 p-6 backdrop-blur-sm transition-all lg:relative lg:top-auto lg:mt-10 lg:block lg:w-auto lg:bg-transparent lg:p-0 lg:backdrop-blur-none",
          mobileMenuOpen 
            ? "opacity-100" 
            : "pointer-events-none opacity-0 lg:pointer-events-auto lg:opacity-100"
        )}
      >
        <ul className="flex flex-col gap-4 lg:grid lg:grid-flow-col lg:grid-rows-3 lg:justify-start lg:gap-x-8 lg:gap-y-3">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "group flex items-center gap-3 py-2 text-sm font-medium uppercase tracking-widest transition-colors lg:py-0 lg:text-xs",
                  activeSection === item.href.slice(1)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <span
                  className={cn(
                    "h-px transition-all",
                    activeSection === item.href.slice(1)
                      ? "w-10 bg-primary shadow-[0_0_8px_rgba(100,200,180,0.5)]"
                      : "w-5 bg-muted-foreground group-hover:w-10 group-hover:bg-primary"
                  )}
                />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social links */}
      <ul className="ml-6 mt-8 hidden items-center gap-5 lg:ml-0 lg:flex" aria-label="Social media">
        {socialLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-muted-foreground transition-all hover:text-primary hover:-translate-y-0.5"
              aria-label={link.name}
            >
              <link.icon className="h-5 w-5" />
            </Link>
          </li>
        ))}
      </ul>
    </header>
  )
}

