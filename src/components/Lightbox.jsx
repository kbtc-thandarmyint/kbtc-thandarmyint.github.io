import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useScrollLock } from '../hooks/useLenis.jsx'

export default function Lightbox({ open, src, alt, caption, onClose }) {
  const { stop, start } = useScrollLock()

  useEffect(() => {
    if (open) stop()
    else start()
    return () => start()
  }, [open]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  // Portal to <body> so the modal stacks above the fixed nav (main has its own stacking context)
  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Certificate viewer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <button className="lightbox__close" aria-label="Close certificate viewer" onClick={onClose} autoFocus>
            ✕
          </button>
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
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
