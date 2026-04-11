import Link from "next/link"

export function ContactSection() {
  return (
    <section
      id="contact"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Kontak"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Kontak
        </h2>
      </div>
      <div className="max-w-lg">
        <h3 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Mari <span className="text-primary">Terhubung</span>
        </h3>
        <p className="mt-6 text-muted-foreground">
          Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif, atau kesempatan
          untuk menjadi bagian dari visi Anda. Meskipun saya sedang tidak aktif mencari
          peluang baru, inbox saya selalu terbuka. Jika ada pertanyaan atau sekadar ingin
          menyapa, saya akan berusaha membalas pesan Anda!
        </p>
        <div className="mt-8">
          <Link
            href="mailto:hello@example.com"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow-[0_0_20px_rgba(100,200,180,0.3)] transition-all hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(100,200,180,0.5)]"
          >
            Kirim Email
          </Link>
        </div>
      </div>
    </section>
  )
}
