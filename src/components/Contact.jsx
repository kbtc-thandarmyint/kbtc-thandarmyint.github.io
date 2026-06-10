import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { CONTACT_LINKS } from '../data/content.js'
import Reveal from './Reveal.jsx'

// Inline SVG for social icons
const TikTok = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
)
const Instagram = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
)
const Facebook = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
)

const Icons = {
  instagram: <Instagram size={18} />,
  facebook: <Facebook size={18} />,
  tiktok: <TikTok size={18} />,
  email: <Mail size={18} />
}

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
              <span className="btn__icon">{Icons[link.icon]}</span>
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
