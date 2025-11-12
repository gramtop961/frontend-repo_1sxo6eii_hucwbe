import React, { useEffect, useRef, useState } from 'react'

export default function AudioPlayer({ src, volume = 0.4, loop = true, auto = true }) {
  const audioRef = useRef(null)
  const [ready, setReady] = useState(false)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const a = audioRef.current
    if (!a) return
    const onCanPlay = () => setReady(true)
    a.addEventListener('canplay', onCanPlay)
    a.volume = volume
    a.loop = loop
    return () => a.removeEventListener('canplay', onCanPlay)
  }, [volume, loop])

  useEffect(() => {
    const a = audioRef.current
    if (!a) return
    if (auto && ready) {
      a.play().then(() => setPlaying(true)).catch(() => {})
    }
  }, [auto, ready])

  const toggle = () => {
    const a = audioRef.current
    if (!a) return
    if (playing) { a.pause(); setPlaying(false) } else { a.play(); setPlaying(true) }
  }

  return (
    <div className="fixed bottom-4 right-4 z-40 backdrop-blur-sm bg-white/10 text-white px-3 py-2 rounded-full border border-white/20 shadow-lg flex items-center gap-2">
      <button onClick={toggle} className="text-sm font-medium">
        {playing ? 'Pause' : 'Play'}
      </button>
      <audio ref={audioRef} src={src} />
    </div>
  )
}
