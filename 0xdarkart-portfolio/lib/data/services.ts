import { Service } from '@/lib/types'

export const services: Service[] = [
  {
    id: 'smart-contract-audits',
    title: 'Smart Contract Audits',
    icon: 'shield',
    description:
      'Comprehensive security reviews of smart contracts to identify vulnerabilities, logic errors, and potential exploits before deployment. Using industry-standard tools and manual review techniques.',
    features: [
      'Line-by-line code review',
      'Automated vulnerability scanning',
      'Gas optimization analysis',
      'Business logic verification',
      'Attack vector identification',
      'Detailed audit report with recommendations',
      'Post-audit consultation',
      'Revalidation of fixes',
    ],
    pricing: 'Custom quote based on code complexity',
    deliverables: [
      'Comprehensive audit report',
      'Vulnerability severity classifications',
      'Recommended fixes and improvements',
      'Gas optimization suggestions',
      'Final security assessment',
    ],
  },
  {
    id: 'security-research',
    title: 'Security Research',
    icon: 'search',
    description:
      'In-depth research on emerging attack vectors, protocol vulnerabilities, and security patterns in the Web3 ecosystem. Stay ahead of potential threats with cutting-edge security research.',
    features: [
      'Attack pattern analysis',
      'Protocol security assessment',
      'MEV vulnerability research',
      'Cross-chain security analysis',
      'Exploit proof-of-concept development',
      'Security advisory creation',
      'Community education',
    ],
    pricing: 'Project-based or retainer',
    deliverables: [
      'Research reports',
      'Security advisories',
      'Proof-of-concept demonstrations',
      'Mitigation strategies',
      'Best practice documentation',
    ],
  },
  {
    id: 'code-reviews',
    title: 'Code Reviews',
    icon: 'code',
    description:
      'Detailed analysis of blockchain application code to ensure security best practices, code quality, and architectural soundness. Beyond smart contracts - full-stack Web3 security.',
    features: [
      'Smart contract review',
      'Frontend security assessment',
      'Backend API security review',
      'Wallet integration audit',
      'Key management evaluation',
      'Architecture security analysis',
      'Code quality assessment',
    ],
    pricing: 'Hourly or project-based',
    deliverables: [
      'Code review report',
      'Security recommendations',
      'Architecture improvements',
      'Best practice guidance',
      'Implementation support',
    ],
  },
  {
    id: 'security-training',
    title: 'Security Training',
    icon: 'graduation-cap',
    description:
      'Customized training sessions for development teams on blockchain security principles, common vulnerabilities, and secure development practices. Build security into your development culture.',
    features: [
      'Secure coding workshops',
      'Vulnerability deep-dives',
      'Attack simulation exercises',
      'Security tooling training',
      'Code review best practices',
      'Incident response planning',
      'Custom curriculum development',
    ],
    pricing: 'Per session or team package',
    deliverables: [
      'Training materials',
      'Hands-on exercises',
      'Security checklists',
      'Best practice guides',
      'Ongoing support',
    ],
  },
]

export const getServiceById = (id: string): Service | undefined => {
  return services.find((service) => service.id === id)
}

export const serviceIcons: Record<string, string> = {
  shield: 'Shield',
  search: 'Search',
  code: 'Code',
  'graduation-cap': 'GraduationCap',
}
