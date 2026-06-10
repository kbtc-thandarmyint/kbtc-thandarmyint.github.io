import { createContext, useContext, useEffect, useRef } from 'react'
import Lenis from 'lenis'

const LenisContext = createContext({ current: null })

export function LenisProvider({ children }) {
  const lenisRef = useRef(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return undefined

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true })
    lenisRef.current = lenis
    if (import.meta.env.DEV) window.__lenis = lenis

    let raf = requestAnimationFrame(function loop(time) {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    })

    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  // Smooth-scroll all in-page anchors through Lenis (falls back to native)
  useEffect(() => {
    const onClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]')
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (href === '#') return
      const target = document.querySelector(href)
      if (!target) return
      e.preventDefault()
      if (lenisRef.current) {
        lenisRef.current.scrollTo(target, { offset: href === '#top' ? 0 : -64 })
      } else {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>
}

/** Returns { stop, start } to pause smooth scrolling (modals, menus). */
export function useScrollLock() {
  const lenisRef = useContext(LenisContext)
  return {
    stop: () => {
      lenisRef.current?.stop()
      document.body.style.overflow = 'hidden'
    },
    start: () => {
      lenisRef.current?.start()
      document.body.style.overflow = ''
    },
  }
}
