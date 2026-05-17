import SectionHeading from './SectionHeading'
import SectionBackground from './SectionBackground'

const PACKAGES = [
  {
    name: 'Small Event',
    price: 'From $650',
    description: 'Perfect for house parties, small receptions, and gatherings up to ~75 guests.',
    features: [
      'Up to 4 hours of DJ service',
      'Professional sound system',
      'Wireless mic for toasts',
      'Music planning consultation',
    ],
    featured: false,
  },
  {
    name: 'Wedding Reception',
    price: 'From $1,250',
    description: 'Our most popular option for receptions, with coordination support built in.',
    features: [
      'Up to 6 hours of reception coverage',
      'Ceremony or cocktail add-on available',
      'Enhanced lighting package',
      'Timeline & vendor coordination',
      'Custom playlist & do-not-play list',
    ],
    featured: true,
  },
  {
    name: 'Full Event Experience',
    price: 'Custom quote',
    description: 'Ceremony through last dance — sound, lighting, and hosting for larger celebrations.',
    features: [
      'Full-day or multi-location coverage',
      'Premium sound & lighting',
      'Dedicated planning sessions',
      'Backup equipment on site',
      'Optional photo booth add-on',
    ],
    featured: false,
  },
]

export default function Packages() {
  return (
    <section id="packages" className="section section--photo packages">
      <SectionBackground section="packages" />
      <div className="container section__inner">
        <SectionHeading
          eyebrow="Packages"
          title="Clear options, room to customize"
          description="Pricing varies by date, location, and add-ons. Request a quote for an exact figure."
        />
        <div className="packages__grid">
          {PACKAGES.map((pkg) => (
            <article
              key={pkg.name}
              className={`package-card glass-card${pkg.featured ? ' package-card--featured' : ''}`}
            >
              {pkg.featured && (
                <span className="package-card__badge">Most popular</span>
              )}
              <h3 className="package-card__name">{pkg.name}</h3>
              <p className="package-card__price">{pkg.price}</p>
              <p className="package-card__desc">{pkg.description}</p>
              <ul className="package-card__features">
                {pkg.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a href="#contact" className="btn btn--primary btn--block">
                Get a quote
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
