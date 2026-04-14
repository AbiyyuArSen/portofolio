"use client"

import { useEffect, useState } from "react"

type PointerPosition = {
  x: number
  y: number
}

export function InteractiveBackground() {
  const [pointerPosition, setPointerPosition] = useState<PointerPosition>({
    x: 0,
    y: 0,
  })
  const [isSpotVisible, setIsSpotVisible] = useState(false)

  useEffect(() => {
    let fadeTimeoutId: ReturnType<typeof window.setTimeout> | undefined

    const handlePointerDown = (event: PointerEvent) => {
      setPointerPosition({ x: event.clientX, y: event.clientY })
      setIsSpotVisible(true)

      if (fadeTimeoutId) {
        window.clearTimeout(fadeTimeoutId)
      }

      fadeTimeoutId = window.setTimeout(() => {
        setIsSpotVisible(false)
      }, 1200)
    }

    window.addEventListener("pointerdown", handlePointerDown)

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown)
      if (fadeTimeoutId) {
        window.clearTimeout(fadeTimeoutId)
      }
    }
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(100,200,180,0.06),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(100,200,180,0.04),_transparent_30%),linear-gradient(135deg,_rgba(255,255,255,0.025),_transparent_50%)]" />
      <div className="absolute left-[-6rem] top-16 h-72 w-72 rounded-full bg-primary/6 blur-3xl" />
      <div className="absolute bottom-0 right-[-5rem] h-80 w-80 rounded-full bg-accent/6 blur-3xl" />
      <div
        className="absolute inset-0 transition-opacity duration-500 ease-out"
        style={{
          backgroundImage: `radial-gradient(circle 220px at ${pointerPosition.x}px ${pointerPosition.y}px, rgba(100,200,180,0.12), transparent 72%)`,
          opacity: isSpotVisible ? 1 : 0,
        }}
      />
      {isSpotVisible && (
        <div
          className="absolute h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/15 bg-primary/8 shadow-[0_0_50px_rgba(100,200,180,0.14)] animate-[pulse_1.6s_ease-out_1]"
          style={{ left: pointerPosition.x, top: pointerPosition.y }}
        />
      )}
    </div>
  )
}