"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import { Award, Sparkles, Trophy, X } from "lucide-react"

type AchievementType = "award" | "achievement"

type AchievementItem = {
  year: string
  title: string
  issuer: string
  description: string
  type: AchievementType
  impact: string
  image?: string
  imageAlt?: string
}

const achievements: AchievementItem[] = [
  {
    year: "2024",
    title: "Penghargaan Tim Terbaik",
    issuer: "Triwulan 3 - Telkom University",
    description:
      "Menerima penghargaan dari kampus atas pencapaian Juara 1 pada lomba band tingkat nasional Telkom Jaya Abadi.",
    type: "award",
    impact: "Menjadi bentuk apresiasi resmi kampus terhadap prestasi kompetitif dan kontribusi di bidang seni.",
    image: "/awards/juara 1 band.png",
    imageAlt: "Sertifikat penghargaan Juara 1 Band",
  },
  {
    year: "2024",
    title: "Telkom Jaya Abadi",
    issuer: "Ocean fest vol. 2 - Universitas PGRI Madiun",
    description:
      "Meraih Juara 1 pada ajang Telkom Jaya Abadi, sebuah lomba band tingkat nasional dengan kompetisi lintas perguruan tinggi.",
    type: "award",
    impact: "Meningkatkan reputasi tim di level nasional dan membuka peluang kolaborasi serta eksposur yang lebih luas.",
    image: "/awards/TJA.jpg",
    imageAlt: "Sertifikat penghargaan Telkom Jaya Abadi",
  },
  {
    year: "2024 - 2025",
    title: "Tim Support",
    issuer: "Innovillage - Telkom University",
    description:
      "Berperan sebagai tim support untuk memastikan kebutuhan teknis berjalan stabil, membantu troubleshooting cepat, dan menjaga kelancaran operasional kegiatan.",
    type: "achievement",
    impact: "Waktu penanganan kendala teknis lebih cepat dan kualitas pelaksanaan program lebih terjaga.",
    image: "/awards/sertif ino.jpg",
    imageAlt: "Sertifikat kontribusi Tim Support",
  },
  {
    year: "2025",
    title: "Google Cloud Cybersecurity Certificate",
    issuer: "Google Cloud",
    description:
      "Menyelesaikan program sertifikasi yang mempersiapkan kompetensi cloud security analyst, cybersecurity specialist, dan incident response analyst.",
    type: "achievement",
    impact:
      "Memperkuat fondasi keamanan siber pada network security, threat analysis, SQL, incident detection, dan dokumentasi respons insiden.",
    image: "/awards/cyber.png",
    imageAlt: "Sertifikat Google Cloud Cybersecurity",
  },
  {
    year: "2025",
    title: "Inovasi Digital Pencegahan Stunting Melalui Aplikasi Growell dengan Pendekatan User-Centered Design",
    issuer: "Journal of Informatics and Communication Technology (JICT) - Vol. 7 No. 1",
    description:
      "Terpublikasi sebagai co-author bersama tim penulis dari Telkom University Jakarta. Artikel dipublikasikan pada 22 Juli 2025 dengan fokus inovasi aplikasi kesehatan digital untuk pencegahan stunting.",
    type: "achievement",
    impact:
      "Memperkuat kredibilitas akademik di bidang riset terapan, khususnya pada usability, user-centered design, dan pemanfaatan solusi digital di sektor kesehatan.",
    image: "/awards/jurnal.png",
    imageAlt: "Sertifikat Publikasi Jurnal",
  },
]

export function AchievementsSection() {
  const [filter, setFilter] = useState<"all" | AchievementType>("all")
  const [expandedItem, setExpandedItem] = useState<string | null>(null)
  const [previewImage, setPreviewImage] = useState<{
    src: string
    alt: string
    title: string
  } | null>(null)

  useEffect(() => {
    if (!previewImage) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPreviewImage(null)
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [previewImage])

  const getLatestYear = (yearText: string) => {
    const years = yearText.match(/\d{4}/g)
    if (!years) return 0
    return Math.max(...years.map((value) => Number(value)))
  }

  const totalAwards = useMemo(
    () => achievements.filter((item) => item.type === "award").length,
    []
  )

  const totalAchievements = useMemo(
    () => achievements.filter((item) => item.type === "achievement").length,
    []
  )

  const filteredAchievements = useMemo(() => {
    const baseItems = filter === "all"
      ? achievements
      : achievements.filter((item) => item.type === filter)

    return [...baseItems].sort((a, b) => {
      const yearDiff = getLatestYear(b.year) - getLatestYear(a.year)
      if (yearDiff !== 0) return yearDiff

      if (a.type !== b.type) {
        return a.type === "award" ? -1 : 1
      }

      return a.title.localeCompare(b.title)
    })
  }, [filter])

  return (
    <section id="achievements" className="scroll-mt-24" aria-label="Achievements and awards">
      <div className="relative overflow-hidden rounded-[2.3rem_1rem_2.15rem_1.2rem] border border-[#66d3e8]/24 bg-[linear-gradient(160deg,rgba(5,18,28,0.86)_0%,rgba(4,10,18,0.94)_68%,rgba(3,14,25,0.96)_100%)] p-6 md:p-8">
        <div className="pointer-events-none absolute -left-12 -top-8 h-36 w-44 rounded-full bg-[#2ea8c9]/8 blur-3xl" />

        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9ddff0]/84">Achievement & Awards</p>
              <h3 className="mt-3 text-3xl font-bold uppercase leading-[0.92] text-[#ecfbff] md:text-5xl">Credential Highlights</h3>
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9ddff0]/65">Verified Milestones</p>
          </div>

          <p className="max-w-3xl text-sm leading-relaxed text-[#d8f4ff]/82 md:text-base">
            Kumpulan penghargaan dan milestone yang mencerminkan kontribusi saya di organisasi, kegiatan kampus, dan program pengembangan diri.
          </p>

          <div className="flex flex-wrap gap-2 text-xs font-medium">
            <span className="rounded-full border border-[#64cfe5]/30 px-3 py-1 text-[#cdefff]/84">{achievements.length} Total</span>
            <span className="rounded-full border border-[#64cfe5]/30 px-3 py-1 text-[#cdefff]/84">{totalAwards} Awards</span>
            <span className="rounded-full border border-[#64cfe5]/30 px-3 py-1 text-[#cdefff]/84">{totalAchievements} Achievements</span>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            data-magnetic
            data-cursor-label="All"
            onClick={() => setFilter("all")}
            className={`rounded-full border px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors ${
              filter === "all"
                ? "border-[#7fe3f4]/70 bg-[#7fe3f4] text-[#06232e]"
                : "border-[#64cfe5]/30 bg-transparent text-[#cdefff]/84 hover:border-[#7fe3f4]/55 hover:text-[#ecfbff]"
            }`}
          >
            Semua
          </button>
          <button
            type="button"
            data-magnetic
            data-cursor-label="Award"
            onClick={() => setFilter("award")}
            className={`rounded-full border px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors ${
              filter === "award"
                ? "border-[#7fe3f4]/70 bg-[#7fe3f4] text-[#06232e]"
                : "border-[#64cfe5]/30 bg-transparent text-[#cdefff]/84 hover:border-[#7fe3f4]/55 hover:text-[#ecfbff]"
            }`}
          >
            Awards
          </button>
          <button
            type="button"
            data-magnetic
            data-cursor-label="Achievement"
            onClick={() => setFilter("achievement")}
            className={`rounded-full border px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors ${
              filter === "achievement"
                ? "border-[#7fe3f4]/70 bg-[#7fe3f4] text-[#06232e]"
                : "border-[#64cfe5]/30 bg-transparent text-[#cdefff]/84 hover:border-[#7fe3f4]/55 hover:text-[#ecfbff]"
            }`}
          >
            Achievements
          </button>
        </div>

        <ol className="mt-6 grid gap-3 md:grid-cols-2">
          {filteredAchievements.map((item) => {
            const itemId = `${item.year}-${item.title}`
            const isExpanded = expandedItem === itemId

            return (
              <li key={itemId} className="[content-visibility:auto] [contain-intrinsic-size:0_340px]">
                <article className="rounded-2xl border border-[#64cfe5]/24 bg-[linear-gradient(180deg,rgba(7,26,39,0.78)_0%,rgba(5,12,20,0.86)_100%)] p-4 md:p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-3">
                      <button
                        type="button"
                        data-magnetic
                        data-cursor-label="Preview"
                        onClick={() => {
                          setPreviewImage({
                            src: item.image ?? "/placeholder.jpg",
                            alt: item.imageAlt ?? `Gambar ${item.title}`,
                            title: item.title,
                          })
                        }}
                        className="overflow-hidden rounded-xl border border-[#64cfe5]/24 bg-white/[0.03] p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#64cfe5]/60"
                        aria-label={`Lihat gambar ${item.title}`}
                      >
                        <Image
                          src={item.image ?? "/placeholder.jpg"}
                          alt={item.imageAlt ?? `Gambar ${item.title}`}
                          width={640}
                          height={400}
                          loading="lazy"
                          className="h-24 w-full rounded-lg object-contain object-center"
                        />
                      </button>

                      <div className="inline-flex items-center gap-2 rounded-full border border-[#64cfe5]/30 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#cdefff]/78">
                        {item.type === "award" ? <Award className="h-3.5 w-3.5" /> : <Trophy className="h-3.5 w-3.5" />}
                        {item.year}
                      </div>
                    </div>

                    <button
                      type="button"
                      data-magnetic
                      data-cursor-label="Reveal"
                      onClick={() => setExpandedItem((prev) => (prev === itemId ? null : itemId))}
                      className="rounded-full border border-[#64cfe5]/30 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#cdefff]/84 transition-colors hover:border-[#7fe3f4]/55 hover:text-[#ecfbff]"
                    >
                      {isExpanded ? "Hide" : "Reveal"}
                    </button>
                  </div>

                  <div className="mt-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-semibold leading-snug text-[#ecfbff] md:text-lg">{item.title}</h3>
                      <span className="inline-flex items-center gap-1 rounded-full border border-[#64cfe5]/30 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.1em] text-[#cdefff]/76">
                        <Sparkles className="h-3 w-3" />
                        {item.type === "award" ? "Award" : "Achievement"}
                      </span>
                    </div>
                    <p className="mt-2 text-sm font-medium text-[#cdefff]/88">{item.issuer}</p>

                    {isExpanded ? (
                      <>
                        <p className="mt-3 text-sm leading-relaxed text-[#d8f4ff]/82">{item.description}</p>
                        <p className="mt-3 rounded-xl border border-[#64cfe5]/24 bg-white/[0.02] px-3 py-2 text-xs leading-relaxed text-[#cdefff]/78">
                          <span className="font-semibold uppercase tracking-[0.08em] text-[#ecfbff]">Dampak:</span> {item.impact}
                        </p>
                      </>
                    ) : null}
                  </div>
                </article>
              </li>
            )
          })}
        </ol>
      </div>

      {previewImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Preview ${previewImage.title}`}
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative w-full max-w-4xl rounded-2xl border border-[#64cfe5]/30 bg-[linear-gradient(180deg,rgba(5,18,28,0.96)_0%,rgba(4,10,18,0.98)_100%)] p-3 shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setPreviewImage(null)}
              className="absolute right-3 top-3 rounded-full border border-[#64cfe5]/30 bg-black/80 p-1.5 text-[#cdefff]/76 transition-colors hover:text-[#ecfbff]"
              aria-label="Tutup popup"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative h-[70vh] w-full overflow-hidden rounded-xl border border-white/20 bg-white/95">
              <Image
                src={previewImage.src}
                alt={previewImage.alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <div className="mt-3 flex items-center justify-between gap-3">
              <p className="text-sm font-medium text-[#ecfbff]">{previewImage.title}</p>
              <a
                href={previewImage.src}
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm font-medium text-[#9ddff0]/85 hover:text-[#ecfbff]"
              >
                Buka file asli
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}