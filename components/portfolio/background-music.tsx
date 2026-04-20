"use client"

import { useEffect, useRef, useState } from "react"
import { Pause, Play } from "lucide-react"

const AUDIO_SOURCE = "/music/lautdanmesin.mp3"
const PREF_KEY = "portfolio-bgm-enabled"

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onPlay = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)

    audio.addEventListener("play", onPlay)
    audio.addEventListener("pause", onPause)

    return () => {
      audio.removeEventListener("play", onPlay)
      audio.removeEventListener("pause", onPause)
    }
  }, [])

  const togglePlayback = async () => {
    const audio = audioRef.current
    if (!audio || hasError) return

    if (audio.paused) {
      try {
        audio.volume = 0.28
        await audio.play()
        window.localStorage.setItem(PREF_KEY, "on")
      } catch {
        setIsPlaying(false)
      }
      return
    }

    audio.pause()
    window.localStorage.setItem(PREF_KEY, "off")
  }

  useEffect(() => {
    const audio = audioRef.current
    if (!audio || hasError) return

    const preference = window.localStorage.getItem(PREF_KEY)
    if (preference !== "on") return

    const startIfAllowed = async () => {
      try {
        audio.volume = 0.28
        await audio.play()
      } catch {
        // Browser may block autoplay until user gesture.
      }
    }

    void startIfAllowed()
  }, [hasError])

  return (
    <>
      <audio
        ref={audioRef}
        src={AUDIO_SOURCE}
        preload="metadata"
        loop
        onError={() => setHasError(true)}
        aria-hidden="true"
      />

      <div className="pointer-events-none fixed bottom-5 right-5 z-[95]">
        <button
          type="button"
          data-magnetic
          data-cursor-label="Music"
          onClick={togglePlayback}
          disabled={hasError}
          className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-[#64cfe5]/35 bg-[rgba(6,18,30,0.9)] px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#d7f5ff] transition-colors hover:border-[#7fe3f4]/60 hover:text-[#ecfbff] disabled:cursor-not-allowed disabled:border-white/15 disabled:text-white/45"
          aria-label={hasError ? "Background music unavailable" : isPlaying ? "Pause background music" : "Play background music"}
          title={hasError ? "Add /public/music/portfolio-theme.mp3 to enable background music" : isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
          {hasError ? "No Track" : isPlaying ? "Music On" : "Music Off"}
        </button>
      </div>
    </>
  )
}
