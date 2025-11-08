'use client'

import { ParticleNetwork } from './ParticleNetwork'
import { AnimatedGrid } from './AnimatedGrid'
import { CodeRain } from './CodeRain'
import { HexagonField } from './HexagonField'
import { GradientOrbs } from './GradientOrbs'

type BackgroundVariant = 'full' | 'minimal' | 'cyber' | 'blockchain'

interface AnimatedBackgroundProps {
  variant?: BackgroundVariant
}

export function AnimatedBackground({ variant = 'full' }: AnimatedBackgroundProps) {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient orbs - always present for depth */}
      <GradientOrbs />

      {/* Variant-specific effects */}
      {(variant === 'full' || variant === 'cyber') && (
        <>
          <AnimatedGrid />
          <CodeRain />
        </>
      )}

      {(variant === 'full' || variant === 'blockchain') && (
        <>
          <ParticleNetwork />
          <HexagonField />
        </>
      )}

      {variant === 'minimal' && (
        <AnimatedGrid />
      )}

      {/* Vignette overlay for better content readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.4) 100%)',
        }}
      />
    </div>
  )
}
