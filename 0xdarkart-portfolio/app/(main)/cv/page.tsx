import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, Calendar, ExternalLink } from 'lucide-react'
import { skillCategories } from '@/lib/data/skills'
import { projects } from '@/lib/data/projects'

export const metadata: Metadata = {
  title: 'CV / Resume - 0xDarkArt',
  description:
    'Download my CV or view my complete professional experience, skills, and audit portfolio as a Web3 security researcher and full-stack developer.',
}

export default function CVPage() {
  return (
    <div className="pt-20 section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Curriculum <span className="text-gradient">Vitae</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Web3 Security Researcher & Full-Stack Developer
            </p>
          </div>

          {/* Summary */}
          <section className="mb-12 p-8 bg-card border border-border rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Professional Summary</h2>
            <p className="text-muted-foreground leading-relaxed">
              Experienced Web3 security researcher and full-stack developer specializing in smart contract auditing, DeFi protocol security, and decentralized application development. Proven track record of identifying critical vulnerabilities and building secure blockchain applications. Strong expertise in Solidity, security tooling, and modern Web3 development stack.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Professional Experience</h2>

            <div className="space-y-8">
              <div className="p-6 bg-card border border-border rounded-xl">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Independent Security Researcher</h3>
                    <p className="text-primary">Freelance</p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      2023 - Present
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Conducted {projects.filter(p => p.category === 'audit').length}+ security audits for DeFi protocols, NFT projects, and blockchain infrastructure</li>
                  <li>• Identified 25+ high and critical severity vulnerabilities preventing potential exploits</li>
                  <li>• Participated in audit competitions on Code4rena and CodeHawks platforms</li>
                  <li>• Published security research on emerging attack vectors and best practices</li>
                </ul>
              </div>

              <div className="p-6 bg-card border border-border rounded-xl">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Full-Stack Web3 Developer</h3>
                    <p className="text-primary">Freelance</p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      2022 - Present
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Developed secure smart contracts and decentralized applications</li>
                  <li>• Built modern frontends with React, Next.js, and Web3 integration</li>
                  <li>• Implemented gas-optimized contracts with comprehensive test coverage</li>
                  <li>• Created responsive, accessible UI/UX with Tailwind CSS</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Key Projects */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Key Audit Projects</h2>
            <div className="space-y-4">
              {projects.filter(p => p.featured).slice(0, 4).map((project) => (
                <Link
                  key={project.id}
                  href={`/portfolio/${project.id}`}
                  className="block p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <ExternalLink size={16} className="text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{project.shortDescription}</p>
                  {project.findings && (
                    <div className="flex gap-2">
                      {project.findings.high !== undefined && (
                        <span className="px-2 py-1 text-xs bg-red-500/20 text-red-500 rounded">
                          {project.findings.high} High
                        </span>
                      )}
                      {project.findings.medium !== undefined && (
                        <span className="px-2 py-1 text-xs bg-yellow-500/20 text-yellow-500 rounded">
                          {project.findings.medium} Medium
                        </span>
                      )}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {skillCategories.slice(0, 4).map((category) => (
                <div key={category.category} className="p-6 bg-card border border-border rounded-xl">
                  <h3 className="text-lg font-bold mb-4">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.slice(0, 5).map((skill) => (
                      <span
                        key={skill.name}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education & Certifications */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Education & Certifications</h2>
            <div className="space-y-4">
              <div className="p-6 bg-card border border-border rounded-xl">
                <h3 className="text-lg font-bold">Smart Contract Security</h3>
                <p className="text-muted-foreground">Self-taught through audit competitions, CTFs, and practical experience</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-xl">
                <h3 className="text-lg font-bold">Full-Stack Web Development</h3>
                <p className="text-muted-foreground">Comprehensive training in modern web technologies and blockchain development</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center p-8 bg-muted/30 rounded-xl">
            <p className="text-lg text-muted-foreground mb-6">
              Interested in working together? Let's discuss your security needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-medium"
            >
              Get in Touch
              <Mail size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
