'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Search, Code, GraduationCap, ArrowRight } from 'lucide-react'
import { services } from '@/lib/data/services'

const iconMap = {
  'shield': Shield,
  'search': Search,
  'code': Code,
  'graduation-cap': GraduationCap,
}

// Map service IDs to their detail pages
const getServiceLink = (serviceId: string): string => {
  const linkMap: Record<string, string> = {
    'smart-contract-audits': '/services/audits',
    'code-reviews': '/services/development',
    'security-research': '/contact',
    'security-training': '/contact',
  }
  return linkMap[serviceId] || '/contact'
}

export function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section id="services" ref={ref} className="section-padding">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Security <span className="text-gradient">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive security solutions for Web3 projects at every stage
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap]

              return (
                <motion.div
                  key={service.id}
                  variants={cardVariants}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="relative h-full p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 overflow-hidden">
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Content */}
                    <div className="relative z-10 space-y-4">
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {IconComponent && (
                          <IconComponent className="text-primary" size={28} />
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-gradient transition-colors">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-2 pt-4">
                        {service.features.slice(0, 4).map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* Learn More Button */}
                      <Link
                        href={getServiceLink(service.id)}
                        className="group/btn flex items-center gap-2 text-primary font-medium mt-6 hover:gap-3 transition-all"
                      >
                        Learn More
                        <ArrowRight
                          size={16}
                          className="group-hover/btn:translate-x-1 transition-transform"
                        />
                      </Link>
                    </div>

                    {/* Corner Decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </motion.div>
              )
            })}
          </div>

          {/* CTA */}
          <motion.div variants={cardVariants} className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Need a custom security solution? Let's discuss your project.
            </p>
            <Link
              href="/contact"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 cyber-glow-hover font-medium inline-flex items-center gap-2"
            >
              Get a Custom Quote
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
