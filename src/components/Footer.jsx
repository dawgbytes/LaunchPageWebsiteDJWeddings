import {
  COMPANY_NAME,
  EMAIL,
  EMAIL_HREF,
  PHONE,
  PHONE_HREF,
  SERVICE_AREA,
  SOCIAL_LINKS,
  TAGLINE,
} from '../config/siteConfig'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <p className="site-footer__name">{COMPANY_NAME}</p>
          <p className="site-footer__tagline">{TAGLINE}</p>
        </div>

        <div>
          <h2 className="site-footer__heading">Contact</h2>
          <ul className="site-footer__list">
            <li>
              {/* REPLACE: phone */}
              <a href={PHONE_HREF}>{PHONE}</a>
            </li>
            <li>
              {/* REPLACE: email */}
              <a href={EMAIL_HREF}>{EMAIL}</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="site-footer__heading">Service area</h2>
          <p className="site-footer__area">{SERVICE_AREA}</p>
        </div>

        <div>
          <h2 className="site-footer__heading">Follow</h2>
          <ul className="site-footer__social">
            <li>
              {/* REPLACE: Instagram URL */}
              <a href={SOCIAL_LINKS.instagram}>Instagram</a>
            </li>
            <li>
              {/* REPLACE: Facebook URL */}
              <a href={SOCIAL_LINKS.facebook}>Facebook</a>
            </li>
            <li>
              {/* REPLACE: TikTok URL */}
              <a href={SOCIAL_LINKS.tiktok}>TikTok</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>
          &copy; {year} {COMPANY_NAME}. All rights reserved.
        </p>
        <a href="#hero" className="site-footer__top">
          Back to top
        </a>
      </div>
    </footer>
  )
}
