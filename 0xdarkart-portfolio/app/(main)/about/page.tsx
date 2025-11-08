import type { Metadata } from 'next'
import { AboutSection } from '@/components/sections/AboutSection'
import { SkillsSection } from '@/components/sections/SkillsSection'

export const metadata: Metadata = {
  title: 'About - 0xDarkArt',
  description:
    'Learn about my background in Web3 security, blockchain auditing, and full-stack development. Experienced security researcher protecting DeFi protocols and smart contracts.',
}

export default function AboutPage() {
  return (
    <>
      <AboutSection />
      <SkillsSection />
    </>
  )
}
