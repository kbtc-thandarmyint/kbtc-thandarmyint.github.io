import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

const EASE = [0.22, 0.7, 0.2, 1]

export default function Preloader() {
  const reduced = useReducedMotion()
  const [pct, setPct] = useState(0)
  const [done, setDone] = useState(reduced)

  useEffect(() => {
    if (reduced) return undefined
    const tick = setInterval(() => {
      setPct((p) => {
        const next = Math.min(p + 7 + Math.random() * 16, 100)
        if (next >= 100) {
          clearInterval(tick)
          setTimeout(() => setDone(true), 350)
        }
        return next
      })
    }, 90)
    return () => clearInterval(tick)
  }, [reduced])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="preloader"
          aria-hidden="true"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <div className="preloader__inner">
            <motion.span
              className="preloader__name"
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.05 }}
            >
              Hein <em>Zaw</em>
            </motion.span>
            <span className="preloader__pct">{Math.round(pct)}%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
