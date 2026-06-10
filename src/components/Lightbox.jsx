import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useScrollLock } from '../hooks/useLenis.jsx'

export default function Lightbox({ open, src, alt, caption, onClose, onNext, onPrev }) {
  const { stop, start } = useScrollLock()

  useEffect(() => {
    if (open) stop()
    else start()
    return () => start()
  }, [open]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight' && onNext) onNext()
      if (e.key === 'ArrowLeft' && onPrev) onPrev()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose, onNext, onPrev])

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <button className="lightbox__close" aria-label="Close" onClick={onClose}>
            <X size={24} />
          </button>

          {onPrev && (
            <button className="lightbox__nav lightbox__nav--prev" aria-label="Previous image" onClick={(e) => { e.stopPropagation(); onPrev(); }}>
              <ChevronLeft size={32} />
            </button>
          )}

          <motion.figure
            className="lightbox__fig"
            initial={{ scale: 0.94, y: 14 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.22, 0.7, 0.2, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={src} alt={alt} />
            <figcaption>{caption}</figcaption>
          </motion.figure>

          {onNext && (
            <button className="lightbox__nav lightbox__nav--next" aria-label="Next image" onClick={(e) => { e.stopPropagation(); onNext(); }}>
              <ChevronRight size={32} />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
