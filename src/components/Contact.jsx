import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { CONTACT_LINKS } from '../data/content.js'
import Reveal from './Reveal.jsx'

export default function Contact() {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const wmX = useTransform(scrollYProgress, [0, 1], ['6%', '-6%'])

  return (
    <section className="contact section" id="contact" ref={ref}>
      <motion.span className="contact__wm" aria-hidden="true" style={reduced ? undefined : { x: wmX }}>
        HZ
      </motion.span>
      <div className="wrap">
        <Reveal as="p" className="badge">
          <span className="pulse" aria-hidden="true" />
          Accepting new clients — 2026
        </Reveal>
        <Reveal as="h2" className="contact__title" delay={0.06}>
          Train<br />with <em>Hein</em>
        </Reveal>
        <Reveal as="p" className="contact__copy" delay={0.12}>
          Currently accepting 1-on-1 clients in Yangon. Message me with your goal and training
          history — I'll reply with an honest assessment of what it will take.
        </Reveal>
        <Reveal className="contact__actions" delay={0.18}>
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              className={`btn ${link.solid ? 'btn--solid' : 'btn--ghost'}`}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              {link.label}
            </a>
          ))}
        </Reveal>
        <Reveal as="p" className="contact__loc" delay={0.24}>
          Yangon, Myanmar — City International Fitness Academy
        </Reveal>
      </div>
    </section>
  )
}
