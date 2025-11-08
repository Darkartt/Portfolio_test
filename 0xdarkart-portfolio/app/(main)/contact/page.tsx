import type { Metadata } from 'next'
import { ContactSection } from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Contact - 0xDarkArt',
  description:
    'Get in touch for security audits, vulnerability research, or security consulting. Request a custom quote for your Web3 project.',
}

export default function ContactPage() {
  return <ContactSection />
}
