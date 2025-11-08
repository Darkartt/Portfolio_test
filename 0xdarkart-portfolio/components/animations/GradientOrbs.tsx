'use client'

import { motion } from 'framer-motion'

export function GradientOrbs() {
  const orbs = [
    {
      id: 1,
      size: 400,
      color: 'rgba(0, 255, 127, 0.1)',
      blur: 100,
      initialX: '10%',
      initialY: '20%',
    },
    {
      id: 2,
      size: 350,
      color: 'rgba(0, 200, 255, 0.08)',
      blur: 90,
      initialX: '80%',
      initialY: '60%',
    },
    {
      id: 3,
      size: 300,
      color: 'rgba(138, 43, 226, 0.06)',
      blur: 80,
      initialX: '50%',
      initialY: '80%',
    },
  ]

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: `blur(${orb.blur}px)`,
            left: orb.initialX,
            top: orb.initialY,
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 50, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 25 + orb.id * 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
