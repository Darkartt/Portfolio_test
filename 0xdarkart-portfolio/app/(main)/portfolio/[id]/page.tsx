import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ExternalLink, Github, Calendar } from 'lucide-react'
import { projects } from '@/lib/data/projects'

type Props = {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} - Portfolio - 0xDarkArt`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  return (
    <div className="pt-20 section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium capitalize">
                {project.category}
              </span>
              {project.featured && (
                <span className="px-4 py-2 bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 rounded-full text-sm font-medium">
                  Featured
                </span>
              )}
              <span className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium capitalize">
                {project.status}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">{project.title}</h1>

            <p className="text-xl text-muted-foreground mb-6">{project.description}</p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar size={16} className="text-primary" />
                <span className="text-sm">{project.date}</span>
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <ExternalLink size={16} />
                  <span className="text-sm">View Report</span>
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <Github size={16} />
                  <span className="text-sm">GitHub</span>
                </a>
              )}
            </div>
          </div>

          {/* Findings Summary */}
          {project.findings && (
            <div className="mb-12 p-8 bg-card border border-border rounded-xl">
              <h2 className="text-2xl font-bold mb-6">Security Findings</h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {project.findings.high !== undefined && (
                  <div className="text-center p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <div className="text-3xl font-bold text-red-500 mb-1">
                      {project.findings.high}
                    </div>
                    <div className="text-sm text-red-500">High Severity</div>
                  </div>
                )}

                {project.findings.medium !== undefined && (
                  <div className="text-center p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                    <div className="text-3xl font-bold text-yellow-500 mb-1">
                      {project.findings.medium}
                    </div>
                    <div className="text-sm text-yellow-500">Medium Severity</div>
                  </div>
                )}

                {project.findings.low !== undefined && project.findings.low > 0 && (
                  <div className="text-center p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <div className="text-3xl font-bold text-blue-500 mb-1">
                      {project.findings.low}
                    </div>
                    <div className="text-sm text-blue-500">Low Severity</div>
                  </div>
                )}

                {project.findings.gas !== undefined && project.findings.gas > 0 && (
                  <div className="text-center p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                    <div className="text-3xl font-bold text-purple-500 mb-1">
                      {project.findings.gas}
                    </div>
                    <div className="text-sm text-purple-500">Gas Optimizations</div>
                  </div>
                )}
              </div>

              <p className="text-muted-foreground">
                Total findings: {Object.values(project.findings).reduce((a, b) => (a || 0) + (b || 0), 0)}
              </p>
            </div>
          )}

          {/* Technologies Used */}
          <div className="mb-12 p-8 bg-card border border-border rounded-xl">
            <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Details */}
          {project.details && (
            <div className="mb-12 p-8 bg-card border border-border rounded-xl">
              <h2 className="text-2xl font-bold mb-6">Project Details</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {project.details}
                </p>
              </div>
            </div>
          )}

          {/* Outcome */}
          {project.outcome && (
            <div className="mb-12 p-8 bg-primary/5 border border-primary/20 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Outcome</h2>
              <p className="text-muted-foreground leading-relaxed">{project.outcome}</p>
            </div>
          )}

          {/* CTA */}
          <div className="text-center p-8 bg-muted/30 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Need a Security Audit?</h3>
            <p className="text-muted-foreground mb-6">
              Protect your protocol with a comprehensive security review.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-medium"
            >
              Request an Audit
              <ExternalLink size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
