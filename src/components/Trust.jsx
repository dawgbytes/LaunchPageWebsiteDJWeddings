import SectionHeading from './SectionHeading'
import SectionBackground from './SectionBackground'
import { COMPANY_NAME } from '../config/siteConfig'
import { TRUST_GALLERY } from '../config/images'

export default function Trust() {
  return (
    <section id="trust" className="section section--photo trust">
      <SectionBackground section="trust" />
      <div className="container section__inner">
        <SectionHeading
          eyebrow="Back & better"
          title="Relaunching with a decade of dance floors behind us"
          description={`${COMPANY_NAME} is returning with fresh gear and the same passion for getting people on their feet. We've spent years behind the decks at weddings, milestone birthdays, school functions, and company celebrations — and we're ready to make your event unforgettable.`}
        />

        <div className="trust__grid">
          <article className="trust__card glass-card">
            <span className="trust__stat">10+</span>
            <h3 className="trust__label">Years of experience</h3>
            <p>Reading the room and keeping momentum from first song to last call.</p>
          </article>
          <article className="trust__card glass-card">
            <span className="trust__stat">500+</span>
            <h3 className="trust__label">Events hosted</h3>
            <p>From intimate gatherings to packed reception halls.</p>
          </article>
          <article className="trust__card glass-card">
            <span className="trust__stat">100%</span>
            <h3 className="trust__label">Client-focused</h3>
            <p>Planning calls, timeline coordination, and music tailored to you.</p>
          </article>
        </div>

        {/* REPLACE: Swap TRUST_GALLERY in config/images.js with your event photos */}
        <div className="trust__visual">
          {TRUST_GALLERY.map((image, index) => (
            <div
              key={image.label}
              className={`trust__visual-panel trust__visual-panel--${index + 1}`}
              style={{ backgroundImage: `url("${image.url}")` }}
              role="img"
              aria-label={image.label}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
