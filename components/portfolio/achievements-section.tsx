"use client"

import { useMemo, useState } from "react"
import { Award, Sparkles, Trophy } from "lucide-react"

type AchievementType = "award" | "achievement"

type AchievementItem = {
  year: string
  title: string
  issuer: string
  description: string
  type: AchievementType
  impact: string
}

const achievements: AchievementItem[] = [
  {
    year: "2025",
    title: "Koordinator Acara Terbaik",
    issuer: "UKM Seni dan Budaya Telkom University",
    description:
      "Diapresiasi atas keberhasilan mengoordinasikan rangkaian Student Fair dengan eksekusi acara yang rapi, tepat waktu, dan partisipasi peserta yang tinggi.",
    type: "award",
    impact: "Partisipasi acara meningkat dan alur operasional lebih efisien.",
  },
  {
    year: "2024",
    title: "Top Contributor Student Fair",
    issuer: "Himpunan Mahasiswa Teknologi Informasi",
    description:
      "Mendapat pengakuan sebagai panitia dengan kontribusi paling konsisten pada persiapan logistik, koordinasi teknis, dan dukungan operasional lapangan.",
    type: "achievement",
    impact: "Persiapan logistik lebih tertata dan risiko keterlambatan menurun.",
  },
  {
    year: "2024 - 2025",
    title: "Finalis Program Innovillage",
    issuer: "Telkom University",
    description:
      "Berhasil membawa tim hingga tahap final berkat kesiapan teknis, kolaborasi lintas peran, dan penyelesaian masalah secara efektif selama program berlangsung.",
    type: "achievement",
    impact: "Solusi tim tervalidasi dan memperkuat pengalaman project end-to-end.",
  },
]

export function AchievementsSection() {
  const [filter, setFilter] = useState<"all" | AchievementType>("all")

  const totalAwards = useMemo(
    () => achievements.filter((item) => item.type === "award").length,
    []
  )

  const totalAchievements = useMemo(
    () => achievements.filter((item) => item.type === "achievement").length,
    []
  )

  const filteredAchievements = useMemo(() => {
    if (filter === "all") {
      return achievements
    }
    return achievements.filter((item) => item.type === filter)
  }, [filter])

  return (
    <section
      id="achievements"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Achievement dan Awards"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Achievement & Awards
        </h2>
      </div>

      <div className="mb-6 rounded-2xl border border-border/70 bg-secondary/25 p-4 md:p-5">
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Achievement & Awards
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Pencapaian yang paling relevan dan terdokumentasi
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
              Kumpulan penghargaan dan milestone yang mencerminkan kontribusi saya di organisasi, kegiatan kampus, dan program pengembangan diri.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-xs font-medium">
            <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-primary">
              {achievements.length} Total
            </span>
            <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-primary">
              {totalAwards} Awards
            </span>
            <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-primary">
              {totalAchievements} Achievements
            </span>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
              filter === "all"
                ? "border-primary/40 bg-primary/15 text-primary"
                : "border-border bg-background/40 text-muted-foreground hover:text-foreground"
            }`}
          >
            Semua
          </button>
          <button
            type="button"
            onClick={() => setFilter("award")}
            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
              filter === "award"
                ? "border-primary/40 bg-primary/15 text-primary"
                : "border-border bg-background/40 text-muted-foreground hover:text-foreground"
            }`}
          >
            Awards
          </button>
          <button
            type="button"
            onClick={() => setFilter("achievement")}
            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
              filter === "achievement"
                ? "border-primary/40 bg-primary/15 text-primary"
                : "border-border bg-background/40 text-muted-foreground hover:text-foreground"
            }`}
          >
            Achievements
          </button>
        </div>
      </div>

      <ol className="group/list relative">
        {filteredAchievements.map((item) => (
          <li key={`${item.year}-${item.title}`} className="mb-8">
            <div className="group relative grid gap-4 rounded-2xl border border-border/70 bg-secondary/20 p-4 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:-translate-y-1 lg:hover:border-primary/30 lg:hover:bg-secondary/35 lg:hover:shadow-[0_0_24px_rgba(100,200,180,0.06)]">
              <div className="z-10 flex items-start gap-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
                <div className="flex items-center gap-2 rounded-full border border-border/70 bg-background/30 px-2.5 py-1">
                  {item.type === "award" ? (
                    <Award className="h-4 w-4 text-primary" />
                  ) : (
                    <Trophy className="h-4 w-4 text-primary" />
                  )}
                  <span>{item.year}</span>
                </div>
              </div>

              <div className="z-10 sm:col-span-6">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-semibold leading-snug text-foreground">{item.title}</h3>
                  <span className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary shadow-[0_0_12px_rgba(100,200,180,0.14)]">
                    <Sparkles className="h-3 w-3" />
                    {item.type === "award" ? "Award" : "Achievement"}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-primary">{item.issuer}</p>
                <p className="mt-2 text-sm leading-normal text-muted-foreground">{item.description}</p>
                <p className="mt-3 rounded-lg border border-border/60 bg-background/35 px-3 py-2 text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">Dampak:</span> {item.impact}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}