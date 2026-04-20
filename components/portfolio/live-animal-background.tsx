"use client"

import { useEffect, useRef, useState } from "react"
import { WebGLHeroCanvas } from "@/components/portfolio/webgl-hero-canvas"

export function LiveAnimalBackground() {
  const [isReady, setIsReady] = useState(false)
  const [hasError, setHasError] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const timer = window.setTimeout(() => {
      if (!hasError && video.readyState >= 2) {
        setIsReady(true)
      }
    }, 1200)

    return () => {
      window.clearTimeout(timer)
    }
  }, [hasError])

  const markReady = () => {
    setIsReady(true)
  }

  return (
    <div className="pointer-events-none absolute inset-0">
      {hasError ? (
        <div className="absolute inset-0">
          <WebGLHeroCanvas />
        </div>
      ) : (
        <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${isReady ? "opacity-0" : "opacity-100"}`} />
      )}

      {!hasError ? (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover [transform:translateZ(0)] transition-opacity duration-700 ${isReady ? "opacity-64" : "opacity-0"}`}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={markReady}
          onCanPlay={markReady}
          onCanPlayThrough={markReady}
          onPlaying={markReady}
          onError={() => setHasError(true)}
          aria-hidden="true"
          src="/hero/ikan.mp4"
        />
      ) : null}
    </div>
  )
}
