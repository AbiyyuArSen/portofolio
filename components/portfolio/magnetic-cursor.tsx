"use client"

import { useEffect, useRef, useState } from "react"

const lerp = (start: number, end: number, amount: number) => start + (end - start) * amount

export function MagneticCursor() {
  const [enabled, setEnabled] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [label, setLabel] = useState("")

  const cursorRef = useRef<HTMLDivElement | null>(null)
  const dotRef = useRef<HTMLDivElement | null>(null)

  const target = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const supportsFinePointer = window.matchMedia("(pointer: fine)").matches
    setEnabled(supportsFinePointer)

    if (!supportsFinePointer) return

    const handleMouseMove = (event: MouseEvent) => {
      target.current.x = event.clientX
      target.current.y = event.clientY
    }

    const handleMouseLeave = () => {
      setIsActive(false)
      setLabel("")
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseout", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseout", handleMouseLeave)
    }
  }, [])

  useEffect(() => {
    if (!enabled) return

    let rafId = 0

    const animate = () => {
      current.current.x = lerp(current.current.x, target.current.x, 0.18)
      current.current.y = lerp(current.current.y, target.current.y, 0.18)

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%)`
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.current.x}px, ${target.current.y}px, 0) translate(-50%, -50%)`
      }

      rafId = window.requestAnimationFrame(animate)
    }

    rafId = window.requestAnimationFrame(animate)

    return () => {
      window.cancelAnimationFrame(rafId)
    }
  }, [enabled])

  useEffect(() => {
    if (!enabled) return

    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-magnetic]"))

    const disposers: Array<() => void> = []

    elements.forEach((element) => {
      const onMove = (event: MouseEvent) => {
        const rect = element.getBoundingClientRect()
        const x = event.clientX - rect.left - rect.width / 2
        const y = event.clientY - rect.top - rect.height / 2

        element.style.transform = `translate3d(${x * 0.16}px, ${y * 0.16}px, 0)`
      }

      const onEnter = () => {
        setIsActive(true)
        setLabel(element.dataset.cursorLabel ?? "")
      }

      const onLeave = () => {
        setIsActive(false)
        setLabel("")
        element.style.transform = "translate3d(0px, 0px, 0)"
      }

      element.addEventListener("mousemove", onMove)
      element.addEventListener("mouseenter", onEnter)
      element.addEventListener("mouseleave", onLeave)

      disposers.push(() => {
        element.removeEventListener("mousemove", onMove)
        element.removeEventListener("mouseenter", onEnter)
        element.removeEventListener("mouseleave", onLeave)
        element.style.transform = "translate3d(0px, 0px, 0)"
      })
    })

    return () => {
      disposers.forEach((dispose) => dispose())
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div
        ref={cursorRef}
        className={`pointer-events-none fixed left-0 top-0 z-[100] hidden h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-white/5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-[height,width,background-color,border-color] duration-300 md:flex ${isActive ? "h-24 w-24 border-white/70 bg-white/10" : ""}`}
      >
        <span className={`transition-opacity duration-200 ${label ? "opacity-100" : "opacity-0"}`}>{label}</span>
      </div>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[101] hidden h-2 w-2 rounded-full bg-white md:block"
      />
    </>
  )
}
