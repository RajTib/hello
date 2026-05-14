import { useState, useEffect } from 'react'
import type { ParticleTrigger } from '../app/App'

interface Particle {
  id: number
  emoji: string
  left: number
  bottom: number
  delay: number
  duration: number
}

const EMOJIS = ['💕', '🌸', '✨', '💗', '🌷', '💖', '🫶']

interface Props {
  trigger: ParticleTrigger
}

export default function FloatingHearts({ trigger }: Props) {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    if (!trigger) return
    const isBig = trigger.includes('big')
    const count = isBig ? 22 : 8

    const newOnes: Particle[] = Array.from({ length: count }).map((_, i) => ({
      id: Date.now() + i,
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
      left: Math.random() * 85 + 5,
      bottom: 10 + Math.random() * 20,
      delay: i * 110,
      duration: 2200 + Math.random() * 1000,
    }))

    setParticles((p) => [...p, ...newOnes])

    const timeout = setTimeout(() => {
      setParticles((p) => p.filter((x) => !newOnes.find((n) => n.id === x.id)))
    }, 4500)

    return () => clearTimeout(timeout)
  }, [trigger])

  return (
    <>
      {particles.map((p) => (
        <div
          key={p.id}
          className="fixed pointer-events-none text-[22px] animate-heart-float z-50"
          style={{
            left: `${p.left}%`,
            bottom: `${p.bottom}%`,
            animationDelay: `${p.delay}ms`,
            animationDuration: `${p.duration}ms`,
          }}
        >
          {p.emoji}
        </div>
      ))}
    </>
  )
}
