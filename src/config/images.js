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
    desktop: unsplashPhoto('1514525253161-7a46d19cd819', { w: 1920, q: 80 }),
    mobile: unsplashPhoto('1514525253161-7a46d19cd819', { w: 900, q: 75 }),
    overlay: 0.65,
  },
  trust: {
    theme: 'Wedding guests mingling — warm reception energy, people in frame',
    desktop: unsplashPhoto('1511285560929-80b456fea0bc', { w: 1920, q: 80 }),
    mobile: unsplashPhoto('1511285560929-80b456fea0bc', { w: 900, q: 75 }),
    overlay: 0.7,
  },
  services: {
    theme: 'Live music crowd — guests singing along, hands raised',
    desktop: unsplashPhoto('1470225620780-dba8ba36b745', { w: 1920, q: 80 }),
    mobile: unsplashPhoto('1470225620780-dba8ba36b745', { w: 900, q: 75 }),
    overlay: 0.68,
  },
  whyUs: {
    theme: 'Festival dance floor — candid movement and nightlife energy',
    desktop: unsplashPhoto('1533174072545-7a4b6ad7a6c3', { w: 1920, q: 80 }),
    mobile: unsplashPhoto('1533174072545-7a4b6ad7a6c3', { w: 900, q: 75 }),
    overlay: 0.72,
  },
  packages: {
    theme: 'Wedding guests celebrating — candid joy and social connection',
    desktop: unsplashPhoto('1520854221256-17451cc331bf', { w: 1920, q: 80 }),
    mobile: unsplashPhoto('1520854221256-17451cc331bf', { w: 900, q: 75 }),
    overlay: 0.7,
  },
  testimonials: {
    theme: 'Elegant reception lighting — warm ambiance with guests',
    desktop: unsplashPhoto('1464366400600-7168b8af9bc3', { w: 1920, q: 80 }),
    mobile: unsplashPhoto('1464366400600-7168b8af9bc3', { w: 900, q: 75 }),
    overlay: 0.74,
  },
  faq: {
    theme: 'Corporate team celebrating together — colleagues laughing',
    desktop: unsplashPhoto('1511556532299-8f662fc26c06', { w: 1920, q: 80 }),
    mobile: unsplashPhoto('1511556532299-8f662fc26c06', { w: 900, q: 75 }),
    overlay: 0.72,
  },
  contact: {
    theme: 'Group dining and celebrating — people smiling together',
    desktop: unsplashPhoto('1414235077428-338989a2e8c0', { w: 1920, q: 80 }),
    mobile: unsplashPhoto('1414235077428-338989a2e8c0', { w: 900, q: 75 }),
    overlay: 0.78,
  },
}

/**
 * Experience section stills — dedicated URLs (not shared with other sections).
 * Verified Unsplash IDs only; avoids broken CDN mappings (e.g. lab/stock mismatches).
 */
export const EXPERIENCE_STILLS = {
  theme: {
    poster: 'Wedding dance floor — couple and guests',
    fallback: 'Wedding guests celebrating at reception',
  },
  poster: unsplashPhoto('1514525253161-7a46d19cd819', { w: 1920, q: 80 }),
  posterMobile: unsplashPhoto('1514525253161-7a46d19cd819', { w: 900, q: 75 }),
  fallback: unsplashPhoto('1520854221256-17451cc331bf', { w: 1920, q: 80 }),
  fallbackMobile: unsplashPhoto('1520854221256-17451cc331bf', { w: 900, q: 75 }),
}

/**
 * REPLACE: Trust gallery — your own candid event photos (crowds, dancing, joy).
 */
export const TRUST_GALLERY = [
  {
    label: 'Dance floor celebration with guests',
    url: unsplashPhoto('1514525253161-7a46d19cd819', { w: 600, q: 75 }),
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
export const ENABLE_BACKGROUND_VIDEO = false

/**
 * REPLACE: Your own highlight reel — wedding/party dance floors, crowd energy.
 * Pexels: guest celebrating and dancing with champagne (indoor party/reception).
 * @see https://www.pexels.com/video/woman-holding-a-champagne-glass-dancing-7583293/
 */
export const BACKGROUND_VIDEO_URL =
  'https://videos.pexels.com/video-files/7583293/7583293-sd_640_360_25fps.mp4'

/** Wedding dance floor still — shown while video loads */
export const BACKGROUND_VIDEO_POSTER = EXPERIENCE_STILLS.poster

/** Wedding guests celebrating — shown on reduced-motion, save-data, or video error */
export const BACKGROUND_VIDEO_FALLBACK = EXPERIENCE_STILLS.fallback
