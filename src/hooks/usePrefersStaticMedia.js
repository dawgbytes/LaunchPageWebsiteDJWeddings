import { useEffect, useState } from 'react'

function shouldPreferStaticMedia() {
  if (typeof window === 'undefined') return true
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const saveData = Boolean(navigator.connection?.saveData)
  return reducedMotion || saveData
}

/** True when autoplay video should be skipped (a11y / data saver). */
export function usePrefersStaticMedia() {
  const [prefersStatic, setPrefersStatic] = useState(shouldPreferStaticMedia)

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setPrefersStatic(shouldPreferStaticMedia())

    motionQuery.addEventListener('change', update)
    return () => motionQuery.removeEventListener('change', update)
  }, [])

  return prefersStatic
}
