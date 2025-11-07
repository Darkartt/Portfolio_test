import { SkillCategory } from '@/lib/types'

export const skillCategories: SkillCategory[] = [
  {
    category: 'Smart Contract Security',
    icon: 'shield-check',
    skills: [
      { name: 'Solidity Auditing', level: 95 },
      { name: 'Rust Smart Contracts', level: 85 },
      { name: 'Vulnerability Research', level: 90 },
      { name: 'Foundry', level: 90 },
      { name: 'Hardhat', level: 85 },
      { name: 'Slither', level: 88 },
      { name: 'Mythril', level: 82 },
      { name: 'Echidna', level: 80 },
    ],
  },
  {
    category: 'Blockchain Platforms',
    icon: 'blocks',
    skills: [
      { name: 'Ethereum', level: 95 },
      { name: 'Solana', level: 80 },
      { name: 'Polygon', level: 90 },
      { name: 'Arbitrum', level: 88 },
      { name: 'Optimism', level: 85 },
      { name: 'Base', level: 87 },
      { name: 'Avalanche', level: 75 },
    ],
  },
  {
    category: 'Programming Languages',
    icon: 'code',
    skills: [
      { name: 'Solidity', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'JavaScript', level: 92 },
      { name: 'Python', level: 85 },
      { name: 'Rust', level: 80 },
      { name: 'Go', level: 75 },
    ],
  },
  {
    category: 'Frontend Development',
    icon: 'layout',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 88 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Web3.js', level: 88 },
      { name: 'Ethers.js', level: 90 },
      { name: 'Wagmi', level: 85 },
    ],
  },
  {
    category: 'Backend & Infrastructure',
    icon: 'server',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Express', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 78 },
      { name: 'Redis', level: 75 },
      { name: 'Docker', level: 82 },
      { name: 'AWS', level: 76 },
    ],
  },
  {
    category: 'Security Tools',
    icon: 'wrench',
    skills: [
      { name: 'Slither', level: 90 },
      { name: 'Mythril', level: 85 },
      { name: 'Echidna', level: 82 },
      { name: 'Manticore', level: 78 },
      { name: 'Foundry Fuzzing', level: 88 },
      { name: 'Tenderly', level: 85 },
      { name: 'Immunefi', level: 80 },
    ],
  },
]

export const getSkillsByCategory = (category: string): SkillCategory | undefined => {
  return skillCategories.find((cat) => cat.category === category)
}

export const getAllSkills = () => {
  return skillCategories.flatMap((category) => category.skills)
}

export const topSkills = [
  'Solidity Auditing',
  'Smart Contract Security',
  'DeFi Protocols',
  'Ethereum',
  'Foundry',
  'React',
  'Next.js',
  'TypeScript',
  'Web3.js',
  'Security Research',
]
