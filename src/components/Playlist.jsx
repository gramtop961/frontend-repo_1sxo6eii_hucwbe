import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function Playlist({ tracks = [] }) {
  const audioRef = useRef(null)
  const [current, setCurrent] = useState(0)
  const [playing, setPlaying] = useState(false)

  const play = (i) => {
    setCurrent(i)
    setTimeout(() => {
      audioRef.current.play()
      setPlaying(true)
    }, 0)
  }

  const toggle = () => {
    if (!audioRef.current) return
    if (playing) { audioRef.current.pause(); setPlaying(false) } else { audioRef.current.play(); setPlaying(true) }
  }

  const track = tracks[current]

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h3 className="text-4xl md:text-5xl font-serif text-white drop-shadow text-center">Forever Playlist</h3>
        <p className="text-white/80 mt-2 text-center">Songs that became our timeline</p>

        <div className="mt-10 grid md:grid-cols-2 gap-6 items-center">
          {/* Visualizer */}
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/20 bg-gradient-to-br from-purple-200/10 to-pink-200/10 backdrop-blur-xl p-8">
            <motion.div animate={{ rotate: playing ? 360 : 0 }} transition={{ repeat: Infinity, duration: 12, ease: 'linear' }} className="absolute inset-8 rounded-full border-4 border-white/20 shadow-[0_0_60px_10px_rgba(255,200,230,0.2)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button onClick={toggle} className="rounded-full bg-white/20 backdrop-blur-md px-5 py-2 text-white border border-white/30">{playing ? 'Pause' : 'Play'}</button>
            </div>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1 px-4">
              {Array.from({ length: 40 }).map((_, i) => (
                <motion.span key={i} className="block w-1 bg-pink-200/70" animate={{ height: [8, 24, 10, 30, 12][i % 5] }} transition={{ repeat: Infinity, duration: 1 + (i % 5) * 0.2, repeatType: 'reverse' }} style={{ height: 12 }} />
              ))}
            </div>
          </div>

          {/* List */}
          <div className="space-y-3">
            {tracks.map((t, i) => (
              <button key={i} onClick={() => play(i)} className={`w-full text-left rounded-2xl border p-4 backdrop-blur-md shadow ${i === current ? 'border-pink-300/60 bg-pink-200/10 text-white' : 'border-white/10 bg-white/5 text-white/90'}`}>
                <div className="font-medium">{t.title}</div>
                <div className="text-white/70 text-sm">{t.quote}</div>
              </button>
            ))}
          </div>
        </div>

        {track && (
          <audio ref={audioRef} src={track.url} onEnded={() => setPlaying(false)} />
        )}
      </div>
    </section>
  )
}
