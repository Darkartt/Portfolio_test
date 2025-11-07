'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { FORMSPREE_FORM_ID } from '@/lib/constants'

const contactSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="contact" ref={ref} className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Get a <span className="text-gradient">Quote</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Interested in securing your Web3 project? Let's discuss your security needs.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <motion.div variants={itemVariants} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Let's Secure Your Project</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Fill out the form with details about your project, and I'll get back to you
                    with a custom quote within 24 hours.
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-sm text-muted-foreground">
                        Response within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Send className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Telegram</h4>
                      <a
                        href="https://t.me/Darkartt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        @Darkartt
                      </a>
                    </div>
                  </div>
                </div>

                {/* Info Box */}
                <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="text-primary" size={20} />
                    What to Expect
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Detailed security analysis scope</li>
                    <li>• Transparent pricing breakdown</li>
                    <li>• Estimated timeline</li>
                    <li>• Comprehensive audit report</li>
                    <li>• Post-audit consultation</li>
                  </ul>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div variants={itemVariants}>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6 p-8 bg-card border border-border rounded-xl"
                >
                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Project Details *
                    </label>
                    <textarea
                      {...register('message')}
                      id="message"
                      rows={6}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="Tell me about your project, tech stack, and what you need help with..."
                    />
                    {errors.message && (
                      <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 cyber-glow-hover font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary-foreground/20 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-500 flex items-center gap-2"
                    >
                      <CheckCircle2 size={20} />
                      <span className="text-sm">
                        Message sent successfully! I'll get back to you soon.
                      </span>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 flex items-center gap-2"
                    >
                      <AlertCircle size={20} />
                      <span className="text-sm">
                        Failed to send message. Please try again or contact me directly.
                      </span>
                    </motion.div>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
