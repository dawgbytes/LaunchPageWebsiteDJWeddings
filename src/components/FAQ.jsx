import { useState } from 'react'
import SectionHeading from './SectionHeading'
import SectionBackground from './SectionBackground'

const FAQ_ITEMS = [
  {
    question: 'How far in advance should we book?',
    answer:
      'Popular dates (especially Saturdays between May and October) fill quickly. We recommend reaching out 6–12 months ahead for weddings and 2–3 months for other events.',
  },
  {
    question: 'Do you travel outside your home area?',
    answer:
      'Yes — travel within our service region is included. Events beyond that may include a modest travel fee, quoted upfront.',
  },
  {
    question: 'Can we choose specific songs or genres?',
    answer:
      'Absolutely. You will receive a planning form for must-plays, do-not-plays, and general style preferences. We blend your list with crowd-reading on the night.',
  },
  {
    question: 'What equipment do you provide?',
    answer:
      'Professional-grade speakers, subs as needed, wireless microphones, and lighting options depending on your package. We carry backup gear for key components.',
  },
  {
    question: 'Are you insured?',
    answer:
      'Yes — we carry liability insurance and can provide a certificate of insurance for your venue upon request.',
  },
  {
    question: 'What is your deposit and cancellation policy?',
    answer:
      'A deposit secures your date; the balance is due before or on event day per your contract. Cancellation terms are outlined in your agreement — ask us for details when you inquire.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <section id="faq" className="section section--photo faq">
      <SectionBackground section="faq" />
      <div className="container container--narrow section__inner">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions"
          description="Don't see your answer? Send us a message — we reply within one business day."
        />
        <dl className="faq__list">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index
            const panelId = `faq-panel-${index}`
            const buttonId = `faq-button-${index}`

            return (
              <div key={item.question} className={`faq__item glass-card${isOpen ? ' faq__item--open' : ''}`}>
                <dt>
                  <button
                    type="button"
                    id={buttonId}
                    className="faq__question"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(index)}
                  >
                    {item.question}
                    <span className="faq__icon" aria-hidden="true" />
                  </button>
                </dt>
                <dd id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen}>
                  {item.answer}
                </dd>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
