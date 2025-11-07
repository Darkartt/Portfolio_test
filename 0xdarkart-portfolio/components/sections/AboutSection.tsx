'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Github, Linkedin, Twitter, Send, CheckCircle2 } from 'lucide-react'
import { SITE_CONFIG, EXPERTISE_AREAS } from '@/lib/constants'

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const socialLinks = [
    { icon: Twitter, href: SITE_CONFIG.links.twitter, label: 'Twitter' },
    { icon: Github, href: SITE_CONFIG.links.github, label: 'GitHub' },
    { icon: Linkedin, href: SITE_CONFIG.links.linkedin, label: 'LinkedIn' },
    { icon: Send, href: SITE_CONFIG.links.telegram, label: 'Telegram' },
  ]

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="about" ref={ref} className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Web3 security researcher with a passion for making blockchain safer
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Image Side */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Decorative Elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl" />

                {/* Image Container */}
                <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-primary/30 bg-card">
                  <Image
                    src="/images/profile-placeholder.jpg"
                    alt="0xDarkArt Profile"
                    fill
                    className="object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-card border-2 border-primary rounded-xl p-4 shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-semibold">Available for Audits</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gradient">
                  Web3 Security Researcher
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a passionate web3 security researcher and auditor with a focus on smart
                    contract vulnerabilities and DeFi protocol security. My mission is to
                    strengthen the blockchain ecosystem by identifying and mitigating security
                    risks before they can be exploited.
                  </p>
                  <p>
                    With years of experience in both traditional cybersecurity and blockchain
                    technology, I've helped numerous projects secure their code and protect user
                    funds. I regularly share my findings and research to educate the community
                    about emerging threats and best practices.
                  </p>
                </div>
              </div>

              {/* Expertise List */}
              <div>
                <h4 className="text-xl font-semibold mb-4">My Expertise</h4>
                <ul className="space-y-3">
                  {EXPERTISE_AREAS.map((area, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        className="text-primary flex-shrink-0 mt-0.5"
                        size={20}
                      />
                      <span className="text-muted-foreground">{area}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-card border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <social.icon
                        size={20}
                        className="text-muted-foreground group-hover:text-primary transition-colors"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
