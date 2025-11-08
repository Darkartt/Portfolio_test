import type { Metadata } from 'next'
import Link from 'next/link'
import { HeroSection } from '@/components/sections/HeroSection'
import { featuredProjects } from '@/lib/data/projects'
import { ArrowRight, Shield, Code, Search } from 'lucide-react'

export const metadata: Metadata = {
  title: '0xDarkArt - Web3 Security Research & Auditing',
  description:
    'Expert blockchain security researcher specializing in smart contract auditing, DeFi protocol security, and vulnerability research.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Featured Projects Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Work</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Recent security audits and research that have helped protect millions in user funds
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
            {featuredProjects.slice(0, 3).map((project) => (
              <Link
                key={project.id}
                href={`/portfolio/${project.id}`}
                className="group p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
              >
                <div className="mb-4">
                  <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-full capitalize">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4">{project.shortDescription}</p>

                {project.findings && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.findings.high !== undefined && (
                      <span className="px-3 py-1 text-xs font-medium rounded-full border bg-red-500/20 text-red-500 border-red-500/30">
                        {project.findings.high} High
                      </span>
                    )}
                    {project.findings.medium !== undefined && (
                      <span className="px-3 py-1 text-xs font-medium rounded-full border bg-yellow-500/20 text-yellow-500 border-yellow-500/30">
                        {project.findings.medium} Medium
                      </span>
                    )}
                  </div>
                )}

                <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                  View Case Study <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 cyber-glow-hover font-medium"
            >
              View All Projects
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              How I Can <span className="text-gradient">Help</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive security services for Web3 projects at every stage
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Shield className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Smart Contract Audits</h3>
              <p className="text-muted-foreground mb-6">
                Comprehensive security reviews to protect your protocol and users
              </p>
              <Link
                href="/services/audits"
                className="text-primary hover:underline inline-flex items-center gap-2"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </div>

            <div className="p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Search className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Security Research</h3>
              <p className="text-muted-foreground mb-6">
                Cutting-edge research on emerging threats and attack vectors
              </p>
              <Link
                href="/services"
                className="text-primary hover:underline inline-flex items-center gap-2"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </div>

            <div className="p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Code className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Full-Stack Development</h3>
              <p className="text-muted-foreground mb-6">
                Secure Web3 application development from smart contracts to frontend
              </p>
              <Link
                href="/services/development"
                className="text-primary hover:underline inline-flex items-center gap-2"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center p-12 bg-card border border-border rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Secure Your <span className="text-gradient">Web3 Project?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your security needs and create a custom audit plan that protects your
              protocol and users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 cyber-glow-hover font-medium inline-flex items-center justify-center gap-2"
              >
                Get a Quote
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/cv"
                className="px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-medium"
              >
                View CV
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
