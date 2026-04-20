const focusAreas = ["Laravel", "Flutter", "AI", "Cybersecurity", "UI/UX"]

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24" aria-label="About me">
      <div className="relative py-2">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#66d3e8]/36 to-transparent" />
        <div className="grid gap-8 pt-8 md:pt-10 xl:grid-cols-[0.95fr_1.05fr] xl:gap-12">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9ddff0]/82">About</p>
            <h2 className="mt-3 max-w-lg text-[clamp(2rem,5.4vw,3.6rem)] font-semibold leading-[0.9] text-[#eefcff]">
              Building reliable digital systems with human-centered thinking.
            </h2>
          </div>

          <div>
            <div className="space-y-4 text-sm leading-relaxed text-[#d8f4ff]/82 md:text-base">
              <p>
                I am an Information Technology student at Telkom University Jakarta with a strong interest in
                Artificial Intelligence. My main focus is building software for real-world use cases through a
                systematic and user-centric approach.
              </p>
              <p>
                Beyond academics, I am active in the Arts and Culture student organization. This experience has strengthened
                my leadership, team collaboration, and program execution skills under time pressure.
              </p>
              <p>
                I am also deepening my expertise in Cybersecurity to ensure every solution I build is not only effective,
                but also robust from a security standpoint.
              </p>
            </div>

            <div className="mt-6 border-t border-[#66d3e8]/22 pt-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9ddff0]/72">Focus Areas</p>
              <ul className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#cdefff]/86">
                {focusAreas.map((area, index) => (
                  <li key={area} className="flex items-center gap-3">
                    <span>{area}</span>
                    {index < focusAreas.length - 1 ? <span className="text-[#66d3e8]/35">/</span> : null}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#66d3e8]/30 to-transparent" />
      </div>
    </section>
  )
}
