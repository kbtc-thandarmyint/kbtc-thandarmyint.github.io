import { Mail } from 'lucide-react'
import { CONTACT_LINKS } from '../data/content.js'

// Inline SVG for social icons
const TikTok = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
)
const Instagram = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
)
const Facebook = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
)

const Icons = {
  instagram: <Instagram size={14} />,
  facebook: <Facebook size={14} />,
  tiktok: <TikTok size={14} />,
  email: <Mail size={14} />
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__row">
        <span className="footer__brand">Hein Zaw</span>
        <div className="footer__socials">
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={link.label}
            >
              <span className="footer__icon">{Icons[link.icon]}</span>
              {link.label}
            </a>
          ))}
        </div>
        <div className="footer__right">
          <span>© {new Date().getFullYear()} HEIN ZAW</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}
