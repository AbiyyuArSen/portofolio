import { ScrollToHeroOnEntry } from "@/components/portfolio/scroll-to-hero-on-entry"
import { BackgroundMusic } from "@/components/portfolio/background-music"
import { ImmersiveHero } from "@/components/portfolio/immersive-hero"
import { Reveal } from "@/components/portfolio/reveal"
import { ProfileSummarySection } from "@/components/portfolio/profile-summary-section"
import { AboutSection } from "@/components/portfolio/about-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { ExperienceSection } from "@/components/portfolio/experience-section"
import { AchievementsSection } from "@/components/portfolio/achievements-section"
import { MassiveFooter } from "@/components/portfolio/massive-footer"

export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-transparent">
      <ScrollToHeroOnEntry />
      <BackgroundMusic />
      <main id="content" className="relative z-10 overflow-x-clip">
        <ImmersiveHero />
        <div className="relative mx-auto max-w-[1460px] px-4 py-8 md:px-8 md:py-10 lg:px-12 lg:py-12">
          <div className="pointer-events-none absolute -left-20 top-24 h-56 w-56 rounded-full bg-[#45c4e6]/8 blur-[85px]" />
          <div className="pointer-events-none absolute -right-16 top-[36rem] h-64 w-64 rounded-full bg-[#2aa9cc]/8 blur-[95px]" />

          <div className="grid gap-8 xl:grid-cols-12 xl:gap-10">
            <div className="xl:col-span-5 xl:pr-2">
              <Reveal delay={20} duration={500} threshold={0.24}>
                <ProfileSummarySection />
              </Reveal>
            </div>
            <div className="xl:col-span-7 xl:pt-10">
              <Reveal delay={90} duration={560} threshold={0.22}>
                <AboutSection />
              </Reveal>
            </div>
          </div>

          <div className="mt-12 xl:mt-16">
            <Reveal delay={70} duration={540} threshold={0.16}>
              <ProjectsSection />
            </Reveal>
          </div>

          <div className="mt-12 grid gap-8 xl:mt-16 xl:grid-cols-12 xl:gap-10">
            <div className="xl:col-span-7">
              <Reveal delay={40} duration={540} threshold={0.2}>
                <ExperienceSection />
              </Reveal>
            </div>
            <div className="xl:col-span-5 xl:pt-10">
              <Reveal delay={90} duration={620} threshold={0.22}>
                <AchievementsSection />
              </Reveal>
            </div>
          </div>

          <div className="mt-14 xl:mt-20">
            <Reveal delay={50} duration={620} threshold={0.2}>
              <MassiveFooter />
            </Reveal>
          </div>
        </div>
      </main>
    </div>
  )
}
