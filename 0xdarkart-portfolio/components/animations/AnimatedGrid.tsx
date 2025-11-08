'use client'

import { useEffect, useRef } from 'react'

export function AnimatedGrid() {
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

    const gridSize = 50
    let offset = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Vertical lines
      for (let x = -offset; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.strokeStyle = 'rgba(0, 255, 127, 0.05)'
        ctx.lineWidth = 1
        ctx.stroke()
      }

      // Horizontal lines
      for (let y = -offset; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.strokeStyle = 'rgba(0, 255, 127, 0.05)'
        ctx.lineWidth = 1
        ctx.stroke()
      }

      // Animated pulsing lines
      const time = Date.now() / 1000
      const pulseX = Math.floor((Math.sin(time) * 0.5 + 0.5) * (canvas.width / gridSize)) * gridSize
      const pulseY = Math.floor((Math.cos(time * 0.7) * 0.5 + 0.5) * (canvas.height / gridSize)) * gridSize

      // Vertical pulse
      ctx.beginPath()
      ctx.moveTo(pulseX, 0)
      ctx.lineTo(pulseX, canvas.height)
      ctx.strokeStyle = 'rgba(0, 255, 127, 0.2)'
      ctx.lineWidth = 2
      ctx.stroke()

      // Horizontal pulse
      ctx.beginPath()
      ctx.moveTo(0, pulseY)
      ctx.lineTo(canvas.width, pulseY)
      ctx.strokeStyle = 'rgba(0, 255, 127, 0.2)'
      ctx.lineWidth = 2
      ctx.stroke()

      // Slow scroll effect
      offset += 0.1
      if (offset >= gridSize) offset = 0

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
      style={{ opacity: 0.6 }}
    />
  )
}
