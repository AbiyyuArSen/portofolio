"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
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
    technologies: ["HTML", "CSS", "JavaScript", "React"],  },
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
    <section id="experience" className="scroll-mt-24" aria-label="Work and organization experience">
      <div className="relative overflow-hidden rounded-[1.05rem_2.25rem_1.15rem_2.35rem] border border-[#66d3e8]/24 bg-[linear-gradient(160deg,rgba(5,18,28,0.86)_0%,rgba(4,10,18,0.94)_66%,rgba(3,14,25,0.96)_100%)] p-6 md:p-8">
        <div className="pointer-events-none absolute -right-16 top-10 h-40 w-44 rounded-full bg-[#73ddf2]/8 blur-3xl" />

        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9ddff0]/84">Experience</p>
            <h2 className="mt-3 text-3xl font-bold uppercase leading-[0.92] text-[#ecfbff] md:text-5xl">Leadership Journey</h2>
          </div>
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9ddff0]/65">Organization & Event</span>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          <button
            type="button"
            data-magnetic
            data-cursor-label="Semua"
            onClick={() => setYearFilter("all")}
            className={`rounded-full border px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors ${
              yearFilter === "all"
                ? "border-[#7fe3f4]/70 bg-[#7fe3f4] text-[#06232e]"
                : "border-[#64cfe5]/30 bg-transparent text-[#cdefff]/84 hover:border-[#7fe3f4]/55 hover:text-[#ecfbff]"
            }`}
          >
            Semua
          </button>
          <button
            type="button"
            data-magnetic
            data-cursor-label="2024"
            onClick={() => setYearFilter("2024")}
            className={`rounded-full border px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors ${
              yearFilter === "2024"
                ? "border-[#7fe3f4]/70 bg-[#7fe3f4] text-[#06232e]"
                : "border-[#64cfe5]/30 bg-transparent text-[#cdefff]/84 hover:border-[#7fe3f4]/55 hover:text-[#ecfbff]"
            }`}
          >
            Tahun 2024
          </button>
          <button
            type="button"
            data-magnetic
            data-cursor-label="2025"
            onClick={() => setYearFilter("2025")}
            className={`rounded-full border px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors ${
              yearFilter === "2025"
                ? "border-[#7fe3f4]/70 bg-[#7fe3f4] text-[#06232e]"
                : "border-[#64cfe5]/30 bg-transparent text-[#cdefff]/84 hover:border-[#7fe3f4]/55 hover:text-[#ecfbff]"
            }`}
          >
            Tahun 2025
          </button>
        </div>

        <ol className="space-y-3">
          {filteredExperiences.map((experience, index) => (
            <li key={`${experience.period}-${experience.position}-${experience.company}`} className="[content-visibility:auto] [contain-intrinsic-size:0_360px]">
              <article className="rounded-2xl border border-[#64cfe5]/24 bg-[linear-gradient(180deg,rgba(7,26,39,0.78)_0%,rgba(5,12,20,0.86)_100%)] p-4 md:p-5">
                <div className="grid gap-4 md:grid-cols-[180px_1fr] md:gap-6">
                  <header className="text-xs font-semibold uppercase tracking-wide text-[#9ddff0]/78" aria-label={experience.period}>
                    <div className="overflow-hidden rounded-xl border border-[#64cfe5]/24 bg-white/[0.03]">
                      <img
                        src={experience.image}
                        alt={experience.imageAlt}
                        width={640}
                        height={480}
                        loading="lazy"
                        decoding="async"
                        className="h-28 w-full object-cover grayscale transition duration-500 hover:grayscale-0 md:h-32"
                      />
                    </div>

                    <div className="mt-3 flex items-center justify-between gap-2">
                      <span className="rounded-full border border-[#64cfe5]/28 px-2.5 py-1 text-[10px] text-[#cdefff]/78">{experience.period}</span>
                      <span className="font-mono text-[10px] text-[#9ddff0]/46">#{String(index + 1).padStart(2, "0")}</span>
                    </div>
                  </header>

                  <div>
                    <h3 className="font-medium leading-snug text-[#ecfbff]">
                      <Link
                        href={experience.companyUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-baseline text-base font-semibold leading-tight text-[#ecfbff] transition-colors hover:text-[#d7f5ff] md:text-lg"
                      >
                        <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                          <span>{experience.position}</span>
                          <span className="text-[#9ddff0]/48">·</span>
                          <span>{experience.title}</span>
                          <span className="text-[#9ddff0]/48">·</span>
                          <span className="inline-block text-[#cdefff]/88">
                            {experience.company}
                            <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px" />
                          </span>
                        </span>
                      </Link>
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#d8f4ff]/82">{experience.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies used">
                      {experience.technologies.map((tech) => (
                        <li key={tech}>
                          <div className="flex items-center rounded-full border border-[#64cfe5]/28 px-3 py-1 text-[11px] font-medium leading-5 text-[#cdefff]/74">
                            {tech}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
