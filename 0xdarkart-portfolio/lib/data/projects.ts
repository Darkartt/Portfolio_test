import { Project } from '@/lib/types'

export const projects: Project[] = [
  {
    id: 'pear-protocol',
    title: 'Pear Protocol Security Audit',
    category: 'audit',
    description:
      'Comprehensive security audit of Pear Protocol smart contracts. Identified critical vulnerabilities in the lending mechanism and access control patterns.',
    shortDescription: 'Team security audit of DeFi lending protocol',
    findings: {
      high: 2,
      medium: 5,
      low: 2,
    },
    technologies: ['Solidity', 'Foundry', 'Hardhat'],
    date: '2024-01',
    link: 'https://github.com/Darkartt/Audit_Reports/blob/main/PearLabs-V1-Security-Review.pdf',
    featured: true,
    status: 'completed',
    outcome:
      'All critical and high-severity findings were addressed. The protocol successfully launched with enhanced security.',
    details:
      'Conducted thorough code review of lending mechanics, flash loan protection, and oracle integration. Discovered critical reentrancy vulnerability and access control issues.',
  },
  {
    id: 'ai-arena',
    title: 'AI Arena - Code4rena Competition',
    category: 'audit',
    description:
      'Competitive security audit for AI Arena NFT gaming platform. Focused on game mechanics, NFT minting, and reward distribution.',
    shortDescription: 'Public audit competition for AI-powered gaming platform',
    findings: {
      high: 2,
      medium: 1,
    },
    technologies: ['Solidity', 'ERC721', 'Chainlink VRF'],
    date: '2024-02',
    link: 'https://code4rena.com/@Velislav4o',
    featured: true,
    status: 'completed',
    outcome: 'Ranked among top auditors. All findings were validated and fixed by the team.',
    details:
      'Identified vulnerabilities in the random number generation for battle outcomes and potential exploits in the reward claiming mechanism.',
  },
  {
    id: 'foundry-defi-stablecoin',
    title: 'Foundry DeFi Stablecoin',
    category: 'audit',
    description:
      'Security review of an algorithmic stablecoin protocol built with Foundry. Analyzed collateralization mechanisms and liquidation logic.',
    shortDescription: 'CodeHawks audit competition for algorithmic stablecoin',
    findings: {
      high: 2,
      medium: 3,
    },
    technologies: ['Solidity', 'Foundry', 'Chainlink Price Feeds'],
    date: '2023-11',
    link: 'https://github.com/Darkartt/Audit_Reports/blob/main/Foundry-DeFi-Stablecoin-CodeHawks-Audit-Contest.md',
    github: 'https://github.com/Darkartt/Audit_Reports',
    featured: true,
    status: 'completed',
    outcome: 'Discovered critical issues in the liquidation mechanism that could lead to insolvency.',
    details:
      'Deep analysis of over-collateralization logic, price oracle manipulation risks, and edge cases in the liquidation process.',
  },
  {
    id: 'escrow-contract',
    title: 'Escrow Contract Security Review',
    category: 'audit',
    description:
      'Security assessment of a decentralized escrow contract for peer-to-peer transactions with dispute resolution.',
    shortDescription: 'CodeHawks audit for decentralized escrow system',
    findings: {
      high: 1,
      medium: 1,
      low: 0,
      gas: 1,
    },
    technologies: ['Solidity', 'OpenZeppelin', 'Hardhat'],
    date: '2023-10',
    link: 'https://github.com/Darkartt/Audit_Reports/blob/main/BLACK%20PANDA%20REACH-CodeHawks-Escrow-Contract---Competition-Details.md',
    github: 'https://github.com/Darkartt/Audit_Reports',
    featured: false,
    status: 'completed',
    outcome: 'High-severity finding prevented potential fund loss. Gas optimizations saved ~15% costs.',
    details:
      'Reviewed dispute resolution mechanism, fund locking logic, and multi-signature approval patterns.',
  },
  {
    id: 'flash-loan-research',
    title: 'Flash Loan Attack Vector Research',
    category: 'research',
    description:
      'In-depth research on flash loan attack patterns in DeFi protocols. Analyzed historical attacks and developed mitigation strategies.',
    shortDescription: 'Research on flash loan vulnerabilities in DeFi',
    technologies: ['Solidity', 'Web3.js', 'Python', 'The Graph'],
    date: '2023-09',
    featured: false,
    status: 'completed',
    outcome:
      'Published comprehensive research document detailing 10+ attack patterns and prevention methods.',
    details:
      'Studied major flash loan attacks including Cream Finance, Beanstalk, and Euler Finance exploits. Created proof-of-concept demonstrations.',
  },
]

export const featuredProjects = projects.filter((project) => project.featured)

export const projectsByCategory = (category: string) => {
  if (category === 'all') return projects
  return projects.filter((project) => project.category === category)
}
