import { Navbar } from '@/components/common/Navbar'
import { Footer } from '@/components/common/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { PortfolioSection } from '@/components/sections/PortfolioSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
