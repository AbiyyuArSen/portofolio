"use client"

import Image from "next/image"
import { Reveal } from "@/components/portfolio/reveal"

const stack = ["Laravel", "Flutter", "PHP", "Javascript"]

export function PhilosophySection() {
  return (
    <section id="about" className="scroll-mt-24">
      <Reveal>
        <div className="rounded-[1.6rem] border border-[#f1b37f]/30 bg-[linear-gradient(180deg,rgba(18,12,8,0.92)_0%,rgba(10,8,8,0.95)_100%)] p-6 md:p-8 lg:p-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#f3c6a4]/80">About / Philosophy</p>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h3 className="text-3xl font-bold uppercase leading-[0.95] text-[#fff4ea] md:text-5xl">
                User-Centered Design
                <br />
                Meets Technical Precision
              </h3>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#fbe4d3]/82 md:text-base">
                Every product decision should reduce friction, improve clarity, and serve real human behavior.
                I combine research-driven UX with scalable engineering to ship experiences that perform in production,
                not only in presentations.
              </p>
            </div>

            <div>
              <div className="mb-5 rounded-2xl border border-[#f1b37f]/24 bg-black/35 p-3">
                <div className="relative mx-auto aspect-[4/5] w-full max-w-[220px] overflow-hidden rounded-xl border border-[#f1b37f]/24">
                  <Image
                    src="/placeholder-user.jpg"
                    alt="Foto profil Abiyyu Aryasena"
                    fill
                    sizes="220px"
                    className="object-cover"
                  />
                </div>
                <p className="mt-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#f7dbc5]/78">
                  Abiyyu Aryasena
                </p>
              </div>

              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#f3c6a4]/70">Technical Stack</p>
              <ul className="mt-3 space-y-2">
                {stack.map((item, index) => (
                  <li
                    key={item}
                    className="rounded-xl border border-[#f1b37f]/24 bg-white/[0.03] px-3.5 py-3 text-sm font-semibold text-[#fff3e8]"
                    style={{
                      animationDelay: `${90 + index * 80}ms`,
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
