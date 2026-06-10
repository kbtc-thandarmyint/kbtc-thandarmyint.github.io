import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { NAV_LINKS } from '../data/content.js'
import { useScrollLock } from '../hooks/useLenis.jsx'

const EASE = [0.22, 0.7, 0.2, 1]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState(null)
  const [open, setOpen] = useState(false)
  const { stop, start } = useScrollLock()

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.4 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the nav link of the section currently in view
  useEffect(() => {
    const sections = NAV_LINKS
      .map((l) => document.querySelector(l.href))
      .filter(Boolean)
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-35% 0px -55% 0px' },
    )
    sections.forEach((s) => spy.observe(s))
    return () => spy.disconnect()
  }, [])

  useEffect(() => {
    if (open) stop()
    else start()
  }, [open]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
        <a className="nav__brand" href="#top">
          <span className="nav__name">Hein Zaw</span>
          <span className="nav__tag">CPT</span>
        </a>
        <nav className="nav__links" aria-label="Primary">
          {NAV_LINKS.slice(0, 4).map((l) => (
            <a key={l.href} href={l.href} className={active === l.href ? 'is-active' : ''}>
              {l.label}
            </a>
          ))}
          <a className="nav__cta" href="#contact">Start <span aria-hidden="true">→</span></a>
        </nav>
        <button
          className={`nav__burger ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <i /><i />
        </button>
        <motion.span className="nav__progress" aria-hidden="true" style={{ scaleX: progress }} />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="menu__links" aria-label="Mobile">
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.08 + i * 0.06, ease: EASE }}
                >
                  <em>{l.no}</em>{l.label}
                </motion.a>
              ))}
            </nav>
            <motion.a
              className="menu__cta"
              href="#contact"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.42, ease: EASE }}
            >
              Start training →
            </motion.a>
            <p className="menu__foot">HEINZAWFITNESS.ME — YANGON, MYANMAR</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
