import { useState } from 'react'
import SectionHeading from './SectionHeading'
import SectionBackground from './SectionBackground'
import { EMAIL, EMAIL_HREF, PHONE, PHONE_HREF } from '../config/siteConfig'

const EVENT_TYPES = [
  'Wedding',
  'Private party',
  'Corporate event',
  'School event',
  'Other',
]

const initialForm = {
  name: '',
  email: '',
  phone: '',
  eventDate: '',
  eventType: '',
  location: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // REPLACE: Wire to Formspree, Netlify Forms, or your backend API
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section section--photo contact">
      <SectionBackground section="contact" />
      <div className="container contact__layout section__inner">
        <div className="contact__info">
          <SectionHeading
            eyebrow="Get in touch"
            title="Check availability & request a quote"
            description="Tell us about your event. We'll follow up with pricing and open dates."
            align="left"
          />
          <ul className="contact__details">
            <li>
              <span className="contact__label">Phone</span>
              {/* REPLACE: phone number in siteConfig.js */}
              <a href={PHONE_HREF}>{PHONE}</a>
            </li>
            <li>
              <span className="contact__label">Email</span>
              {/* REPLACE: email in siteConfig.js */}
              <a href={EMAIL_HREF}>{EMAIL}</a>
            </li>
          </ul>
          <p id="availability" className="contact__note glass-card">
            Weekend dates book quickly — mention your ideal date and we will confirm
            availability in our reply.
          </p>
        </div>

        <div className="contact__form-wrap glass-card">
          {submitted ? (
            <div className="contact__success" role="status">
              <h3>Thanks for reaching out!</h3>
              <p>
                This is a preview — no message was sent yet. Connect the form to your
                email service or API when you are ready to go live.
              </p>
              <button
                type="button"
                className="btn btn--outline"
                onClick={() => {
                  setSubmitted(false)
                  setForm(initialForm)
                }}
              >
                Send another inquiry
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-form__row">
                <div className="contact-form__field">
                  <label htmlFor="contact-name">Full name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="contact-form__field">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="contact-form__row">
                <div className="contact-form__field">
                  <label htmlFor="contact-phone">Phone</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="contact-form__field">
                  <label htmlFor="contact-date">Event date</label>
                  <input
                    id="contact-date"
                    name="eventDate"
                    type="date"
                    value={form.eventDate}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="contact-form__row">
                <div className="contact-form__field">
                  <label htmlFor="contact-type">Event type</label>
                  <select
                    id="contact-type"
                    name="eventType"
                    value={form.eventType}
                    onChange={handleChange}
                  >
                    <option value="">Select an event type</option>
                    {EVENT_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="contact-form__field">
                  <label htmlFor="contact-location">Event location</label>
                  <input
                    id="contact-location"
                    name="location"
                    type="text"
                    placeholder="Venue or city"
                    value={form.location}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="contact-form__field">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Guest count, hours needed, special requests..."
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn--primary btn--lg btn--block">
                Send inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
