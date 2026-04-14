import { Header } from "@/components/portfolio/header"
import { AboutSection } from "@/components/portfolio/about-section"
import { ExperienceSection } from "@/components/portfolio/experience-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { AchievementsSection } from "@/components/portfolio/achievements-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { InteractiveBackground } from "@/components/portfolio/interactive-background"

export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-transparent">
      <InteractiveBackground />
      <div className="relative z-10 mx-auto max-w-[1500px] px-6 py-12 md:px-12 md:py-20 lg:px-16 lg:py-0">
        <div className="lg:flex lg:items-start lg:justify-between lg:gap-6">
          <Header />
          <main id="content" className="pt-24 lg:w-[54%] lg:py-24">
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <AchievementsSection />
            <ContactSection />
          </main>
        </div>
      </div>
    </div>
  )
}
