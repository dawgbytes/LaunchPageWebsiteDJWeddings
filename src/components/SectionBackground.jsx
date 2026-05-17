import { getSectionBackgroundStyle } from '../config/images'

/**
 * Full-bleed photographic background with gradient overlay.
 */
export default function SectionBackground({ section, parallax = true }) {
  const style = getSectionBackgroundStyle(section)

  return (
    <div
      className={`section-bg${parallax ? ' section-bg--parallax' : ''}`}
      style={style}
      aria-hidden="true"
    >
      <div className="section-bg__media" />
      <div className="section-bg__overlay" />
    </div>
  )
}