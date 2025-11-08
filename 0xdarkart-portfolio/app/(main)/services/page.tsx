import type { Metadata } from 'next'
import { ServicesSection } from '@/components/sections/ServicesSection'

export const metadata: Metadata = {
  title: 'Services - 0xDarkArt',
  description:
    'Comprehensive Web3 security services including smart contract audits, security research, code reviews, and security training for blockchain projects.',
}

export default function ServicesPage() {
  return <ServicesSection />
}
