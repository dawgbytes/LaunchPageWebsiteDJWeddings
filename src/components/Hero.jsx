import { COMPANY_NAME } from '../config/siteConfig'
import SectionBackground from './SectionBackground'

export default function Hero() {
  return (
    <section id="hero" className="hero hero--photo" aria-labelledby="hero-heading">
      <SectionBackground section="hero" />

      <div className="container hero__content section__inner">
        <p className="hero__badge">Now booking for your next celebration</p>
        <h1 id="hero-heading" className="hero__title">
          Music that moves your crowd — hosted by {COMPANY_NAME}
        </h1>
        <p className="hero__subtitle">
          Weddings, parties, and corporate events with a personal touch. We bring
          the energy, the flow, and a professional setup so you can stay in the
          moment.
        </p>
        <div className="hero__actions">
          <a href="#contact" className="btn btn--primary btn--lg">
            Check Availability
          </a>
          <a href="#contact" className="btn btn--outline btn--lg btn--outline-light">
            Request a Quote
          </a>
        </div>
        <ul className="hero__highlights" aria-label="Highlights">
          <li>Licensed & insured</li>
          <li>Custom playlists</li>
          <li>Pro sound & lighting</li>
        </ul>
      </div>
    </section>
  )
}
