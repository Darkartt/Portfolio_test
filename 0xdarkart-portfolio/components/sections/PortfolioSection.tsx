'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github } from 'lucide-react'
import { projects, projectsByCategory } from '@/lib/data/projects'
import { PORTFOLIO_FILTERS } from '@/lib/constants'
import type { Project } from '@/lib/types'

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects)

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
    setFilteredProjects(projectsByCategory(filter))
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
      case 'critical':
        return 'bg-red-500/20 text-red-500 border-red-500/30'
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30'
      case 'low':
        return 'bg-blue-500/20 text-blue-500 border-blue-500/30'
      case 'gas':
        return 'bg-purple-500/20 text-purple-500 border-purple-500/30'
      default:
        return 'bg-muted text-muted-foreground border-border'
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.2 },
    },
  }

  return (
    <section id="portfolio" ref={ref} className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              <span className="text-gradient">Portfolio</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Security audits, research, and consulting work for leading Web3 projects
            </motion.p>
          </div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {PORTFOLIO_FILTERS.map((filter) => (
              <button
                key={filter.value}
                onClick={() => handleFilterChange(filter.value)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter.value
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                    : 'bg-card text-muted-foreground hover:bg-card/80 border border-border hover:border-primary/50'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="group relative"
                >
                  {/* Card */}
                  <div className="h-full p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 flex flex-col">
                    {/* Category Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-full capitalize">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="px-3 py-1 text-xs font-medium bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4 flex-grow">
                      {project.shortDescription}
                    </p>

                    {/* Findings */}
                    {project.findings && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.findings.high !== undefined && (
                          <span
                            className={`px-3 py-1 text-xs font-medium rounded-full border ${getSeverityColor('high')}`}
                          >
                            {project.findings.high} High
                          </span>
                        )}
                        {project.findings.medium !== undefined && (
                          <span
                            className={`px-3 py-1 text-xs font-medium rounded-full border ${getSeverityColor('medium')}`}
                          >
                            {project.findings.medium} Medium
                          </span>
                        )}
                        {project.findings.low !== undefined && project.findings.low > 0 && (
                          <span
                            className={`px-3 py-1 text-xs font-medium rounded-full border ${getSeverityColor('low')}`}
                          >
                            {project.findings.low} Low
                          </span>
                        )}
                        {project.findings.gas !== undefined && project.findings.gas > 0 && (
                          <span
                            className={`px-3 py-1 text-xs font-medium rounded-full border ${getSeverityColor('gas')}`}
                          >
                            {project.findings.gas} Gas
                          </span>
                        )}
                      </div>
                    )}

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 mt-auto pt-4 border-t border-border">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-primary hover:underline"
                        >
                          <ExternalLink size={16} />
                          View Report
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                        >
                          <Github size={16} />
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300 -z-10" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-muted-foreground text-lg">No projects found in this category.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
