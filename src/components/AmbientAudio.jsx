import React, { useEffect, useRef, useState } from 'react'

export default function AmbientAudio({ src, heartbeatSrc, volume = 0.3, heartbeatVolume = 0.08 }) {
  const pianoRef = useRef(null)
  const hbRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const p = pianoRef.current
    const h = hbRef.current
    if (!p) return
    p.volume = volume
    p.loop = true
    if (h) { h.volume = heartbeatVolume; h.loop = true }
    p.play().then(() => { setPlaying(true); if (h) h.play().catch(()=>{}) }).catch(() => {})
  }, [volume, heartbeatVolume])

  const toggle = () => {
    const p = pianoRef.current
    const h = hbRef.current
    if (!p) return
    if (playing) { p.pause(); if (h) h.pause(); setPlaying(false) } else { p.play().then(()=>{ if (h) h.play().catch(()=>{}) ; setPlaying(true) }).catch(()=>{}) }
  }

  return (
    <div className="fixed bottom-4 left-4 z-40 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-white backdrop-blur-md shadow">
      <button onClick={toggle} className="text-sm">{playing ? 'Pause ambience' : 'Play ambience'}</button>
      <audio ref={pianoRef} src={src} />
      {heartbeatSrc && <audio ref={hbRef} src={heartbeatSrc} />}
    </div>
  )}
