import { SOCIAL_LINKS } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__row">
        <span className="footer__brand">Hein Zaw</span>
        <div className="footer__socials">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={link.label}
            >
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
