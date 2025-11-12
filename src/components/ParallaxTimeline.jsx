import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const memories = [
  { year: 'First Hello', note: 'The message that changed everything', img: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1200&auto=format&fit=crop' },
  { year: 'Our First Date', note: 'The world blurred, it was just us', img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop' },
  { year: 'That Rainy Walk', note: 'We laughed under one umbrella', img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop' },
  { year: 'New Horizons', note: 'We dreamed in midnight blue', img: 'https://images.unsplash.com/photo-1460472178825-e5240623afd5?q=80&w=1200&auto=format&fit=crop' },
]

export default function ParallaxTimeline() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -200])

  return (
    <section className="relative min-h-[160vh] py-24 overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-100/10 to-purple-200/10" />
      </motion.div>

      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-4xl md:text-6xl font-serif tracking-tight text-white drop-shadow-[0_0_30px_rgba(255,192,203,0.35)]">
          Our Journey
        </h2>
        <p className="text-white/80 mt-2">Hover each glowing orb to reveal a memory.</p>

        <div className="mt-16 relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-pink-300/60 via-purple-300/60 to-blue-300/60" />

          <div className="grid grid-cols-1 gap-24">
            {memories.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className={`relative flex ${i % 2 ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col items-center gap-8`}
              >
                <div className="relative">
                  <div className="w-6 h-6 rounded-full bg-pink-200 shadow-[0_0_30px_8px_rgba(255,182,193,0.45)]" />
                  <div className="absolute -inset-6 rounded-full bg-pink-300/20 blur-2xl" />
                </div>

                <div className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md shadow-xl md:max-w-[56%]">
                  <img src={m.img} alt="memory" className="h-56 w-full object-cover opacity-90 group-hover:opacity-100 transition" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                  <div className="absolute bottom-0 p-6">
                    <div className="text-2xl font-serif text-white drop-shadow">
                      {m.year}
                    </div>
                    <div className="text-white/80">{m.note}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating hearts */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: '100%', x: Math.random() * 100 + '%' }}
            animate={{ y: '-20%' }}
            transition={{ duration: 12 + Math.random() * 12, repeat: Infinity, ease: 'easeOut', delay: Math.random() * 5 }}
            className="absolute text-pink-300/80"
            style={{ left: Math.random() * 100 + '%' }}
          >
            <span className="text-2xl">❤</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
