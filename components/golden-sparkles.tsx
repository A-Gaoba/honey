"use client"

import { useState, useEffect } from "react"

interface Sparkle {
  id: number
  left: number
  top: number
  delay: number
  duration: number
  tx: number
  ty: number
}

export function GoldenSparkles() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])

  useEffect(() => {
    // Generate sparkles only on client side to avoid hydration mismatch
    const generatedSparkles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
      tx: (Math.random() - 0.5) * 60,
      ty: (Math.random() - 0.5) * 60,
    }))
    setSparkles(generatedSparkles)
  }, [])

  // Don't render anything until client-side hydration is complete
  if (sparkles.length === 0) {
    return null
  }

  return (
    <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute golden-sparkle"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            animationDelay: `${sparkle.delay}s`,
            animationDuration: `${sparkle.duration}s`,
            "--tx": `${sparkle.tx}px`,
            "--ty": `${sparkle.ty}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  )
}

