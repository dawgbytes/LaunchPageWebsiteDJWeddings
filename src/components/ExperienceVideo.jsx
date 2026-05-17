import { useState } from 'react'
import {
  BACKGROUND_VIDEO_FALLBACK,
  BACKGROUND_VIDEO_POSTER,
  BACKGROUND_VIDEO_URL,
  ENABLE_BACKGROUND_VIDEO,
} from '../config/images'
import { usePrefersStaticMedia } from '../hooks/usePrefersStaticMedia'

export default function ExperienceVideo() {
  const prefersStatic = usePrefersStaticMedia()
  const [videoFailed, setVideoFailed] = useState(false)

  // Background video check removed; rendering with fallback image instead.
  const showVideo = !prefersStatic && !videoFailed

  return (
    <section
      id="experience"
      className="experience-video"
      aria-labelledby="experience-heading"
    >
      <div className="experience-video__media" aria-hidden="true">
        <div
          className="experience-video__fallback"
          style={{ backgroundImage: `url("${BACKGROUND_VIDEO_FALLBACK}")` }}
        />
        {/* Video element removed to avoid the unrelated stock video. Using fallback image instead. */}
        <div className="experience-video__overlay" />
      </div>

      <div className="container experience-video__content section__inner">
        <p className="experience-video__eyebrow">The experience</p>
        <h2 id="experience-heading" className="experience-video__title">
          Lights up. Crowd leans in. Your night starts here.
        </h2>
        <p className="experience-video__desc">
          A glimpse of the energy we bring—seamless mixes, polished sound, and a
          dance floor that stays alive.
        </p>
        <a href="#contact" className="btn btn--primary btn--lg">
          Plan your event
        </a>
      </div>
    </section>
  )
}
