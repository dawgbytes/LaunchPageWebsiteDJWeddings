import { useState } from 'react'
import { COMPANY_NAME, NAV_LINKS } from '../config/siteConfig'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-header${menuOpen ? ' site-header--open' : ''}`}>
      <div className="site-header__inner">
        <a href="#" className="site-header__logo" onClick={closeMenu}>
          {/* REPLACE: Add your logo image here if desired */}
          <span className="site-header__logo-mark" aria-hidden="true" />
          <span className="site-header__logo-text">{COMPANY_NAME}</span>
        </a>

        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="visually-hidden">
            {menuOpen ? 'Close menu' : 'Open menu'}
          </span>
          <span className="site-header__toggle-bar" />
          <span className="site-header__toggle-bar" />
          <span className="site-header__toggle-bar" />
        </button>

        <nav id="main-nav" className="site-header__nav" aria-label="Main">
          <ul className="site-header__nav-list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} onClick={closeMenu}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn--primary btn--sm" onClick={closeMenu}>
            Book now
          </a>
        </nav>
      </div>
    </header>
  )
}
