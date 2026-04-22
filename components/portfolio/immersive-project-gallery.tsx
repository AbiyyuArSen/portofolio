"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"
import { Reveal } from "@/components/portfolio/reveal"
import { cn } from "@/lib/utils"

const projects = [
  {
    name: "Growell",
    category: "Health Tech",
    short: "A human-centered digital application to address stunting issues in Indonesia.",
    detail:
      "Led UX research and information architecture for caregivers, then translated findings into a clean and reassuring interface for daily nutritional monitoring.",
    tags: ["UX Research", "Product Design", "Interface Design"],
    year: "2026",
    image: "/proyek/ocean/ikan.jpeg",
    href: "#",
  },
  {
    name: "Smart Agriculture System",
    category: "IoT Platform",
    short: "IoT-based platform for risk prediction and crop optimization.",
    detail:
      "Designed a decision dashboard that merges sensor telemetry, weather data, and prediction models into one operational workflow for field teams.",
    tags: ["IoT", "Dashboard UX", "Predictive Insights"],
    year: "2025",
    image: "/proyek/ocean/ikan.jpeg",
    href: "#",
  },
  {
    name: "EventKita",
    category: "Ticketing Web",
    short: "An entertainment event ticketing platform focused on music concerts with checkout and digital e-ticket features.",
    detail:
      "EventKita is designed as an end-to-end platform for event discovery and ticket purchasing. Based on available artifacts, the user flow includes user registration and login, music event catalog like Java Jazz Festival 2026, event detail pages, checkout and payment process, and e-ticket issuance. The platform also provides member dashboard to view purchase activities and admin dashboard to manage events, categories, cities, discussion forums, and moderate conversations to keep the community ecosystem active and structured.",
    tags: ["Ticketing Flow", "Event Discovery", "Admin Dashboard"],
    year: "2026",
    image: "/proyek/eventkita/Java-Jazz-Festival-2026-EventKita-Temukan-Event-Terbaik-01-05-2026_10_21_PM.png",
    href: "#",
  },
]

export function ImmersiveProjectGallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  const activeProject = projects[activeIndex]

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length)
  }

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const disclosureText = useMemo(() => {
    return expandedIndex === activeIndex ? activeProject.detail : "Click reveal to open full case context."
  }, [activeIndex, activeProject.detail, expandedIndex])

  return (
    <section id="works" className="scroll-mt-24">
      <Reveal>
        <div className="mb-5 flex items-end justify-between gap-4">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.26em] text-white/60">Selected Works</h2>
          <p className="text-xs text-white/45">
            {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </p>
        </div>
      </Reveal>

      <div className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
        <Reveal className="relative min-h-[62vh] overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#060606]">
          <div className="absolute inset-0 transition-transform duration-700 hover:scale-[1.03]">
            {activeProject.image ? (
              <Image
                src={activeProject.image}
                alt={activeProject.name}
                fill
                className="object-cover opacity-75 grayscale"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
            ) : (
              <div className="h-full w-full bg-[radial-gradient(circle_at_22%_22%,rgba(255,255,255,0.18),transparent_45%),radial-gradient(circle_at_78%_65%,rgba(255,255,255,0.12),transparent_42%),linear-gradient(160deg,#111_0%,#050505_65%,#0a0a0a_100%)]" />
            )}
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_28%,rgba(0,0,0,0.75)_100%)]" />

          <div className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">{activeProject.category}</p>
            <h3 className="mt-3 text-3xl font-bold text-white md:text-5xl">{activeProject.name}</h3>
            <p className="mt-3 max-w-xl text-sm text-white/75 md:text-base">{activeProject.short}</p>
          </div>
        </Reveal>

        <Reveal delay={120} className="rounded-[1.6rem] border border-white/10 bg-[#050505] p-5 md:p-6">
          <ol className="space-y-2">
            {projects.map((project, index) => (
              <li key={project.name}>
                <button
                  type="button"
                  data-magnetic
                  data-cursor-label="Open"
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "group flex w-full items-center justify-between rounded-xl border px-3 py-3 text-left transition-colors",
                    activeIndex === index
                      ? "border-white/35 bg-white/10"
                      : "border-white/10 bg-transparent hover:border-white/25"
                  )}
                >
                  <div>
                    <p className="text-sm font-semibold text-white">{project.name}</p>
                    <p className="text-xs text-white/45">{project.year}</p>
                  </div>
                  <span className="text-xs uppercase tracking-[0.14em] text-white/50 transition-transform group-hover:translate-x-1">
                    View
                  </span>
                </button>
              </li>
            ))}
          </ol>

          <div className="mt-5 rounded-xl border border-white/12 bg-white/[0.03] p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55">Case Insight</p>
              <button
                type="button"
                data-magnetic
                data-cursor-label="Reveal"
                onClick={() => setExpandedIndex((prev) => (prev === activeIndex ? null : activeIndex))}
                className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.14em] text-white/70 hover:text-white"
              >
                <Plus className={cn("h-3.5 w-3.5 transition-transform", expandedIndex === activeIndex ? "rotate-45" : "")}
                />
                Reveal
              </button>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/72">{disclosureText}</p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {activeProject.tags.map((tag) => (
                <li key={tag} className="rounded-full border border-white/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/60">
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 flex items-center justify-between gap-3">
            <div className="flex gap-2">
              <button
                type="button"
                data-magnetic
                data-cursor-label="Prev"
                onClick={prev}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/75 transition-colors hover:border-white/40 hover:text-white"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                data-magnetic
                data-cursor-label="Next"
                onClick={next}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/75 transition-colors hover:border-white/40 hover:text-white"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <Link
              href={activeProject.href}
              data-magnetic
              data-cursor-label="Open"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-white/80 transition-colors hover:text-white"
            >
              Open Study
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
