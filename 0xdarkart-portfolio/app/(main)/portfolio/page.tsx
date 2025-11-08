import type { Metadata } from 'next'
import { PortfolioSection } from '@/components/sections/PortfolioSection'

export const metadata: Metadata = {
  title: 'Portfolio - 0xDarkArt',
  description:
    'Browse my security audit portfolio including smart contract audits for DeFi protocols, NFT projects, and blockchain infrastructure. View detailed case studies and findings.',
}

export default function PortfolioPage() {
  return <PortfolioSection />
}
