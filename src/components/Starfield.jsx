import React, { useRef, useEffect } from 'react'

// Simple rotating starfield canvas
export default function Starfield({ speed = 0.0005, density = 0.00025, className = '' }) {
  const canvasRef = useRef(null)
  const animRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width = canvas.width = canvas.offsetWidth
    let height = canvas.height = canvas.offsetHeight

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
      initStars()
    }

    const stars = []
    const initStars = () => {
      stars.length = 0
      const count = Math.floor(width * height * density)
      for (let i = 0; i < count; i++) {
        const r = Math.random() * Math.max(width, height) * 0.6
        const a = Math.random() * Math.PI * 2
        stars.push({ r, a, size: Math.random() * 1.5 + 0.2, glow: Math.random() * 0.7 + 0.3 })
      }
    }

    initStars()
    let last = performance.now()

    const render = (t) => {
      const dt = t - last
      last = t
      ctx.clearRect(0, 0, width, height)

      ctx.save()
      ctx.translate(width / 2, height / 2)
      for (const s of stars) {
        s.a += speed * dt
        const x = Math.cos(s.a) * s.r
        const y = Math.sin(s.a) * s.r
        const grd = ctx.createRadialGradient(x, y, 0, x, y, s.size * 6)
        grd.addColorStop(0, `rgba(255,255,255,${0.9 * s.glow})`)
        grd.addColorStop(1, 'rgba(255,255,255,0)')
        ctx.fillStyle = grd
        ctx.beginPath()
        ctx.arc(x, y, s.size, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.restore()

      animRef.current = requestAnimationFrame(render)
    }

    animRef.current = requestAnimationFrame(render)
    window.addEventListener('resize', handleResize)
    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', handleResize)
    }
  }, [speed, density])

  return (
    <canvas ref={canvasRef} className={`absolute inset-0 ${className}`} />
  )
}
