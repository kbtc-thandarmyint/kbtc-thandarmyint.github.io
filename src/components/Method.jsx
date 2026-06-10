import { METHOD_STEPS } from '../data/content.js'
import Reveal from './Reveal.jsx'

/** Sticky-stacking cards: each step pins below the nav and the next slides over it. */
export default function Method() {
  return (
    <section className="method section" id="method">
      <div className="wrap">
        <header className="section-head">
          <Reveal as="p" className="kicker">02 — The Method</Reveal>
          <Reveal as="h2" className="h2" delay={0.06}>How it works</Reveal>
        </header>
        <div className="method__stack">
          {METHOD_STEPS.map((step, i) => (
            <div className="step" key={step.no} style={{ top: `calc(86px + ${i * 18}px)` }}>
              <span className="step__bar" aria-hidden="true" />
              <span className="step__no" aria-hidden="true">{step.no}</span>
              <h3>{step.name}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
