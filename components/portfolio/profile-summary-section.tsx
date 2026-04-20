import Image from "next/image"

export function ProfileSummarySection() {
  return (
    <section id="profile-summary" className="scroll-mt-24" aria-label="Profile summary">
      <div className="relative overflow-hidden rounded-[2.4rem_1rem_2.6rem_1.1rem] border border-[#65d3e8]/26 bg-[linear-gradient(155deg,rgba(6,20,31,0.9)_0%,rgba(4,10,18,0.97)_100%)] p-6 md:p-8">
        <div className="pointer-events-none absolute -right-16 -top-12 h-36 w-44 rounded-full bg-[#70dbf1]/12 blur-3xl" />

        <div className="grid gap-6 md:grid-cols-[150px_1fr] md:gap-8">
          <div className="mx-auto w-[132px] md:mx-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.3rem_0.9rem_1.4rem_1rem] ring-1 ring-inset ring-[#65d3e8]/26">
              <Image
                src="/placeholder-user.jpg"
                alt="Profile photo of Abiyyu Aryasena"
                fill
                sizes="(max-width: 768px) 132px, 150px"
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9ddff0]/66 md:text-left">
              Portfolio File
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9ddff0]/78">Profile Dossier</p>
            <h2 className="mt-2 text-[clamp(1.7rem,5vw,2.5rem)] font-semibold leading-[0.95] text-[#eefcff]">
              Abiyyu Aryasena
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#d1f1fc]/82 md:text-base">
              Full-stack developer focused on practical systems, clean UX execution, and resilient product architecture.
            </p>

            <dl className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="border-b border-[#65d3e8]/20 pb-2">
                <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9ddff0]/72">Major</dt>
                <dd className="mt-1 text-sm font-semibold text-[#ecfbff]">Information Technology</dd>
              </div>
              <div className="border-b border-[#65d3e8]/20 pb-2">
                <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9ddff0]/72">GPA</dt>
                <dd className="mt-1 text-sm font-semibold text-[#ecfbff]">3.9 / 4.0</dd>
              </div>
              <div className="border-b border-[#65d3e8]/20 pb-2">
                <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9ddff0]/72">Base</dt>
                <dd className="mt-1 text-sm font-semibold text-[#ecfbff]">Indonesia</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
