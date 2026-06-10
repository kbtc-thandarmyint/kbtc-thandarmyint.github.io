import { SERVICES } from '../data/content.js'
import Reveal from './Reveal.jsx'

export default function Training() {
  return (
    <section className="training section" id="training">
      <div className="wrap">
        <header className="section-head">
          <Reveal as="p" className="kicker">03 — Training</Reveal>
          <Reveal as="h2" className="h2" delay={0.06}>Five ways to work</Reveal>
        </header>
        <div className="cards">
          {SERVICES.map((s, i) => (
            <Reveal as="article" className="card" key={s.no} delay={(i % 3) * 0.07}>
              <div className="card__media">
                <img
                  src={s.img}
                  alt={s.name}
                  width="620"
                  height="420"
                  loading="lazy"
                  style={{ objectPosition: s.pos }}
                />
                <span className="card__shine" aria-hidden="true" />
                <span className="card__no" aria-hidden="true">{s.no}</span>
              </div>
              <div className="card__body">
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
                <span className="card__ref">{s.ref}</span>
              </div>
            </Reveal>
          ))}
          <Reveal as="a" className="card card--cta" href="#contact" delay={0.14}>
            <span className="card--cta__kicker">Not sure where to start?</span>
            <span className="card--cta__title">Tell me your goal — I'll map the program.</span>
            <span className="card--cta__link">Get assessed →</span>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
