import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import Starfield from './components/Starfield'
import ParallaxTimeline from './components/ParallaxTimeline'
import Wishes from './components/Wishes'
import Gift from './components/Gift'
import Playlist from './components/Playlist'

export default function App() {
  const tracks = [
    { title: 'First Light', quote: 'The day we met, the sun learned your name', url: 'https://cdn.pixabay.com/download/audio/2021/08/04/audio_5a81be6900.mp3?filename=warm-piano-11377.mp3' },
    { title: 'Lavender Night', quote: 'Midnight blue, blush pink, and your smile', url: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_6b0d9a21a2.mp3?filename=relaxing-ambient-112191.mp3' },
  ]

  return (
    <div className="min-h-screen w-full bg-[#0b0b1a] text-white">
      {/* Opening Scene */}
      <section className="relative h-[100svh] overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/kqB-rdL4TCJ7pyGb/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <Starfield className="opacity-60" />
        {/* Soft gradient overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#12081f]/30 via-[#0b0b1a]/30 to-[#0b0b1a]" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-5xl md:text-7xl font-serif tracking-tight drop-shadow-[0_0_30px_rgba(255,200,230,0.35)]"
          >
            The Universe Paused for You
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.2 }}
            className="mt-6 max-w-2xl text-lg md:text-xl text-white/90"
          >
            The day you were born, the universe smiled.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-10"
          >
            <a href="#journey" className="rounded-full border border-pink-300/60 bg-pink-200/10 px-6 py-3 text-white hover:bg-pink-200/20 transition">Begin</a>
          </motion.div>
        </div>
      </section>

      {/* Our Journey */}
      <div id="journey" />
      <ParallaxTimeline />

      {/* Wishes */}
      <Wishes name="My Forever" />

      {/* Gift */}
      <Gift />

      {/* Playlist */}
      <Playlist tracks={tracks} />

      {/* Closing Scene */}
      <section className="relative h-[90svh] flex items-center justify-center text-center">
        <Starfield className="opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0b1a] to-[#0b0b1a]" />
        <div className="relative z-10 px-6">
          <div className="text-4xl md:text-6xl font-serif">To My Forever</div>
          <p className="mt-4 text-white/90">Happy Birthday, my love — every heartbeat of mine celebrates you.</p>
          <a href="#top" onClick={(e)=>{e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' })}} className="mt-10 inline-flex rounded-full border border-purple-300/60 bg-purple-200/10 px-6 py-3">Replay Our Story 💫</a>
        </div>
      </section>
    </div>
  )
}
