/**
 * Background & gallery image URLs (Unsplash placeholders).
 *
 * PHOTO DIRECTION: Energetic, candid-style shots with real people enjoying events —
 * packed dance floors, laughing guests, active weddings, corporate mingling, warm
 * cinematic lighting. Avoid empty venues, staged setups, or isolated gear.
 *
 * REPLACE: Swap each URL with your own hosted photos that match this direction.
 *
 * @see https://unsplash.com — license applies until you use owned media.
 */

const UNSPLASH = 'https://images.unsplash.com'

/** Build a cropped Unsplash URL for CSS background-image */
export function unsplashPhoto(photoId, { w = 1920, q = 80 } = {}) {
  return `${UNSPLASH}/photo-${photoId}?auto=format&fit=crop&w=${w}&q=${q}`
}

/**
 * Full-width section backgrounds — desktop (1920) + mobile (900) variants.
 * `theme` describes the crowd-energy focus for each section.
 */
export const SECTION_BACKGROUNDS = {
  hero: {
    theme: 'Packed wedding dance floor — couple and guests celebrating',
    desktop: unsplashPhoto('1519741497674-611481863552', { w: 1920, q: 80 }),
    mobile: unsplashPhoto('1519741497674-611481863552', { w: 900, q: 75 }),
    overlay: 0.65,
  },
  trust: {
    theme: 'Wedding guests mingling — warm reception energy, people in frame',
    desktop: unsplashPhoto('1511285560929-80b456fea0bc', { w: 1920, q: 80 }),
    mobile: unsplashPhoto('1511285560929-80b456fea0bc', { w: 900, q: 75 }),
    overlay: 0.7,
  },
  services: {
    theme: 'Party crowd — confetti, singing along, hands in the air',
    desktop: unsplashPhoto('1492684223066-81342ee5ff30', { w: 1920, q: 80 }),
    mobile: unsplashPhoto('1492684223066-81342ee5ff30', { w: 900, q: 75 }),
    overlay: 0.68,
  },
  whyUs: {
    theme: 'Live music crowd — festival energy, movement and excitement',
    desktop: unsplashPhoto('1470225620780-dba8ba36b745', { w: 1920, q: 80 }),
    mobile: unsplashPhoto('1470225620780-dba8ba36b745', { w: 900, q: 75 }),
    overlay: 0.72,
  },
  packages: {
    theme: 'Wedding guests celebrating — candid joy and social connection',
    desktop: unsplashPhoto('1511795409834-ef04bbd61622', { w: 1920, q: 80 }),
    mobile: unsplashPhoto('1511795409834-ef04bbd61622', { w: 900, q: 75 }),
    overlay: 0.7,
  },
  testimonials: {
    theme: 'Festival crowd dancing — candid nightlife and movement',
    desktop: unsplashPhoto('1533174072545-7a4b6ad7a6c3', { w: 1920, q: 80 }),
    mobile: unsplashPhoto('1533174072545-7a4b6ad7a6c3', { w: 900, q: 75 }),
    overlay: 0.74,
  },
  faq: {
    theme: 'Corporate team celebrating together — colleagues laughing',
    desktop: unsplashPhoto('1556761175-b413da4baf72', { w: 1920, q: 80 }),
    mobile: unsplashPhoto('1556761175-b413da4baf72', { w: 900, q: 75 }),
    overlay: 0.72,
  },
  contact: {
    theme: 'Social celebration — group enjoying an upbeat gathering',
    desktop: unsplashPhoto('1566073771259-6a8506099945', { w: 1920, q: 80 }),
    mobile: unsplashPhoto('1566073771259-6a8506099945', { w: 900, q: 75 }),
    overlay: 0.78,
  },
}

/**
 * REPLACE: Trust gallery — your own candid event photos (crowds, dancing, joy).
 * Keep the same energetic, people-first direction as section backgrounds.
 */
export const TRUST_GALLERY = [
  {
    label: 'Dance floor celebration with guests',
    url: unsplashPhoto('1519741497674-611481863552', { w: 600, q: 75 }),
  },
  {
    label: 'Wedding reception atmosphere with guests',
    url: unsplashPhoto('1464366400600-7168b8af9bc3', { w: 600, q: 75 }),
  },
  {
    label: 'Lively group dining and socializing',
    url: unsplashPhoto('1414235077428-338989a2e8c0', { w: 600, q: 75 }),
  },
]

/** Inline style object for SectionBackground CSS variables */
export function getSectionBackgroundStyle(sectionKey) {
  const bg = SECTION_BACKGROUNDS[sectionKey]
  if (!bg) return {}

  return {
    '--bg-image-mobile': `url("${bg.mobile}")`,
    '--bg-image-desktop': `url("${bg.desktop}")`,
    '--bg-overlay-opacity': String(bg.overlay),
  }
}

/* ——— Background video (Experience section) ——— */

/** Set to false to hide the video band without removing code */
export const ENABLE_BACKGROUND_VIDEO = true

/**
 * REPLACE: Your own highlight reel — dancing crowds, reception energy, candid joy.
 * Pexels placeholder: celebration crowd movement (muted decorative loop).
 * @see https://www.pexels.com/video/people-having-fun-3195394/
 */
export const BACKGROUND_VIDEO_URL =
  'https://videos.pexels.com/video-files/3195394/3195394-sd_640_360_25fps.mp4'

/** Still shown while video loads and when video is disabled */
export const BACKGROUND_VIDEO_POSTER = SECTION_BACKGROUNDS.hero.desktop

/** Static image when reduced-motion, save-data, or video error */
export const BACKGROUND_VIDEO_FALLBACK = SECTION_BACKGROUNDS.services.desktop
