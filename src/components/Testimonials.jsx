import SectionHeading from './SectionHeading'
import SectionBackground from './SectionBackground'

/* REPLACE: Swap with real client testimonials, names, and event types */
const TESTIMONIALS = [
  {
    quote:
      'They kept our wedding dance floor packed all night. Guests are still talking about the mashup during cake cutting!',
    name: 'Jordan M.',
    event: 'Wedding reception',
  },
  {
    quote:
      'Professional from the first email to breakdown. Our company holiday party had the right energy without being too loud for networking.',
    name: 'Priya S.',
    event: 'Corporate holiday party',
  },
  {
    quote:
      "Our daughter's sweet sixteen felt like a real club — but every song was parent-approved. Couldn't have asked for a smoother night.",
    name: 'The Rivera family',
    event: 'Private birthday party',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section section--photo testimonials">
      <SectionBackground section="testimonials" />
      <div className="container section__inner">
        <SectionHeading
          eyebrow="Kind words"
          title="What clients are saying"
          description="Placeholder reviews below — replace with your own stories and permission to publish."
        />
        <div className="testimonials__grid">
          {TESTIMONIALS.map((item) => (
            <blockquote key={item.name} className="testimonial-card glass-card">
              <p className="testimonial-card__quote">&ldquo;{item.quote}&rdquo;</p>
              <footer>
                <cite className="testimonial-card__name">{item.name}</cite>
                <span className="testimonial-card__event">{item.event}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
