import { useState } from 'react'
import { CERTS } from '../data/content.js'
import Reveal from './Reveal.jsx'
import Lightbox from './Lightbox.jsx'

export default function Credentials() {
  const [lightbox, setLightbox] = useState(null)

  const caption = (c) =>
    `${c.name} — ${c.issuer} · ${c.date}${c.id ? ` · ${c.id}` : ''}`

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
              onClick={() => setLightbox(c)}
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
                onClick={(e) => { e.stopPropagation(); setLightbox(c) }}
              >
                View certificate ↗
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox
        open={!!lightbox}
        src={lightbox?.img}
        alt={lightbox ? `${lightbox.name} certificate` : ''}
        caption={lightbox ? caption(lightbox) : ''}
        onClose={() => setLightbox(null)}
      />
    </section>
  )
}
