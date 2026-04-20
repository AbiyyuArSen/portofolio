"use client"

import { useEffect, useRef } from "react"

type Bird = {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  wingPhase: number
  wingSpeed: number
}

const BIRD_COUNT = 34

const random = (min: number, max: number) => Math.random() * (max - min) + min
const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value))

export function WebGLHeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = 0
    let height = 0
    let rafId = 0
    let time = 0
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const pointer = {
      x: 0,
      y: 0,
      tx: 0,
      ty: 0,
    }

    const birds: Bird[] = []

    const drawBird = (bird: Bird, index: number) => {
      const heading = Math.atan2(bird.vy, bird.vx)
      const flap = 0.65 + (Math.sin(time * 10 * bird.wingSpeed + bird.wingPhase) + 1) * 0.32
      const wingSpan = bird.size * flap
      const wingDepth = bird.size * 0.4
      const body = bird.size * 0.35

      ctx.save()
      ctx.translate(bird.x, bird.y)
      ctx.rotate(heading)

      ctx.strokeStyle = `rgba(238, 245, 255, ${0.28 + (index % 3) * 0.04})`
      ctx.lineWidth = 1
      ctx.lineCap = "round"

      ctx.beginPath()
      ctx.moveTo(-body, 0)
      ctx.lineTo(-wingSpan, -wingDepth)
      ctx.moveTo(-body, 0)
      ctx.lineTo(-wingSpan, wingDepth)
      ctx.stroke()

      ctx.restore()
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      birds.length = 0
      for (let i = 0; i < BIRD_COUNT; i += 1) {
        birds.push({
          x: random(-width * 0.08, width * 1.08),
          y: random(height * 0.12, height * 0.86),
          vx: random(0.35, 1.1),
          vy: random(-0.2, 0.2),
          size: random(8, 16),
          wingPhase: random(0, Math.PI * 2),
          wingSpeed: random(0.8, 1.25),
        })
      }

      pointer.x = width / 2
      pointer.y = height / 2
      pointer.tx = width / 2
      pointer.ty = height / 2
    }

    const onMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      pointer.tx = event.clientX - rect.left
      pointer.ty = event.clientY - rect.top
    }

    const onTouchMove = (event: TouchEvent) => {
      const rect = canvas.getBoundingClientRect()
      const touch = event.touches[0]
      if (!touch) return
      pointer.tx = touch.clientX - rect.left
      pointer.ty = touch.clientY - rect.top
    }

    const onLeave = () => {
      pointer.tx = width / 2
      pointer.ty = height / 2
    }

    const updateBirds = () => {
      for (let i = 0; i < birds.length; i += 1) {
        const bird = birds[i]

        if (!reducedMotion) {
          let cohesionX = 0
          let cohesionY = 0
          let alignX = 0
          let alignY = 0
          let separationX = 0
          let separationY = 0
          let nearby = 0

          for (let j = 0; j < birds.length; j += 1) {
            if (i === j) continue
            const other = birds[j]
            const dx = other.x - bird.x
            const dy = other.y - bird.y
            const distSq = dx * dx + dy * dy

            if (distSq < 10000) {
              nearby += 1
              cohesionX += other.x
              cohesionY += other.y
              alignX += other.vx
              alignY += other.vy

              if (distSq < 1200 && distSq > 0.0001) {
                separationX -= dx / distSq
                separationY -= dy / distSq
              }
            }
          }

          if (nearby > 0) {
            cohesionX = cohesionX / nearby - bird.x
            cohesionY = cohesionY / nearby - bird.y
            alignX /= nearby
            alignY /= nearby

            bird.vx += cohesionX * 0.00006 + alignX * 0.012 + separationX * 0.28
            bird.vy += cohesionY * 0.00006 + alignY * 0.012 + separationY * 0.28
          }

          bird.vx += Math.sin(time * 0.45 + i * 0.55) * 0.0025
          bird.vy += Math.cos(time * 0.35 + i * 0.66) * 0.0021

          const pDx = pointer.x - bird.x
          const pDy = pointer.y - bird.y
          const pDist = Math.sqrt(pDx * pDx + pDy * pDy)
          const repel = clamp(1 - pDist / 170, 0, 1)

          if (pDist > 0.001) {
            bird.vx -= (pDx / pDist) * repel * 0.035
            bird.vy -= (pDy / pDist) * repel * 0.035
          }

          const speed = Math.sqrt(bird.vx * bird.vx + bird.vy * bird.vy)
          const minSpeed = 0.3
          const maxSpeed = 1.45
          const clamped = clamp(speed, minSpeed, maxSpeed)

          if (speed > 0.001) {
            bird.vx = (bird.vx / speed) * clamped
            bird.vy = (bird.vy / speed) * clamped
          }

          bird.x += bird.vx
          bird.y += bird.vy
        }

        if (bird.x > width + 22) bird.x = -22
        if (bird.x < -22) bird.x = width + 22
        if (bird.y > height + 18) bird.y = -18
        if (bird.y < -18) bird.y = height + 18
      }
    }

    const draw = () => {
      if (!reducedMotion) {
        time += 0.011
      }

      pointer.x += (pointer.tx - pointer.x) * 0.08
      pointer.y += (pointer.ty - pointer.y) * 0.08

      ctx.clearRect(0, 0, width, height)

      const base = ctx.createLinearGradient(0, 0, width, height)
      base.addColorStop(0, "rgba(0, 0, 0, 0.82)")
      base.addColorStop(0.55, "rgba(7, 12, 22, 0.48)")
      base.addColorStop(1, "rgba(0, 0, 0, 0.86)")

      ctx.fillStyle = base
      ctx.fillRect(0, 0, width, height)

      const coreGlow = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, Math.min(width, height) * 0.18)
      coreGlow.addColorStop(0, "rgba(210, 224, 255, 0.06)")
      coreGlow.addColorStop(1, "rgba(210, 224, 255, 0)")
      ctx.fillStyle = coreGlow
      ctx.fillRect(0, 0, width, height)

      updateBirds()

      ctx.globalCompositeOperation = "screen"
      for (let i = 0; i < birds.length; i += 1) {
        drawBird(birds[i], i)
      }

      ctx.globalCompositeOperation = "source-over"

      const vignette = ctx.createRadialGradient(width * 0.5, height * 0.5, Math.min(width, height) * 0.2, width * 0.5, height * 0.5, Math.max(width, height) * 0.72)
      vignette.addColorStop(0, "rgba(0, 0, 0, 0)")
      vignette.addColorStop(1, "rgba(0, 0, 0, 0.5)")

      ctx.fillStyle = vignette
      ctx.fillRect(0, 0, width, height)

      rafId = window.requestAnimationFrame(draw)
    }

    resize()
    rafId = window.requestAnimationFrame(draw)

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas)

    canvas.addEventListener("mousemove", onMove)
    canvas.addEventListener("touchmove", onTouchMove, { passive: true })
    canvas.addEventListener("mouseleave", onLeave)

    return () => {
      window.cancelAnimationFrame(rafId)
      resizeObserver.disconnect()
      canvas.removeEventListener("mousemove", onMove)
      canvas.removeEventListener("touchmove", onTouchMove)
      canvas.removeEventListener("mouseleave", onLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className="h-full w-full" aria-hidden="true" />
}
