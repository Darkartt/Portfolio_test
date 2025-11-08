'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export function HexagonField() {
  const [hexagons, setHexagons] = useState<Array<{
    id: number
    x: number
    y: number
    size: number
    duration: number
    delay: number
  }>>([])

  // Generate hexagon positions only on client side to avoid hydration mismatch
  useEffect(() => {
    const generatedHexagons = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 60 + 40,
      duration: Math.random() * 20 + 20,
      delay: Math.random() * 5,
    }))
    setHexagons(generatedHexagons)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {hexagons.map((hex) => (
        <motion.div
          key={hex.id}
          className="absolute"
          style={{
            left: `${hex.x}%`,
            top: `${hex.y}%`,
            width: hex.size,
            height: hex.size,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: hex.duration,
            repeat: Infinity,
            delay: hex.delay,
            ease: 'linear',
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50 0, 93.3 25, 93.3 75, 50 100, 6.7 75, 6.7 25"
              fill="none"
              stroke="rgba(0, 255, 127, 0.3)"
              strokeWidth="1"
            />
            <polygon
              points="50 10, 83.3 30, 83.3 70, 50 90, 16.7 70, 16.7 30"
              fill="none"
              stroke="rgba(0, 255, 127, 0.15)"
              strokeWidth="0.5"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}
