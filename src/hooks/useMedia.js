import { useEffect, useState } from 'react'

export function useMedia(query) {
  const [matches, setMatches] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches,
  )
  useEffect(() => {
    const mql = window.matchMedia(query)
    const onChange = () => setMatches(mql.matches)
    mql.addEventListener('change', onChange)
    onChange()
    return () => mql.removeEventListener('change', onChange)
  }, [query])
  return matches
}

export const useIsDesktop = () => useMedia('(min-width: 1024px)')
export const useIsFinePointer = () => useMedia('(hover: hover) and (pointer: fine)')
