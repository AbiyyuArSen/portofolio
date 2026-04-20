"use client"

import { useEffect } from "react"

export function ScrollToHeroOnEntry() {
  useEffect(() => {
    const previousRestoration = history.scrollRestoration
    history.scrollRestoration = "manual"

    const jumpToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" })
    }

    jumpToTop()
    const rafId = window.requestAnimationFrame(jumpToTop)

    const onPageShow = () => {
      jumpToTop()
    }

    window.addEventListener("pageshow", onPageShow)

    return () => {
      window.cancelAnimationFrame(rafId)
      window.removeEventListener("pageshow", onPageShow)
      history.scrollRestoration = previousRestoration
    }
  }, [])

  return null
}
