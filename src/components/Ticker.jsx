import { useRef } from 'react'
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useReducedMotion,
} from 'framer-motion'
import { TICKER_ITEMS } from '../data/content.js'

const wrap = (min, max, v) => {
  const range = max - min
  return ((((v - min) % range) + range) % range) + min
}

function Chunk() {
  return (
    <span className="ticker__chunk">
      {TICKER_ITEMS.map((item) => (
        <span key={item}>{item}<i>✦</i></span>
      ))}
    </span>
  )
}

/** Marquee that always scrolls — scroll velocity only adjusts speed, never stops it. */
export default function Ticker() {
  const reduced = useReducedMotion()
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], { clamp: false })
  const dirRef = useRef(-1)

  useAnimationFrame((t, delta) => {
    if (reduced) return

    // Base speed — always moves at this minimum speed (percentage per second)
    const baseSpeed = 1.5 
    let moveBy = -baseSpeed * (delta / 1000)

    // Scroll velocity adds extra speed and can flip direction
    const vf = velocityFactor.get()
    if (vf < 0) dirRef.current = 1
    else if (vf > 0) dirRef.current = -1

    // Add velocity boost on top of base speed
    moveBy += dirRef.current * Math.abs(vf) * 0.8 * (delta / 1000)

    baseX.set(baseX.get() + moveBy)
  })

  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`)

  return (
    <div className="ticker" aria-hidden="true">
      <motion.div className="ticker__track" style={reduced ? undefined : { x }}>
        <Chunk /><Chunk /><Chunk /><Chunk />
      </motion.div>
    </div>
  )
}
