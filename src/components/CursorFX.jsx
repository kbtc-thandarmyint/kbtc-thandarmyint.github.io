import { useEffect } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import { useIsFinePointer } from '../hooks/useMedia.js'

export default function CursorFX() {
  const fine = useIsFinePointer()
  const reduced = useReducedMotion()

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 350, damping: 30, mass: 0.6 })
  const ringY = useSpring(y, { stiffness: 350, damping: 30, mass: 0.6 })
  const scale = useMotionValue(1)
  const ringScale = useSpring(scale, { stiffness: 300, damping: 25 })

  useEffect(() => {
    if (!fine || reduced) return undefined
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const over = (e) => {
      const interactive = e.target.closest('a, button, [data-cursor]')
      scale.set(interactive ? 1.9 : 1)
    }
    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('mouseover', over, { passive: true })
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, [fine, reduced, x, y, scale])

  if (!fine || reduced) return null

  return (
    <>
      <motion.div
        className="cursor-ring"
        aria-hidden="true"
        style={{ x: ringX, y: ringY, scale: ringScale, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        className="cursor-dot"
        aria-hidden="true"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      />
    </>
  )
}
