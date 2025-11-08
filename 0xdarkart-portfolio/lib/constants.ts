// Site Configuration Constants
export const SITE_CONFIG = {
  name: '0xDarkArt',
  title: '0xDarkArt - Web3 Security Research & Auditing',
  description:
    'Expert blockchain security researcher specializing in smart contract auditing, DeFi protocol security, and vulnerability research. Protecting Web3 projects through comprehensive security analysis.',
  url: 'https://0xdarkart.xyz',
  ogImage: 'https://0xdarkart.xyz/og-image.png',
  links: {
    twitter: 'https://x.com/0x_Darkart',
    github: 'https://github.com/darkartt',
    linkedin: 'https://www.linkedin.com/in/velislav-tsvetanov-48432b2b4/',
    telegram: 'https://t.me/Darkartt',
    medium: '#',
  },
  author: {
    name: '0xDarkArt',
    email: 'contact@0xdarkart.xyz',
    role: 'Web3 Security Researcher',
  },
}

// Navigation Links
export const NAV_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
  { href: '/cv', label: 'CV' },
]

// Contact Form Configuration
export const FORMSPREE_FORM_ID = 'maneygad'

// Animation Configurations
export const ANIMATION_DURATION = {
  fast: 0.2,
  medium: 0.3,
  slow: 0.5,
}

export const ANIMATION_EASING = {
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1],
}

// Terminal Configuration
export const TERMINAL_PROMPTS = [
  '> Initializing security protocols...',
  '> Running vulnerability scans...',
  '> Analyzing smart contract bytecode...',
  '> Checking for common attack vectors...',
  '> Verifying access controls...',
  '> System ready. Welcome, 0x_darkart.',
]

// Expertise Areas
export const EXPERTISE_AREAS = [
  'Smart Contract Auditing & Vulnerability Research',
  'DeFi Protocol Security Assessment',
  'Cross-chain Bridge Security Analysis',
  'MEV & Flash Loan Attack Prevention',
  'Security Best Practices & Training',
]

// Service Categories
export const SERVICE_CATEGORIES = [
  { value: 'audit', label: 'Audits' },
  { value: 'research', label: 'Research' },
  { value: 'consulting', label: 'Consulting' },
  { value: 'training', label: 'Training' },
]

// Portfolio Filter Options
export const PORTFOLIO_FILTERS = [
  { value: 'all', label: 'All Projects' },
  { value: 'audit', label: 'Security Audits' },
  { value: 'research', label: 'Research' },
  { value: 'consulting', label: 'Consulting' },
]

// Tech Stack Icons
export const TECH_STACK = {
  blockchain: ['Ethereum', 'Solana', 'Polygon', 'Arbitrum', 'Base'],
  languages: ['Solidity', 'Rust', 'TypeScript', 'Python', 'Go'],
  tools: ['Foundry', 'Hardhat', 'Slither', 'Mythril', 'Echidna'],
  frameworks: ['Next.js', 'React', 'Node.js', 'Express', 'FastAPI'],
}
