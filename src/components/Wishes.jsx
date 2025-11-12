import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Wishes({ name = 'My Love' }) {
  const [bursts, setBursts] = useState(0)
  const wishes = [
    'May your days be lined with soft light and warm laughter.',
    'I wish you all the starlight your heart can hold.',
    'You are my calm, my glow, my favorite hello.',
  ]

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h3 className="text-4xl md:text-5xl font-serif text-white drop-shadow">Wishes Written in Light</h3>
        <p className="text-white/80 mt-2">Hover your name and make a wish.</p>

        <motion.div whileHover={{ textShadow: '0 0 24px rgba(255,215,170,0.9)' }} className="mt-10 inline-block text-5xl font-semibold tracking-wide">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-200 via-amber-200 to-rose-200 cursor-pointer">
            {name}
          </span>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {wishes.map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md p-6 text-white shadow-lg"
            >
              {w}
            </motion.div>
          ))}
        </div>

        <button
          onClick={() => setBursts((b) => b + 1)}
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-amber-300/50 bg-amber-200/10 px-5 py-2 text-amber-100 shadow hover:bg-amber-200/20 transition"
        >
          Sparkling Wish
        </button>

        <div className="pointer-events-none absolute inset-0">
          {Array.from({ length: bursts * 20 }).map((_, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 1, scale: 0, x: '50%', y: '60%' }}
              animate={{ opacity: 0, scale: 1, x: `${50 + (Math.random() * 60 - 30)}%`, y: `${60 + (Math.random() * 60 - 30)}%` }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="absolute block h-1 w-1 rounded-full bg-amber-200 shadow-[0_0_10px_2px_rgba(255,214,165,0.8)]"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
