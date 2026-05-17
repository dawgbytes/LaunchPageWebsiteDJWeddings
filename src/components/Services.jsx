import SectionHeading from './SectionHeading'
import SectionBackground from './SectionBackground'

const SERVICES = [
  {
    icon: '♥',
    title: 'Weddings',
    text: 'Ceremony sound, cocktail hour, and reception mixing that honors your must-plays and keeps the dance floor full.',
  },
  {
    icon: '✦',
    title: 'Private parties',
    text: 'Birthdays, anniversaries, and backyard bashes with playlists shaped around your crowd and vibe.',
  },
  {
    icon: '◆',
    title: 'Corporate events',
    text: 'Professional presentation for galas, holiday parties, and team celebrations with polished MC support.',
  },
  {
    icon: '★',
    title: 'School events',
    text: 'Dances, fundraisers, and graduations with age-appropriate music and clear volume management.',
  },
  {
    icon: '◎',
    title: 'Sound setup',
    text: 'Crisp microphones, balanced levels, and backup equipment so speeches and toasts are heard clearly.',
  },
  {
    icon: '◐',
    title: 'Lighting',
    text: 'Uplighting, dance-floor effects, and mood washes that elevate the room without overwhelming it.',
  },
]

export default function Services() {
  return (
    <section id="services" className="section section--photo services">
      <SectionBackground section="services" />
      <div className="container section__inner">
        <SectionHeading
          eyebrow="What we do"
          title="Entertainment built around your event"
          description="Every package can be tailored. Tell us about your venue, timeline, and crowd — we'll handle the rest."
        />
        <ul className="services__grid">
          {SERVICES.map((service) => (
            <li key={service.title} className="services__card glass-card">
              <span className="services__icon" aria-hidden="true">
                {service.icon}
              </span>
              <h3 className="services__title">{service.title}</h3>
              <p>{service.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
