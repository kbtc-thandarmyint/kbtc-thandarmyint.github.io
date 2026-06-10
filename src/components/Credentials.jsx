import { useState } from 'react'
import { CERTS } from '../data/content.js'
import Reveal from './Reveal.jsx'
import Lightbox from './Lightbox.jsx'

export default function Credentials() {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const isOpen = lightboxIndex !== null
  const currentItem = isOpen ? CERTS[lightboxIndex] : null

  const caption = (c) =>
    `${c.name} — ${c.issuer} · ${c.date}${c.id ? ` · ${c.id}` : ''}`

  const handleNext = () => setLightboxIndex((i) => (i < CERTS.length - 1 ? i + 1 : 0))
  const handlePrev = () => setLightboxIndex((i) => (i > 0 ? i - 1 : CERTS.length - 1))

  return (
    <section className="creds section" id="credentials">
      <div className="wrap">
        <header className="section-head section-head--split">
          <div>
            <Reveal as="p" className="kicker">05 — The Record</Reveal>
            <Reveal as="h2" className="h2" delay={0.06}>Credential registry</Reveal>
          </div>
          <Reveal as="p" className="section-meta" delay={0.12}>Records on file — 06 · 2022–2024</Reveal>
        </header>

        <div className="creds__grid">
          {CERTS.map((c, i) => (
            <Reveal
              as="article"
              className="cred"
              key={c.no}
              delay={(i % 3) * 0.07}
              onClick={() => setLightboxIndex(i)}
            >
              <div className="cred__img">
                <img src={c.img} alt={`${c.name} certificate`} width="620" height="440" loading="lazy" decoding="async" />
                <span className="cred__img-no" aria-hidden="true">{c.no}</span>
              </div>
              <div className="cred__body">
                <p className="cred__date">{c.date}</p>
                <p className="cred__issuer">{c.issuer}</p>
                <h3>{c.name}</h3>
                <p className="cred__detail">{c.detail}</p>
                {c.id && <p className="cred__id">CERT NO — {c.id}</p>}
              </div>
              <button
                className="cred__view"
                aria-label={`View ${c.name} certificate`}
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(i) }}
              >
                View certificate ↗
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox
        open={isOpen}
        src={currentItem?.img}
        alt={currentItem ? `${currentItem.name} certificate` : ''}
        caption={currentItem ? caption(currentItem) : ''}
        onClose={() => setLightboxIndex(null)}
        onNext={CERTS.length > 1 ? handleNext : undefined}
        onPrev={CERTS.length > 1 ? handlePrev : undefined}
      />
    </section>
  )
}
