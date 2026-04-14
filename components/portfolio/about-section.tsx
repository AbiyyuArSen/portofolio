const highlights = [
  { label: "Fokus", value: "AI + Software" },
  { label: "Organisasi", value: "5+ Event" },
  { label: "Minat", value: "Cybersecurity" },
]

const focusAreas = ["Laravel", "Flutter", "AI", "Cybersecurity", "UI/UX"]

export function AboutSection() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:min-h-[calc(100vh-7rem)] lg:scroll-mt-24"
      aria-label="Tentang saya"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Tentang
        </h2>
      </div>
      <div className="space-y-4 pt-2 text-muted-foreground lg:pt-0">
        <p>
          Saya adalah mahasiswa Teknologi Informasi di Telkom University Jakarta dengan minat yang sangat tinggi di bidang Artificial Intelligence (AI). Untuk mengaplikasikan minat tersebut, saya berfokus pada software development menggunakan Laravel dan Flutter dengan pendekatan antarmuka yang user-centric. Saat ini, saya juga aktif mengeksplorasi ranah Cybersecurity guna memperluas wawasan teknis mengenai standar keamanan dalam pengembangan perangkat lunak.
        </p>
        <p>
          Di luar kegiatan akademik dan pemrograman, saya aktif berorganisasi sebagai pengurus di UKM Seni dan Budaya. Keterlibatan ini melatih jiwa kepemimpinan, kemampuan komunikasi, kerja sama tim, dan manajemen waktu saya dalam menjalankan berbagai program kerja secara profesional.
        </p>
        <p>
           Pada waktu luang, saya biasanya menyeimbangkan rutinitas logis dengan kegiatan kreatif. Saya senang mengerjakan proyek mandiri, mengeksplorasi tren teknologi terbaru, atau menyalurkan kreativitas melalui hobi saya.
        </p>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {highlights.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-border/70 bg-secondary/30 px-4 py-3 backdrop-blur-sm"
          >
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{item.label}</p>
            <p className="mt-1 text-sm font-semibold text-foreground">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {focusAreas.map((area) => (
          <span
            key={area}
            className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
          >
            {area}
          </span>
        ))}
      </div>
    </section>
  )
}
