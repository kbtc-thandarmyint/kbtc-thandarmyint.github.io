import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

const EASE = [0.22, 0.7, 0.2, 1]

function StaggerWord({ word, ghost = false, baseDelay = 0 }) {
  const reduced = useReducedMotion()
  return (
    <span className={`hero__row ${ghost ? 'hero__row--ghost' : ''}`} aria-hidden="true">
      {word.split('').map((ch, i) => (
        <motion.span
          key={i}
          className="hero__char"
          initial={reduced ? false : { y: '110%' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.85, delay: baseDelay + i * 0.045, ease: EASE }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const mediaY = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '36%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <section className="hero" id="top" ref={ref} aria-label="Intro">
      <motion.figure className="hero__media" style={reduced ? undefined : { y: mediaY }} aria-hidden="true">
        <motion.img
          src="./assets/hero-gym-dark.jpg"
          alt=""
          width="2048"
          height="1444"
          fetchpriority="high"
          initial={reduced ? false : { scale: 1.14 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: EASE, delay: 0.9 }}
        />
      </motion.figure>
      <div className="hero__shade" aria-hidden="true" />

      <motion.div className="hero__content" style={reduced ? undefined : { y: contentY, opacity: contentOpacity }}>
        <motion.p
          className="hero__kicker"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0, ease: EASE }}
        >
          <span className="pulse" aria-hidden="true" />
          Certified Personal Trainer — Yangon, Myanmar
        </motion.p>

        <h1 className="hero__title" aria-label="Hein Zaw">
          <StaggerWord word="HEIN" baseDelay={1.1} />
          <StaggerWord word="ZAW" ghost baseDelay={1.3} />
        </h1>

        <motion.p
          className="hero__sub"
          initial={reduced ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.55, ease: EASE }}
        >
          Body transformation coach. Evidence-based programming, internationally accredited — zero gimmicks.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={reduced ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.7, ease: EASE }}
        >
          <a className="btn btn--solid" href="#contact">Start training <span aria-hidden="true">→</span></a>
          <a className="btn btn--ghost" href="#credentials">View credentials</a>
        </motion.div>
      </motion.div>

      <div className="hero__edge" aria-hidden="true">
        <span className="hero__est">EST. 2022 — MM</span>
        <span className="hero__scroll-line" />
      </div>
    </section>
  )
}
