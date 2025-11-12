import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Gift({ letter = 'My heart wrote you a thousand tiny letters; this one found its way to your screen. Happy Birthday, my love.' }) {
  const [open, setOpen] = useState(false)

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h3 className="text-4xl md:text-5xl font-serif text-white drop-shadow">Your Gift Awaits</h3>
        <p className="text-white/80 mt-2">Tap the glowing box</p>

        <div className="mt-14 flex items-center justify-center">
          <motion.div
            onClick={() => setOpen(true)}
            whileHover={{ scale: 1.04 }}
            className="relative h-44 w-44 cursor-pointer rounded-xl bg-gradient-to-br from-pink-200/40 to-purple-200/40 backdrop-blur-md border border-white/30 shadow-[0_0_60px_10px_rgba(255,200,230,0.25)]"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/40 to-transparent" />
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.2, repeat: Infinity }}
              className="absolute -top-4 left-1/2 -translate-x-1/2 h-4 w-24 rounded-full bg-pink-200/60 blur-md"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white font-semibold">Open</div>
          </motion.div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-6"
              onClick={() => setOpen(false)}
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.9, y: 30, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 30, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 120, damping: 14 }}
                className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl p-6 text-left text-white shadow-2xl"
              >
                <h4 className="text-2xl font-serif">A letter for you</h4>
                <p className="mt-3 leading-relaxed text-white/90">{letter}</p>
                <div className="mt-4 aspect-video w-full overflow-hidden rounded-lg border border-white/10">
                  <iframe className="h-full w-full" src="https://www.youtube.com/embed/Dx5qFachd3A?si=2f1m0" title="Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <button onClick={() => setOpen(false)} className="mt-6 rounded-full border border-white/30 bg-white/10 px-4 py-2">Close</button>
                {/* Gold dust */}
                <div className="pointer-events-none absolute inset-0">
                  {Array.from({ length: 80 }).map((_, i) => (
                    <span key={i} className="absolute block h-0.5 w-0.5 bg-amber-200/80 rounded-full" style={{ top: Math.random()*100+'%', left: Math.random()*100+'%', filter: 'drop-shadow(0 0 6px rgba(255,210,160,0.9))' }} />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
