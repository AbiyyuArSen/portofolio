"use client"

import Link from "next/link"
import { ArrowUpRight, Github, Instagram, Linkedin } from "lucide-react"
import { Reveal } from "@/components/portfolio/reveal"

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/abiyyu-aryasena-271425385/", icon: Linkedin },
  { name: "GitHub", href: "https://github.com", icon: Github },
  { name: "Instagram", href: "https://instagram.com", icon: Instagram },
]

export function MassiveFooter() {
  return (
    <footer id="contact" className="scroll-mt-24 pb-10 pt-8 md:pb-14">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-[#64cfe5]/22 bg-[linear-gradient(150deg,rgba(6,18,28,0.92)_0%,rgba(4,10,18,0.96)_72%,rgba(3,14,24,0.98)_100%)] p-6 md:p-8 lg:p-10">
          <div className="pointer-events-none absolute -left-12 -top-10 h-36 w-44 rounded-full bg-[#5fd5ef]/12 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 -bottom-12 h-40 w-48 rounded-full bg-[#2ea8c9]/10 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9ddff0]/82">Open To Collaboration</p>
              <h2 className="mt-3 max-w-xl text-[clamp(1.9rem,5vw,3.3rem)] font-semibold leading-[0.92] text-[#ecfbff]">
                Let&apos;s shape meaningful digital products together.
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#cdefff]/78 md:text-base">
                Available for project collaboration, technical execution, and product-focused development work.
              </p>

              <Link
                href="mailto:abiyyuajh@gmail.com"
                data-magnetic
                data-cursor-label="Email"
                className="mt-6 inline-flex items-center rounded-full border border-[#7fe3f4]/45 bg-[#7fe3f4]/12 px-5 py-2.5 text-sm font-semibold text-[#e7faff] transition-colors hover:bg-[#7fe3f4]/22"
              >
                abiyyuajh@gmail.com
              </Link>
            </div>

            <div className="space-y-5 lg:pt-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9ddff0]/68">Connect</p>
              <ul className="space-y-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon

                  return (
                    <li key={social.name}>
                      <Link
                        href={social.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        data-magnetic
                        data-cursor-label={social.name}
                        className="group relative flex w-full items-center justify-between overflow-hidden rounded-xl border border-[#64cfe5]/22 bg-[#061824]/35 px-4 py-3 text-[#9ddff0]/80 transition-all duration-300 hover:translate-x-1 hover:border-[#7fe3f4]/55 hover:bg-[#7fe3f4]/10 hover:text-[#ecfbff]"
                      >
                        <span
                          aria-hidden
                          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-[#7fe3f4]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        />
                        <span className="relative z-10 inline-flex items-center gap-2.5 text-base font-semibold uppercase tracking-[0.12em] md:text-lg">
                          <Icon className="h-[18px] w-[18px]" />
                          {social.name}
                        </span>
                        <ArrowUpRight className="relative z-10 h-[18px] w-[18px] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

          <div className="relative mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#64cfe5]/20 pt-4 text-[11px] uppercase tracking-[0.14em] text-[#9ddff0]/62">
            <span>Portfolio 2026</span>
            <span>Built With Next.js</span>
          </div>
        </div>
      </Reveal>
    </footer>
  )
}
