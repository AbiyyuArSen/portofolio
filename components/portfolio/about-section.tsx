export function AboutSection() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Tentang saya"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Tentang
        </h2>
      </div>
      <div className="space-y-4 text-muted-foreground">
        <p>
          Saya adalah seorang developer yang passionate dalam menciptakan{" "}
          <span className="font-medium text-primary">user interfaces yang accessible dan pixel-perfect</span>{" "}
          dengan kombinasi desain yang thoughtful dan engineering yang robust.
          Karya terbaik saya berada di persimpangan antara desain dan pengembangan,
          menciptakan pengalaman yang tidak hanya terlihat bagus tetapi juga dibangun
          dengan performa dan kegunaan yang optimal.
        </p>
        <p>
          Saat ini, saya fokus pada pengembangan produk yang{" "}
          <span className="text-foreground">accessible dan inklusif</span>{" "}
          untuk semua pengguna.
          Saya berkontribusi dalam pembuatan dan pemeliharaan komponen UI yang memastikan
          platform memenuhi standar aksesibilitas web dan best practices.
        </p>
        <p>
          Di masa lalu, saya memiliki kesempatan untuk mengembangkan software di berbagai lingkungan
          — dari <span className="text-foreground">startup teknologi</span> hingga{" "}
          <span className="text-foreground">perusahaan besar</span> dan{" "}
          <span className="text-foreground">studio produk digital</span>.
          Saya juga aktif berbagi pengetahuan melalui artikel teknis dan mentoring.
        </p>
        <p>
          Di waktu luang, saya biasanya coding project sampingan, membaca buku tentang teknologi,
          atau menjelajahi framework dan tools baru.
        </p>
      </div>
    </section>
  )
}
