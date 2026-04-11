"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Tentang", href: "#about" },
  { name: "Pengalaman", href: "#experience" },
  { name: "Proyek", href: "#projects" },
  { name: "Kontak", href: "#contact" },
]

const socialLinks = [
  { name: "GitHub", href: "https://github.com", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com", icon: Twitter },
  { name: "Email", href: "mailto:hello@example.com", icon: Mail },
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
    <header className="fixed left-0 top-0 z-50 w-full lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div className="flex items-center justify-between bg-background/80 p-6 backdrop-blur-sm lg:block lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
            <Link href="/" className="transition-all hover:text-primary hover:drop-shadow-[0_0_20px_rgba(100,200,180,0.5)]">
              Nama Anda
            </Link>
          </h1>
          
          <h2 className="mt-3 flex items-center gap-3 text-lg font-medium tracking-tight text-primary drop-shadow-[0_0_10px_rgba(100,200,180,0.3)] lg:text-xl">
            Front End Developer
            <span className="flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              Open to Work
            </span>
          </h2>
          
          <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground">
            Saya membangun pengalaman digital yang{" "}
            <span className="text-foreground">accessible</span> dan{" "}
            <span className="text-foreground">pixel-perfect</span> untuk web.
          </p>
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
        <ul className="flex flex-col gap-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "group flex items-center gap-4 py-2 text-sm font-medium uppercase tracking-widest transition-colors",
                  activeSection === item.href.slice(1)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <span
                  className={cn(
                    "h-px transition-all",
                    activeSection === item.href.slice(1)
                      ? "w-16 bg-primary shadow-[0_0_8px_rgba(100,200,180,0.5)]"
                      : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-primary"
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
