// Type Definitions for 0xDarkArt Portfolio

// Project Types
export interface Project {
  id: string
  title: string
  category: 'audit' | 'research' | 'consulting' | 'development'
  description: string
  shortDescription: string
  findings?: {
    high?: number
    medium?: number
    low?: number
    gas?: number
    informational?: number
  }
  technologies: string[]
  date: string
  link?: string
  github?: string
  image?: string
  featured: boolean
  status: 'completed' | 'in-progress' | 'upcoming'
  outcome?: string
  details?: string
}

// Service Types
export interface Service {
  id: string
  title: string
  icon: string
  description: string
  features: string[]
  pricing?: string
  deliverables?: string[]
}

// Skill Types
export interface SkillCategory {
  category: string
  icon: string
  skills: Skill[]
}

export interface Skill {
  name: string
  level: number // 1-100
  icon?: string
}

// Testimonial Types
export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar?: string
  rating: number
  date: string
}

// Contact Form Types
export interface ContactFormData {
  name: string
  email: string
  subject?: string
  message: string
  projectType?: string
  budget?: string
}

// Navigation Types
export interface NavLink {
  href: string
  label: string
  external?: boolean
}

// Social Link Types
export interface SocialLink {
  platform: string
  url: string
  icon: string
}

// Audit Finding Types
export interface AuditFinding {
  severity: 'critical' | 'high' | 'medium' | 'low' | 'gas' | 'informational'
  title: string
  description: string
  recommendation: string
  status: 'fixed' | 'acknowledged' | 'open'
}

// Blog/Research Post Types
export interface ResearchPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage?: string
  publishedAt: string
  updatedAt?: string
  tags: string[]
  readTime: number
  featured: boolean
}

// SEO Types
export interface SEOMetadata {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
  canonicalUrl?: string
}

// Animation Types
export type AnimationVariant = 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale'

export interface AnimationConfig {
  variant: AnimationVariant
  duration?: number
  delay?: number
  once?: boolean
}
