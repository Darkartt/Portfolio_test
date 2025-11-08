import type { Metadata } from 'next'
import Link from 'next/link'
import { Code, Layers, Zap, Shield, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Full-Stack Development - 0xDarkArt',
  description:
    'Secure Web3 application development from smart contracts to frontend. Build decentralized applications with security-first architecture.',
}

export default function DevelopmentPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-6">
              <Code size={16} />
              <span>Full-Stack Web3 Development</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Secure <span className="text-gradient">Web3 Development</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Build decentralized applications with security built in from the ground up. From smart contracts to frontend, I deliver production-ready Web3 solutions.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 cyber-glow-hover font-medium"
            >
              Start Your Project
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Development <span className="text-gradient">Services</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all">
                <Layers className="text-primary mb-4" size={40} />
                <h3 className="text-2xl font-bold mb-4">Smart Contract Development</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Shield className="text-primary flex-shrink-0 mt-1" size={16} />
                    Secure smart contract architecture
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="text-primary flex-shrink-0 mt-1" size={16} />
                    Gas-optimized implementations
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="text-primary flex-shrink-0 mt-1" size={16} />
                    Comprehensive testing with Foundry
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="text-primary flex-shrink-0 mt-1" size={16} />
                    Upgradeable contract patterns
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all">
                <Code className="text-primary mb-4" size={40} />
                <h3 className="text-2xl font-bold mb-4">Frontend Development</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Zap className="text-primary flex-shrink-0 mt-1" size={16} />
                    Modern React/Next.js applications
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="text-primary flex-shrink-0 mt-1" size={16} />
                    Web3 wallet integration
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="text-primary flex-shrink-0 mt-1" size={16} />
                    Responsive, accessible UI/UX
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="text-primary flex-shrink-0 mt-1" size={16} />
                    Real-time blockchain data
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Tech <span className="text-gradient">Stack</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Smart Contracts</h3>
                <div className="flex flex-wrap gap-2">
                  {['Solidity', 'Foundry', 'Hardhat', 'OpenZeppelin'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TypeScript', 'Tailwind'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Web3 Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  {['Ethers.js', 'Wagmi', 'RainbowKit', 'The Graph'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center p-12 bg-card border border-border rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build <span className="text-gradient">Your dApp?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's create a secure, scalable Web3 application that your users will love.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 cyber-glow-hover font-medium"
            >
              Discuss Your Project
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
