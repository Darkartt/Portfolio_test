'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skillCategories } from '@/lib/data/skills'

export function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" ref={ref} className="section-padding">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={categoryVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive expertise across blockchain security, development, and research
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.category}
                variants={categoryVariants}
                className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">{category.category}</h3>
                  <div className="h-1 w-12 bg-gradient-to-r from-primary to-secondary rounded-full" />
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        inView
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: -20 }
                      }
                      transition={{
                        delay: 0.5 + catIndex * 0.1 + skillIndex * 0.05,
                      }}
                      className="space-y-2"
                    >
                      {/* Skill Name and Level */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            duration: 1,
                            delay: 0.5 + catIndex * 0.1 + skillIndex * 0.05,
                            ease: 'easeOut',
                          }}
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full relative overflow-hidden"
                        >
                          {/* Shimmer Effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            animate={{
                              x: ['-100%', '100%'],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              repeatDelay: 3,
                              ease: 'linear',
                            }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Stats */}
          <motion.div
            variants={categoryVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { label: 'Languages', value: '6+' },
              { label: 'Blockchain Platforms', value: '7+' },
              { label: 'Security Tools', value: '10+' },
              { label: 'Years Coding', value: '5+' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
              >
                <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
