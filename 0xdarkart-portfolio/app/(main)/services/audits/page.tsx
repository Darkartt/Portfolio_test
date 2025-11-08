import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Smart Contract Audits - 0xDarkArt',
  description:
    'Professional smart contract security audits for DeFi protocols, NFTs, and blockchain infrastructure. Comprehensive vulnerability assessment and detailed reporting.',
}

export default function AuditsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-6">
              <Shield size={16} className="animate-pulse" />
              <span>Professional Security Audits</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Smart Contract <span className="text-gradient">Security Audits</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Protect your protocol and users with comprehensive security reviews. I identify
              vulnerabilities before they can be exploited, ensuring your smart contracts are
              production-ready.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 cyber-glow-hover font-medium"
            >
              Request an Audit
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What's <span className="text-gradient">Included</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Comprehensive Code Review',
                  description:
                    'Line-by-line analysis of your smart contracts to identify security vulnerabilities, logic errors, and potential exploits.',
                },
                {
                  title: 'Automated Scanning',
                  description:
                    'Industry-standard tools (Slither, Mythril, Echidna) to detect common vulnerabilities and edge cases.',
                },
                {
                  title: 'Manual Testing',
                  description:
                    'Expert manual review focusing on business logic, access control, and complex attack vectors.',
                },
                {
                  title: 'Gas Optimization',
                  description:
                    'Identify opportunities to reduce gas costs and improve contract efficiency.',
                },
                {
                  title: 'Detailed Report',
                  description:
                    'Comprehensive audit report with severity classifications, recommendations, and remediation guidance.',
                },
                {
                  title: 'Post-Audit Support',
                  description:
                    'Revalidation of fixes and consultation to ensure all issues are properly resolved.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Audit Process */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              The <span className="text-gradient">Audit Process</span>
            </h2>

            <div className="space-y-8">
              {[
                {
                  step: '1',
                  title: 'Scoping & Planning',
                  description:
                    'We discuss your project, define the audit scope, and establish timeline and deliverables.',
                },
                {
                  step: '2',
                  title: 'Initial Review',
                  description:
                    'Automated scanning and preliminary manual review to identify obvious issues and understand architecture.',
                },
                {
                  step: '3',
                  title: 'Deep Dive Analysis',
                  description:
                    'Comprehensive manual review focusing on business logic, attack vectors, and edge cases.',
                },
                {
                  step: '4',
                  title: 'Report Delivery',
                  description:
                    'Detailed audit report with findings, severity classifications, and remediation recommendations.',
                },
                {
                  step: '5',
                  title: 'Remediation Support',
                  description:
                    'Guidance on fixing identified issues and revalidation of fixes to ensure proper resolution.',
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Custom <span className="text-gradient">Pricing</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Audit pricing depends on code complexity, scope, and timeline. Get a free quote
              tailored to your project needs.
            </p>

            <div className="p-8 bg-card border border-border rounded-2xl">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-3xl font-bold text-gradient mb-2">$3k+</div>
                  <div className="text-sm text-muted-foreground">Small Projects</div>
                  <div className="text-xs text-muted-foreground mt-1">Up to 500 SLOC</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient mb-2">$8k+</div>
                  <div className="text-sm text-muted-foreground">Medium Projects</div>
                  <div className="text-xs text-muted-foreground mt-1">500-1500 SLOC</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient mb-2">$15k+</div>
                  <div className="text-sm text-muted-foreground">Large Projects</div>
                  <div className="text-xs text-muted-foreground mt-1">1500+ SLOC</div>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 cyber-glow-hover font-medium"
              >
                Get a Custom Quote
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center p-12 bg-card border border-border rounded-2xl">
            <AlertTriangle className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Don't Launch <span className="text-gradient">Without an Audit</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Security vulnerabilities can cost millions. Protect your protocol and users with a
              professional security audit before deployment.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 cyber-glow-hover font-medium"
            >
              Schedule an Audit
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
