import { motion, useReducedMotion } from 'framer-motion'

const EASE = [0.22, 0.7, 0.2, 1]

/** Fade-up on scroll into view. `as` picks the underlying motion element. */
export default function Reveal({ as = 'div', delay = 0, y = 28, children, ...rest }) {
  const reduced = useReducedMotion()
  const M = motion[as] ?? motion.div
  return (
    <M
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </M>
  )
}
