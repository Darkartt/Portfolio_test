'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Shield, ArrowRight } from 'lucide-react'
import { TERMINAL_PROMPTS } from '@/lib/constants'

export function HeroSection() {
  const [terminalText, setTerminalText] = useState('')
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)

  // Hide scroll indicator when user starts scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollIndicator(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    let currentText = ''
    let charIndex = 0
    const currentPrompt = TERMINAL_PROMPTS[currentPromptIndex]

    const typeInterval = setInterval(() => {
      if (charIndex < currentPrompt.length) {
        currentText += currentPrompt[charIndex]
        setTerminalText(currentText)
        charIndex++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => {
          setCurrentPromptIndex((prev) => (prev + 1) % TERMINAL_PROMPTS.length)
        }, 3000)
      }
    }, 50)

    return () => clearInterval(typeInterval)
  }, [currentPromptIndex])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const handleScroll = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          {/* Main Content */}
          <div className="text-center space-y-6 mb-12">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-4">
              <Shield size={16} className="animate-pulse" />
              <span>Web3 Security Expert</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="text-gradient">Web3 Security</span>
              <br />
              <span className="text-foreground">Research & Auditing</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Protecting blockchain projects through expert security analysis and vulnerability
              detection. Specialized in smart contract auditing, DeFi protocols, and Web3 security
              research.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <button
                onClick={() => handleScroll('#portfolio')}
                className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 cyber-glow-hover font-medium flex items-center gap-2"
              >
                View My Work
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button
                onClick={() => handleScroll('#contact')}
                className="px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-medium"
              >
                Request a Quote
              </button>
            </motion.div>
          </div>

          {/* Terminal Component */}
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg overflow-hidden shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 text-center text-sm text-muted-foreground font-mono">
                  0xdarkart@security:~
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-6 font-mono text-sm md:text-base min-h-[120px]">
                <div className="flex items-start gap-2">
                  <span className="text-primary">$</span>
                  <div className="flex-1">
                    <span className="text-foreground">{terminalText}</span>
                    {showCursor && (
                      <span className="inline-block w-2 h-5 bg-primary ml-1 animate-terminal-blink" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
          >
            {[
              { label: 'Audits Completed', value: '10+' },
              { label: 'Vulnerabilities Found', value: '25+' },
              { label: 'Platforms', value: '5+' },
              { label: 'Years Experience', value: '3+' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-lg bg-card/30 border border-border hover:border-primary/50 transition-colors"
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

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
          </div>
        </motion.div>
      )}
    </section>
  )
}
