import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { VideoIntroSection } from "@/components/video-intro-section"
import { JourneySection } from "@/components/journey-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { EducationSection } from "@/components/education-section"
import { FunFactsSection } from "@/components/fun-facts-section"
import { LanguagesSection } from "@/components/languages-section"
import { ContactSection } from "@/components/contact-section"
import { FloatingDoodles } from "@/components/floating-doodles"
import { GuidedTour } from "@/components/guided-tour"
import { Footer } from "@/components/footer"
import { VisitorCounter } from "@/components/visitor-counter"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <GuidedTour />
      <FloatingDoodles />
      <VisitorCounter />
      <HeroSection />
      <AboutSection />
      <VideoIntroSection />
      <JourneySection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <TestimonialsSection />
      <EducationSection />
      <FunFactsSection />
      <LanguagesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
