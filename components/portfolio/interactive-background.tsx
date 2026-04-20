"use client"

export function InteractiveBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(0,0,0,0.02)_0%,_transparent_26%,_transparent_100%)]" />
    </div>
  )
}