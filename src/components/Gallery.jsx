import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { GALLERY } from '../data/content.js'
import Reveal from './Reveal.jsx'
import Lightbox from './Lightbox.jsx'
import { useIsDesktop } from '../hooks/useMedia.js'

const SPEEDS = [40, 95, 60, 85, 50, 70, 45, 90, 55, 75]

function ParallaxFigure({ item, index, onClick }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const desktop = useIsDesktop()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [SPEEDS[index] || 50, -(SPEEDS[index] || 50)])
  const active = desktop && !reduced

  return (
    <motion.figure ref={ref} className={`g g--${index}`} style={active ? { y } : undefined}>
      <Reveal>
        <div className="frame" onClick={() => onClick(index)} style={{ cursor: 'zoom-in' }}>
          <img src={item.img} alt={item.cap} width={item.w} height={item.h} loading="lazy" />
        </div>
        <figcaption className="cap">{item.cap}</figcaption>
      </Reveal>
    </motion.figure>
  )
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  
  const isOpen = lightboxIndex !== null
  const currentItem = isOpen ? GALLERY[lightboxIndex] : null

  const handleNext = () => setLightboxIndex((i) => (i < GALLERY.length - 1 ? i + 1 : 0))
  const handlePrev = () => setLightboxIndex((i) => (i > 0 ? i - 1 : GALLERY.length - 1))

  return (
    <section className="gallery section" aria-label="Physique gallery">
      <div className="wrap">
        <header className="section-head">
          <Reveal as="p" className="kicker">04 — The Work</Reveal>
          <Reveal as="h2" className="h2" delay={0.06}>Proof of work</Reveal>
        </header>
        <div className="gallery__grid">
          {GALLERY.map((item, i) => (
            <ParallaxFigure key={item.img} item={item} index={i} onClick={setLightboxIndex} />
          ))}
        </div>
      </div>

      <Lightbox
        open={isOpen}
        src={currentItem?.img}
        alt={currentItem?.cap || ''}
        caption={currentItem?.cap || ''}
        onClose={() => setLightboxIndex(null)}
        onNext={GALLERY.length > 1 ? handleNext : undefined}
        onPrev={GALLERY.length > 1 ? handlePrev : undefined}
      />
    </section>
  )
}
