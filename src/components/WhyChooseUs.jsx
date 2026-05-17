import SectionHeading from './SectionHeading'
import SectionBackground from './SectionBackground'

const REASONS = [
  {
    title: 'Experienced host',
    text: 'Smooth introductions, timeline awareness, and confidence on the mic when you need it.',
  },
  {
    title: 'Reliable partner',
    text: 'Early arrival, thorough sound checks, and clear communication before and on event day.',
  },
  {
    title: 'Customized music',
    text: 'Planning forms and consultations so your playlist reflects your taste — not a generic set.',
  },
  {
    title: 'Professional setup',
    text: 'Clean cabling, quality speakers, and lighting that looks sharp in photos and in person.',
  },
  {
    title: 'Easy planning',
    text: 'One point of contact, straightforward packages, and flexible add-ons as your needs grow.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section section--photo why">
      <SectionBackground section="whyUs" />
      <div className="container why__layout section__inner">
        <SectionHeading
          eyebrow="Why us"
          title="The details that make the night feel effortless"
          align="left"
        />
        <ul className="why__list">
          {REASONS.map((item, index) => (
            <li key={item.title} className="why__item glass-card">
              <span className="why__number" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="why__title">{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
