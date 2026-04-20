"use client"

import { Reveal } from "@/components/portfolio/reveal"
import { LiveAnimalBackground } from "@/components/portfolio/live-animal-background"

export function ImmersiveHero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-black">
      <LiveAnimalBackground />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.32)_0%,rgba(0,0,0,0.5)_58%,rgba(4,10,20,0.9)_100%),radial-gradient(circle_at_28%_20%,rgba(81,214,241,0.14),transparent_34%),radial-gradient(circle_at_78%_76%,rgba(43,166,198,0.12),transparent_42%),radial-gradient(circle_at_50%_100%,rgba(17,81,112,0.24),transparent_56%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-[radial-gradient(75%_120%_at_50%_100%,rgba(54,173,214,0.22)_0%,rgba(9,30,45,0.12)_38%,rgba(4,10,20,0)_70%),linear-gradient(180deg,rgba(4,10,20,0)_0%,rgba(4,10,20,0.84)_46%,rgba(5,5,5,0.995)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1320px] items-center px-4 py-8 md:px-8 md:py-11 lg:px-10 lg:py-14">
        <Reveal className="w-full">
          <div className="mx-auto w-full max-w-[900px] px-2 text-center sm:px-4 md:px-6">
            <h1 className="text-[clamp(2.9rem,10.6vw,6.8rem)] font-extrabold leading-[0.88] tracking-[-0.025em] text-white [text-shadow:0_14px_44px_rgba(0,0,0,0.62)]">
              ABIYYU
              <span className="mt-1 block text-[#d7f5ff]">ARYASENA</span>
            </h1>
            <p className="sunset-shine-text mt-4 text-[clamp(0.78rem,2.4vw,1rem)] font-semibold uppercase tracking-[0.2em] md:mt-5 md:tracking-[0.28em]">
              Full-Stack Developer
            </p>
            <div className="mx-auto mt-6 h-px w-36 bg-gradient-to-r from-transparent via-[#7fe3f4]/72 to-transparent md:mt-7 md:w-44" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
