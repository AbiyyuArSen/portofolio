"use client"

import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ArrowUpRight, Plus, X } from "lucide-react"

type ProjectShot = {
  src: string
  alt: string
  caption: string
}

type ProjectItem = {
  year: string
  title: string
  category: "IoT" | "Web" | "Mobile"
  description: string
  technologies: string[]
  github: string
  live: string
  screenshots: ProjectShot[]
}

const projects: ProjectItem[] = [
  {
    year: "2025",
    title: "Smartfeeder Fish IoT",
    category: "IoT",
    description:
      "An IoT system for monitoring and controlling fish feeding with real-time tracking and notifications, built for operational efficiency and user clarity.",
    technologies: ["Node.js", "ESP32", "MQTT", "React"],
    github: "https://github.com",
    live: "#",
    screenshots: [
      {
        src: "/proyek/ocean/poster-smartfeeder.jpeg",
        alt: "Smartfeeder dashboard for fish pond monitoring",
        caption: "Real-time pond condition monitoring",
      },
      {
        src: "/proyek/ocean/poster.jpeg",
        alt: "Greenlight product design render and internal components",
        caption: "Greenlight product design and component exploration",
      },
      {
        src: "/proyek/ocean/main.png",
        alt: "SmartFeeder Fish IoT project poster",
        caption: "SmartFeeder Fish IoT project poster",
      },
      {
        src: "/proyek/ocean/iot.png",
        alt: "Smartfeeder notification view",
        caption: "Monitoring and alert view for feeding activity",
      },
      {
        src: "/proyek/ocean/suhu.png",
        alt: "Smartfeeder notification view",
        caption: "Monitoring and alert view for feeding activity",
      },
      {
        src: "/proyek/ocean/ph.png",
        alt: "Smartfeeder notification view",
        caption: "Monitoring and alert view for feeding activity",
      },
    ],
  },

  {
    year: "2026",
    title: "EventKita",
    category: "Web",
    description:
      "An entertainment event ticketing platform focused on music concerts. The user flow includes registration/login, event discovery, event details, checkout, payment processing, and digital e-tickets. The platform also features member dashboard and admin dashboard for event management, categories, cities, discussion forums, and content moderation.",
    technologies: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
    github: "https://github.com",
    live: "#",
    screenshots: [
      {
        src: "/proyek/eventkita/daftar.png",
        alt: "EventKita homepage with concert event listings",
        caption: "Discover entertainment events and music concerts",
      },
      {
        src: "/proyek/eventkita/dashboard1.png",
        alt: "Checkout page for Java Jazz Festival ticket booking",
        caption: "Streamlined and clear ticket checkout flow",
      },
      {
        src: "/proyek/eventkita/checkout.png",
        alt: "Digital e-ticket display after successful payment",
        caption: "Digital e-ticket ready to use after transaction",
      },
      {
        src: "/proyek/eventkita/checkout2.png",
        alt: "Digital e-ticket display after successful payment",
        caption: "Digital e-ticket ready to use after transaction",
      },
      {
        src: "/proyek/eventkita/pembayaran.png",
        alt: "Digital e-ticket display after successful payment",
        caption: "Digital e-ticket ready to use after transaction",
      },
      {
        src: "/proyek/eventkita/etiket.png",
        alt: "Digital e-ticket display after successful payment",
        caption: "Digital e-ticket ready to use after transaction",
      },
    ],
  },
  {
    year: "2025",
    title: "Greenlight Air",
    category: "IoT",
    description:
      "Greenlight is an intelligent air quality monitoring device for urban environments. The solution combines air quality sensors, data processing modules, and real-time status display to help users quickly assess air conditions. The project includes team brainstorming stages, 3D prototype visualizations, and simulations of device deployment in high-traffic areas.",
    technologies: ["ESP32", "Air Quality Sensor", "Embedded System", "3D Product Design"],
    github: "https://github.com",
    live: "#",
    screenshots: [
      {
        src: "/proyek/Greenlight/dragon.jpeg",
        alt: "Greenlight project development team",
        caption: "Team documentation during Greenlight development phase",
      },
      {
        src: "/proyek/Greenlight/awal.jpeg",
        alt: "Greenlight prototype in highway environment simulation",
        caption: "Greenlight device deployment simulation in urban area",
      },
      {
        src: "/proyek/Greenlight/awal2.jpeg",
        alt: "Greenlight product design render and internal components",
        caption: "Greenlight product design and component exploration",
      },
       {
        src: "/proyek/Greenlight/jadi.jpeg",
        alt: "Greenlight product design render and internal components",
        caption: "Greenlight product design and component exploration",
      },
       {
        src: "/proyek/Greenlight/proto.jpeg",
        alt: "Greenlight product design render and internal components",
        caption: "Greenlight product design and component exploration",
      },
    ],
  },
  {
    year: "2023",
    title: "Growell",
    category: "Web",
    description: "A weather application with real-time location and 7-day forecasting.",
    technologies: ["React", "Weather API", "Geolocation"],
    github: "https://github.com",
    live: "#",
    screenshots: [
      {
        src: "/proyek/growell/login.png",
        alt: "Weather app main interface",
        caption: "Current weather based on user location",
      },
      {
        src: "/proyek/growell/dashboard.png",
        alt: "Weather app weekly forecast",
        caption: "Seven-day forecast with temperature detail",
      },
      {
        src: "/proyek/growell/gizi.png",
        alt: "Weather app detail screen",
        caption: "Humidity, wind, and pressure details",
      },
      {
        src: "/proyek/growell/konsultasi.png",
        alt: "Weather app detail screen",
        caption: "Humidity, wind, and pressure details",
      },
      {
        src: "/proyek/growell/dashboard2.png",
        alt: "Weather app detail screen",
        caption: "Humidity, wind, and pressure details",
      },
    ],
  },
  {
    year: "2023",
    title: "E kost",
    category: "Web",
    description: "A task management application with drag-and-drop workflows and team collaboration.",
    technologies: ["Vue.js", "Firebase", "Vuetify"],
    github: "https://github.com",
    live: "#",
    screenshots: [
      {
        src: "/proyek/ekost/Kelola-Event-EventKita-01-05-2026_10_29_PM.png",
        alt: "Task Manager main board",
        caption: "Kanban board for team task management",
      },
      {
        src: "/proyek/ekost/Kelola-Kategori-EventKita-01-05-2026_10_31_PM.png",
        alt: "Task Manager task details",
        caption: "Task details, owner, and deadline",
      },
      {
        src: "/proyek/ekost/Moderasi-Diskusi-EventKita-01-05-2026_10_33_PM.png",
        alt: "Task Manager activity log",
        caption: "Collaboration activity timeline",
      },
    ],
  },
]

export function ProjectsSection() {
  const [categoryFilter, setCategoryFilter] = useState<"All" | "IoT" | "Web" | "Mobile">("All")
  const [expandedProject, setExpandedProject] = useState<string | null>(projects[0]?.title ?? null)
  const [lightbox, setLightbox] = useState<{ projectTitle: string; shotIndex: number } | null>(null)
  const projectRefs = useRef<Record<string, HTMLLIElement | null>>({})

  const filteredProjects = useMemo(() => {
    if (categoryFilter === "All") return projects
    return projects.filter((project) => project.category === categoryFilter)
  }, [categoryFilter])

  useEffect(() => {
    if (filteredProjects.length === 0) {
      setExpandedProject(null)
      return
    }

    const stillExists = filteredProjects.some((project) => project.title === expandedProject)
    if (!stillExists) {
      setExpandedProject(filteredProjects[0].title)
    }
  }, [expandedProject, filteredProjects])

  useEffect(() => {
    if (filteredProjects.length === 0) return

    const visibilityMap = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement
          const title = target.dataset.projectTitle
          if (!title) return

          visibilityMap.set(title, entry.isIntersecting ? entry.intersectionRatio : 0)
        })

        let nextTitle: string | null = null
        let maxRatio = 0

        filteredProjects.forEach((project) => {
          const ratio = visibilityMap.get(project.title) ?? 0
          if (ratio > maxRatio) {
            maxRatio = ratio
            nextTitle = project.title
          }
        })

        if (nextTitle && maxRatio > 0.15) {
          setExpandedProject((prev) => (prev === nextTitle ? prev : nextTitle))
        }
      },
      {
        threshold: [0, 0.15, 0.3, 0.45, 0.6, 0.75],
        rootMargin: "-12% 0px -38% 0px",
      }
    )

    filteredProjects.forEach((project) => {
      const element = projectRefs.current[project.title]
      if (!element) return
      visibilityMap.set(project.title, 0)
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [filteredProjects])

  useEffect(() => {
    if (!lightbox) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightbox(null)
        return
      }

      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        setLightbox((prev) => {
          if (!prev) return null
          const project = projects.find((item) => item.title === prev.projectTitle)
          if (!project || project.screenshots.length === 0) return null

          const direction = event.key === "ArrowRight" ? 1 : -1
          const nextIndex = (prev.shotIndex + direction + project.screenshots.length) % project.screenshots.length
          return { ...prev, shotIndex: nextIndex }
        })
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [lightbox])

  const activeProject = lightbox ? projects.find((item) => item.title === lightbox.projectTitle) ?? null : null
  const activeShot = activeProject ? activeProject.screenshots[lightbox?.shotIndex ?? 0] : null

  const shiftLightbox = (direction: 1 | -1) => {
    setLightbox((prev) => {
      if (!prev) return null
      const project = projects.find((item) => item.title === prev.projectTitle)
      if (!project || project.screenshots.length === 0) return null

      const nextIndex = (prev.shotIndex + direction + project.screenshots.length) % project.screenshots.length
      return { ...prev, shotIndex: nextIndex }
    })
  }

  return (
    <section id="projects" className="scroll-mt-24" aria-label="Selected projects">
      <div className="relative">
        <div className="pointer-events-none absolute -left-10 top-0 h-24 w-40 rounded-full bg-[#44cbe4]/10 blur-3xl" />

        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9ddff0]/84">Case Studies</p>
            <h2 className="mt-3 text-[clamp(2rem,6vw,4.6rem)] font-semibold leading-[0.9] text-[#ecfbff]">Selected Projects</h2>
          </div>
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9ddff0]/65">
            {String(filteredProjects.length).padStart(2, "0")} Entries
          </span>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {(["All", "IoT", "Web", "Mobile"] as const).map((category) => (
            <button
              key={category}
              type="button"
              data-magnetic
              data-cursor-label={category}
              onClick={() => setCategoryFilter(category)}
              className={`rounded-full border px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors ${
                categoryFilter === category
                  ? "border-[#7fe3f4]/70 bg-[#7fe3f4] text-[#06232e]"
                  : "border-[#64cfe5]/30 bg-transparent text-[#cdefff]/84 hover:border-[#7fe3f4]/55 hover:text-[#ecfbff]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <ol className="mt-8 divide-y divide-[#64cfe5]/18 border-y border-[#64cfe5]/18">
          {filteredProjects.map((project, index) => {
            const isOpen = expandedProject === project.title

            return (
              <li
                key={project.title}
                ref={(element) => {
                  projectRefs.current[project.title] = element
                }}
                data-project-title={project.title}
                className="py-6 md:py-7 [content-visibility:auto] [contain-intrinsic-size:0_280px]"
              >
                <article className="group">
                  <div className="grid gap-4 md:grid-cols-[110px_1fr_auto] md:gap-6">
                    <div>
                      <p className="font-mono text-xs text-[#9edff2]/58">{String(index + 1).padStart(2, "0")}</p>
                      <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9edff2]/76">{project.year}</p>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9edff2]/58">{project.category}</p>
                    </div>

                    <div>
                      <h3 className="text-[clamp(1.5rem,3.8vw,2.35rem)] font-semibold leading-[0.94] text-[#ecfbff]">
                        {project.title}
                      </h3>
                      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#d8f4ff]/82 md:text-base">{project.description}</p>
                    </div>

                    <button
                      type="button"
                      data-magnetic
                      data-cursor-label="Details"
                      onClick={() => setExpandedProject(project.title)}
                      className="inline-flex h-fit items-center gap-1 self-start rounded-full border border-[#64cfe5]/30 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#cdefff]/84 transition-colors hover:border-[#7fe3f4]/55 hover:text-[#ecfbff]"
                    >
                      <Plus className={`h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-45" : ""}`} />
                      Details
                    </button>
                  </div>

                  <div className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ${isOpen ? "mt-5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <div className="grid gap-5 lg:grid-cols-[1fr_auto]">
                        <div>
                          <div className="flex flex-wrap items-end justify-between gap-2">
                            <div>
                              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9edff2]/76">Visual Preview</p>
                            </div>
                          </div>

                          {project.screenshots.length > 3 ? (
                            <div
                              className="mt-2 overflow-hidden pb-2"
                              style={{
                                ["--marquee-duration" as string]: `${Math.max(project.screenshots.length * 4.5, 20)}s`,
                              }}
                            >
                              <div className="project-marquee-track">
                                {[...project.screenshots, ...project.screenshots].map((shot, shotIndex) => (
                                <div
                                  key={`${project.title}-loop-shot-${shotIndex}`}
                                  className="project-marquee-item w-[86vw] shrink-0 text-left sm:w-[320px] lg:w-[360px]"
                                >
                                  <div className="relative h-60 overflow-hidden rounded-lg border border-[#64cfe5]/28 bg-[#03121a] sm:h-80">
                                    <Image
                                      src={shot.src}
                                      alt={shot.alt}
                                      fill
                                      sizes="(max-width: 640px) 75vw, 250px"
                                      className="object-cover object-center"
                                    />
                                  </div>
                                  <p className="mt-1 truncate text-[10px] font-medium text-[#bde8f6]/74">{shot.caption}</p>
                                </div>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
                              {project.screenshots.map((shot, shotIndex) => (
                                <div key={`${project.title}-shot-${shotIndex}`} className="text-left">
                                  <div className="relative h-60 overflow-hidden rounded-lg border border-[#64cfe5]/28 bg-[#03121a] sm:h-80">
                                    <Image
                                      src={shot.src}
                                      alt={shot.alt}
                                      fill
                                      sizes="(max-width: 768px) 50vw, 240px"
                                      className="object-cover object-center"
                                    />
                                  </div>
                                  <p className="mt-1 truncate text-[10px] font-medium text-[#bde8f6]/74">{shot.caption}</p>
                                </div>
                              ))}
                            </div>
                          )}

                          <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1" aria-label="Technologies used">
                            {project.technologies.map((tech, techIndex) => (
                              <li key={tech} className="flex items-center gap-3 text-xs font-medium text-[#cdefff]/76">
                                <span>{tech}</span>
                                {techIndex < project.technologies.length - 1 ? <span className="text-[#64cfe5]/36">/</span> : null}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex h-fit gap-4 text-xs font-semibold uppercase tracking-[0.14em]">
                          <Link
                            href={project.live}
                            target="_blank"
                            rel="noreferrer noopener"
                            data-magnetic
                            data-cursor-label="Live"
                            className="inline-flex items-center gap-1 text-[#9edff2]/84 transition-colors hover:text-[#ecfbff]"
                          >
                            Live
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </Link>
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noreferrer noopener"
                            data-magnetic
                            data-cursor-label="GitHub"
                            className="inline-flex items-center gap-1 text-[#9edff2]/84 transition-colors hover:text-[#ecfbff]"
                          >
                            GitHub
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ol>
      </div>

      {lightbox && activeProject && activeShot ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Screenshot ${activeProject.title}`}
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative w-full max-w-5xl rounded-2xl border border-[#64cfe5]/30 bg-[linear-gradient(180deg,rgba(5,18,28,0.96)_0%,rgba(4,10,18,0.98)_100%)] p-3 shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute right-3 top-3 rounded-full border border-[#64cfe5]/30 bg-black/70 p-1.5 text-[#cdefff]/80 transition-colors hover:text-[#ecfbff]"
              aria-label="Close gallery"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative h-[68vh] w-full overflow-hidden rounded-xl border border-[#64cfe5]/28 bg-[#030d14]">
              <Image
                src={activeShot.src}
                alt={activeShot.alt}
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-[#ecfbff]">{activeProject.title}</p>
                <p className="mt-1 text-xs text-[#cdefff]/80">{activeShot.caption}</p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#9edff2]/72">
                  {String((lightbox.shotIndex ?? 0) + 1).padStart(2, "0")} / {String(activeProject.screenshots.length).padStart(2, "0")}
                </span>
                <button
                  type="button"
                  onClick={() => shiftLightbox(-1)}
                  className="rounded-full border border-[#64cfe5]/30 p-2 text-[#cdefff]/80 transition-colors hover:text-[#ecfbff]"
                  aria-label="Previous screenshot"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => shiftLightbox(1)}
                  className="rounded-full border border-[#64cfe5]/30 p-2 text-[#cdefff]/80 transition-colors hover:text-[#ecfbff]"
                  aria-label="Next screenshot"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}
