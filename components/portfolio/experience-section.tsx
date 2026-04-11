import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const experiences = [
  {
    period: "2024 — Sekarang",
    title: "Senior Frontend Developer",
    company: "Tech Company",
    companyUrl: "#",
    description:
      "Membangun dan memelihara komponen kritis untuk frontend produk di seluruh platform. Bekerja sama dengan tim cross-functional termasuk developers, designers, dan product managers untuk mengimplementasikan best practices dalam aksesibilitas web.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    period: "2022 — 2024",
    title: "Frontend Developer",
    company: "Digital Agency",
    companyUrl: "#",
    description:
      "Mengembangkan dan mengelola berbagai proyek web untuk klien dari berbagai industri. Berkontribusi dalam pengembangan design system dan component library internal.",
    technologies: ["Vue.js", "JavaScript", "SCSS", "Node.js"],
  },
  {
    period: "2020 — 2022",
    title: "Junior Web Developer",
    company: "Startup Inc",
    companyUrl: "#",
    description:
      "Memulai karir sebagai web developer dengan fokus pada pengembangan fitur-fitur baru dan bug fixing. Belajar best practices dalam clean code dan collaborative development.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
]

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Pengalaman kerja"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Pengalaman
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {experiences.map((experience, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg border border-transparent transition-all motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:border-primary/20 lg:group-hover:bg-secondary/50 lg:group-hover:shadow-[0_0_30px_rgba(100,200,180,0.08)]" />
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2"
                  aria-label={experience.period}
                >
                  {experience.period}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-foreground">
                    <div>
                      <Link
                        href={experience.companyUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group/link inline-flex items-baseline text-base font-medium leading-tight text-foreground transition-colors hover:text-primary focus-visible:text-primary"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                        <span>
                          {experience.title} ·{" "}
                          <span className="inline-block">
                            {experience.company}
                            <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                          </span>
                        </span>
                      </Link>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-muted-foreground">
                    {experience.description}
                  </p>
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {experience.technologies.map((tech) => (
                      <li key={tech} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary transition-all hover:bg-primary/20 hover:shadow-[0_0_10px_rgba(100,200,180,0.2)]">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-12">
          <Link
            href="/resume.pdf"
            className="group inline-flex items-center font-medium leading-tight text-foreground transition-colors hover:text-primary"
          >
            <span>Lihat Resume Lengkap</span>
            <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
