'use client'

import { useEffect, useRef } from 'react'

interface Drop {
  x: number
  y: number
  speed: number
  length: number
  chars: string[]
}

export function CodeRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    // Characters to use - mix of hex, code symbols, and crypto-related
    const chars = '0123456789ABCDEFabcdef</>{}[]();.,:!@#$%^&*'
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const drops: Drop[] = []

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      if (Math.random() > 0.95) {
        // Sparse drops
        drops.push({
          x: i * fontSize,
          y: Math.random() * -canvas.height,
          speed: Math.random() * 2 + 1,
          length: Math.floor(Math.random() * 15) + 5,
          chars: Array.from({ length: 20 }, () => chars[Math.floor(Math.random() * chars.length)]),
        })
      }
    }

    const animate = () => {
      // Fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = `${fontSize}px monospace`

      drops.forEach((drop, index) => {
        // Draw characters in the drop
        for (let i = 0; i < drop.length; i++) {
          const charIndex = Math.floor((drop.y / fontSize + i) % drop.chars.length)
          const char = drop.chars[charIndex]
          const y = drop.y + i * fontSize

          // Gradient effect - brighter at the head
          const opacity = i === 0 ? 0.8 : (drop.length - i) / drop.length * 0.4
          ctx.fillStyle = `rgba(0, 255, 127, ${opacity})`
          ctx.fillText(char, drop.x, y)
        }

        // Update position
        drop.y += drop.speed

        // Reset drop when it goes off screen
        if (drop.y > canvas.height + drop.length * fontSize) {
          drops[index] = {
            x: Math.floor(Math.random() * columns) * fontSize,
            y: -drop.length * fontSize,
            speed: Math.random() * 2 + 1,
            length: Math.floor(Math.random() * 15) + 5,
            chars: Array.from({ length: 20 }, () => chars[Math.floor(Math.random() * chars.length)]),
          }
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.15 }}
    />
  )
}
