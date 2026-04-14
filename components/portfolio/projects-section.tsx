"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Smartfeeder Fish IoT",
    category: "IoT",
    image: "/proyek/ikan.jpeg",
    imageAlt: "Tampilan proyek Smartfeeder Fish IoT",
    description:
      "Sistem IoT untuk pemantauan dan pengendalian pakan ikan dengan fitur real-time monitoring dan notifikasi. Dibangun dengan fokus pada efisiensi dan kenyamanan pengguna.",
    technologies: ["Node.js", "ESP32", "MQTT", "React"],
    github: "https://github.com",
    live: "#",
  },
  {
    title: "Dashboard Analytics",
    category: "Web",
    image: "/placeholder.jpg",
    imageAlt: "Tampilan dashboard analytics",
    description:
      "Dashboard analitik real-time untuk monitoring metrics bisnis dengan visualisasi data interaktif dan laporan yang dapat di-customize.",
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
    github: "https://github.com",
    live: "#",
  },
  {
    title: "Mobile Banking App",
    category: "Mobile",
    image: "/placeholder.jpg",
    imageAlt: "Tampilan aplikasi mobile banking",
    description:
      "Aplikasi mobile banking dengan fitur transfer, pembayaran tagihan, dan manajemen keuangan personal dengan keamanan tingkat tinggi.",
    technologies: ["React Native", "TypeScript", "Firebase", "Redux"],
    github: "https://github.com",
    live: "#",
  },
  {
    title: "Weather App",
    category: "Web",
    image: "/placeholder.jpg",
    imageAlt: "Tampilan aplikasi cuaca",
    description: "Aplikasi cuaca dengan lokasi real-time dan prakiraan 7 hari ke depan.",
    technologies: ["React", "Weather API", "Geolocation"],
    github: "https://github.com",
    live: "#",
  },
  {
    title: "Task Manager",
    category: "Web",
    image: "/placeholder.jpg",
    imageAlt: "Tampilan aplikasi task manager",
    description: "Aplikasi manajemen tugas dengan fitur drag-and-drop dan kolaborasi tim.",
    technologies: ["Vue.js", "Firebase", "Vuetify"],
    github: "https://github.com",
    live: "#",
  },
]

export function ProjectsSection() {
  const [categoryFilter, setCategoryFilter] = useState<"All" | "IoT" | "Web" | "Mobile">("All")

  const filteredProjects = useMemo(() => {
    if (categoryFilter === "All") return projects
    return projects.filter((project) => project.category === categoryFilter)
  }, [categoryFilter])

  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Proyek yang dipilih"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Proyek
        </h2>
      </div>
      <div>
        <div className="mb-6 flex flex-wrap gap-2">
          {(["All", "IoT", "Web", "Mobile"] as const).map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setCategoryFilter(category)}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                categoryFilter === category
                  ? "border-primary/40 bg-primary/15 text-primary"
                  : "border-border bg-background/40 text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <ul className="group/list">
          {filteredProjects.map((project, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg border border-transparent transition-all motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:border-primary/20 lg:group-hover:bg-secondary/50 lg:group-hover:shadow-[0_0_30px_rgba(100,200,180,0.08)]" />
                <header className="z-10 sm:col-span-2">
                  <div className="overflow-hidden rounded-2xl border border-border bg-secondary/40">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      width={640}
                      height={400}
                      className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="mt-4 flex gap-3">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-muted-foreground transition-colors hover:text-primary"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </Link>
                  </div>
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-foreground">
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group/link inline-flex items-baseline text-base font-medium leading-tight text-foreground transition-colors hover:text-primary focus-visible:text-primary"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                      <span>
                        {project.title}
                        <span className="ml-2 rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[11px] text-primary">
                          {project.category}
                        </span>
                        <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                      </span>
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-muted-foreground">
                    {project.description}
                  </p>
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {project.technologies.map((tech) => (
                      <li key={tech} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center font-medium leading-tight text-foreground transition-colors hover:text-primary"
          >
            <span>Lihat Semua Proyek di GitHub</span>
            <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
