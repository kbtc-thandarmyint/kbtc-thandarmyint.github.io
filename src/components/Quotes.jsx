import { QUOTES } from '../data/content.js'
import Reveal from './Reveal.jsx'

export default function Quotes() {
  return (
    <section className="quotes section" aria-label="Client records">
      <div className="wrap">
        <header className="section-head">
          <Reveal as="p" className="kicker">06 — Client Records</Reveal>
          <Reveal as="h2" className="h2" delay={0.06}>What clients say</Reveal>
        </header>
        <div className="quotes__grid">
          {QUOTES.map((q, i) => (
            <Reveal as="blockquote" className="quote" key={q.who} delay={i * 0.08}>
              <span aria-hidden="true">“</span>
              <p>{q.text}</p>
              <footer>— {q.who}</footer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
