import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'
import { STATS } from '../data/content.js'
import Reveal from './Reveal.jsx'

function format(value, { pad, suffix }) {
  let text = Math.round(value).toLocaleString('en-US')
  if (pad) text = String(Math.round(value)).padStart(pad, '0')
  return text + (suffix || '')
}

function Counter({ stat }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduced = useReducedMotion()
  const [display, setDisplay] = useState(() => format(reduced ? stat.value : 0, stat))

  useEffect(() => {
    if (!inView || reduced) return undefined
    const controls = animate(0, stat.value, {
      duration: 1.4,
      ease: [0.22, 0.7, 0.2, 1],
      onUpdate: (v) => setDisplay(format(v, stat)),
    })
    return () => controls.stop()
  }, [inView, reduced, stat])

  return <span ref={ref} className="stat__num">{display}</span>
}

export default function Stats() {
  return (
    <section className="stats" aria-label="Coaching record">
      <div className="wrap stats__grid">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} className="stat" delay={i * 0.08}>
            <Counter stat={stat} />
            <span className="stat__label">{stat.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
