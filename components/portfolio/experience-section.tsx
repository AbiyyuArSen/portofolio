"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const experiences = [
    {
    period: "2024",
    position: "Kepala Divisi",
    title: "Divisi Band",
    company: "Seni dan Budaya Telkom University",
    companyUrl: "#",
    image: "/pengalaman/band.jpeg",
      imageAlt: "Dokumentasi kegiatan Divisi Band Seni dan Budaya Telkom University",
    description:
        "Memimpin perencanaan program kerja Divisi Band, mengoordinasikan anggota untuk latihan dan penampilan, serta memastikan setiap agenda berjalan terstruktur dan tepat waktu.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    period: "2024",
    position: "Staff Divisi Acara",
    title: "Student Fair",
    company: "Seni dan Budaya Telkom University",
    companyUrl: "#",
    image: "/pengalaman/pkkmb.jpeg",
    imageAlt: "Dokumentasi kepanitiaan Student Fair Seni dan Budaya",
    description:
      "Berperan sebagai staf divisi acara dalam menyusun alur kegiatan Student Fair, menyiapkan kebutuhan teknis lapangan, dan membantu koordinasi antar panitia saat pelaksanaan.",
    technologies: ["Vue.js", "JavaScript", "SCSS", "Node.js"],
  },
  {
    period: "2024",
    position: "Staff Divisi Logistik",
    title: "Student Fair",
    company: "Himpunan Mahasiswa Teknologi Informasi",
    companyUrl: "#",
    image: "/pengalaman/HMIT.jpeg",
    imageAlt: "Dokumentasi tim logistik Student Fair HMTI",
    description:
      "Menangani kebutuhan logistik acara mulai dari pendataan perlengkapan, distribusi peralatan, hingga memastikan kesiapan sarana sebelum dan selama kegiatan berlangsung.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    period: "2025",
    position: "Koordinator Acara",
    title: "Student Fair",
    company: "Seni dan Budaya Telkom University",
    companyUrl: "#",
    image: "/pengalaman/senibudaya.jpeg",
    imageAlt: "Dokumentasi koordinasi acara Student Fair 2025",
    description:
      "Mengkoordinasikan rangkaian acara Student Fair 2025, mengatur timeline pelaksanaan, serta menjadi penghubung utama antara tim acara, talent, dan panitia inti.",
    technologies: ["Vue.js", "JavaScript", "SCSS", "Node.js"],
  },
  {
    period: "2024 - 2025",
    position: "IT Support",
    title: "Innovillage 2024",
    company: "Telkom University",
    companyUrl: "#",
    image: "/pengalaman/ino.jpeg",
    imageAlt: "Dokumentasi aktivitas IT Support Innovillage 2024",
    description:
      "Mendukung kebutuhan teknis tim selama program Innovillage, termasuk troubleshooting perangkat, manajemen konektivitas, dan memastikan operasional teknologi berjalan stabil.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    period: "2025",
    position: "Wakil Ketua Umum",
    title: "Seni dan Budaya",
    company: "Seni dan Budaya Telkom University",
    companyUrl: "#",
    image: "/pengalaman/wakil.jpeg",
    imageAlt: "Dokumentasi kegiatan organisasi saat menjabat Wakil Ketua Umum",
    description:
      "Membantu ketua umum dalam pengambilan keputusan strategis organisasi, mengawal pelaksanaan program kerja, dan memperkuat koordinasi lintas divisi.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    period: "2025",
    position: "Pembawa Acara",
    title: "Pengabdian Masyarakat",
    company: "Telkom University",
    companyUrl: "#",
    image: "/pengalaman/pengmas.jpg",
    imageAlt: "Dokumentasi kegiatan pembawa acara Pengabdian Masyarakat",
    description:
      "Menjadi pembawa acara pada kegiatan pengabdian masyarakat, menjaga alur acara tetap komunikatif, dan memastikan interaksi peserta berjalan aktif serta tertib.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
]

export function ExperienceSection() {
  const [yearFilter, setYearFilter] = useState<"all" | "2024" | "2025">("all")

  const filteredExperiences = useMemo(() => {
    if (yearFilter === "all") return experiences
    return experiences.filter((item) => item.period.includes(yearFilter))
  }, [yearFilter])

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
        <div className="mb-6 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setYearFilter("all")}
            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
              yearFilter === "all"
                ? "border-primary/40 bg-primary/15 text-primary"
                : "border-border bg-background/40 text-muted-foreground hover:text-foreground"
            }`}
          >
            Semua
          </button>
          <button
            type="button"
            onClick={() => setYearFilter("2024")}
            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
              yearFilter === "2024"
                ? "border-primary/40 bg-primary/15 text-primary"
                : "border-border bg-background/40 text-muted-foreground hover:text-foreground"
            }`}
          >
            Tahun 2024
          </button>
          <button
            type="button"
            onClick={() => setYearFilter("2025")}
            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
              yearFilter === "2025"
                ? "border-primary/40 bg-primary/15 text-primary"
                : "border-border bg-background/40 text-muted-foreground hover:text-foreground"
            }`}
          >
            Tahun 2025
          </button>
        </div>

        <ol className="group/list">
          {filteredExperiences.map((experience, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg border border-transparent transition-all motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:border-primary/20 lg:group-hover:bg-secondary/50 lg:group-hover:shadow-[0_0_30px_rgba(100,200,180,0.08)]" />
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2"
                  aria-label={experience.period}
                >
                  <div className="overflow-hidden rounded-2xl border border-border bg-secondary/40">
                    <Image
                      src={experience.image}
                      alt={experience.imageAlt}
                      width={640}
                      height={480}
                      className="h-28 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>

                  <span className="mt-4 block">{experience.period}</span>
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
                        <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                          <span>{experience.position}</span>
                          <span className="text-muted-foreground">·</span>
                          <span>{experience.title}</span>
                          <span className="text-muted-foreground">·</span>
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
