import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="wrap about__grid">
        <Reveal as="figure" className="about__media">
          <div className="frame">
            <img
              src="./assets/smart-casual-lobby.jpg"
              alt="Portrait of Hein Zaw in a smart casual setting"
              width="1536"
              height="2048"
              loading="lazy"
              style={{ objectPosition: 'center 20%' }}
            />
          </div>
          <figcaption className="cap">Off duty — downtime</figcaption>
        </Reveal>
        <div className="about__body">
          <Reveal as="p" className="kicker">01 — The Coach</Reveal>
          <Reveal as="h2" className="h2" delay={0.06}>Built,<br />not gifted.</Reveal>
          <Reveal as="p" className="lead" delay={0.12}>
            I didn't start strong. I built this — rep by rep, in Myanmar gyms, learning what
            actually works and discarding what doesn't. Six internationally accredited
            certifications later (ACE-, NASM- and ESSA-recognized), I coach the way I train:
            evidence-based programming, honest numbers, no gimmicks.
          </Reveal>
          <Reveal as="p" className="lead" delay={0.18}>
            Whether you're cutting, building, or trying to move without pain again — the process
            is structured and the standard doesn't drop. Outside the gym, I'm easygoing.
          </Reveal>
          <Reveal as="dl" className="facts" delay={0.24}>
            <div><dt>Base</dt><dd>Yangon, MM</dd></div>
            <div><dt>Coaching since</dt><dd>2022</dd></div>
            <div><dt>Method</dt><dd>Evidence-based</dd></div>
            <div><dt>Trained at</dt><dd>CIFA — Myanmar</dd></div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
