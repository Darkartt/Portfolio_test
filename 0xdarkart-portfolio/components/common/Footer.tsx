'use client'

import Link from 'next/link'
import { Github, Linkedin, Twitter, Send } from 'lucide-react'
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Twitter, href: SITE_CONFIG.links.twitter, label: 'Twitter' },
    { icon: Github, href: SITE_CONFIG.links.github, label: 'GitHub' },
    { icon: Linkedin, href: SITE_CONFIG.links.linkedin, label: 'LinkedIn' },
    { icon: Send, href: SITE_CONFIG.links.telegram, label: 'Telegram' },
  ]

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="border-t border-border bg-card/30 backdrop-blur-sm">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">0xDarkArt</h3>
            <p className="text-sm text-muted-foreground">
              Web3 Security Researcher specializing in smart contract auditing and blockchain
              security.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-primary transition-colors hover:bg-primary/10 rounded-md"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Services</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Smart Contract Audits</li>
              <li className="text-sm text-muted-foreground">Security Research</li>
              <li className="text-sm text-muted-foreground">Code Reviews</li>
              <li className="text-sm text-muted-foreground">Security Training</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with <span className="text-primary">Next.js</span> &{' '}
            <span className="text-primary">TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
