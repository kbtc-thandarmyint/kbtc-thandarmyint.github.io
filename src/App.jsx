import { LenisProvider } from './hooks/useLenis.jsx'
import Preloader from './components/Preloader.jsx'
import CursorFX from './components/CursorFX.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Ticker from './components/Ticker.jsx'
import Stats from './components/Stats.jsx'
import About from './components/About.jsx'
import Method from './components/Method.jsx'
import Training from './components/Training.jsx'
import Gallery from './components/Gallery.jsx'
import Credentials from './components/Credentials.jsx'
import Quotes from './components/Quotes.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <LenisProvider>
      <Preloader />
      <CursorFX />
      <div className="backdrop" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Stats />
        <About />
        <Method />
        <Training />
        <Gallery />
        <Credentials />
        <Quotes />
        <Contact />
      </main>
      <Footer />
    </LenisProvider>
  )
}
